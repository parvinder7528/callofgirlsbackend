const models = require('../model/index.js');
const moment = require('moment-timezone');
const ProfileBoost = models.boostModel;
const Profile = models.userModel;


const checkIfInSlot = (currentTime, slots) => {
    return slots.some(slot => {
        const { startTime, endTime } = slot;
        
        if (startTime > endTime) {
            return currentTime >= startTime || currentTime < endTime;
        }
        return currentTime >= startTime && currentTime < endTime;
    });
};


const syncAllBoosts = async () => {
    try {
        const now = moment().tz("Asia/Kolkata");
        const currentTime = now.format('HH:mm'); 
        const currentDate = now.toDate();

        console.log(`[SYNC] Checking for Time: ${currentTime}`);

        // 1. Handle Expiry (Directly Update)
        const expired = await ProfileBoost.find({ 
            status: 'active', 
            expiresAt: { $lt: currentDate } 
        });

        for (const exp of expired) {
            await Profile.findByIdAndUpdate(exp.userId, { isBoosted: false, boostIntensity: 'none' });
            await ProfileBoost.findByIdAndUpdate(exp._id, { status: 'completed', isRunning: false });
        }

        const activeBoosts = await ProfileBoost.find({
            status: 'active',
            isPaymentVerified: true,
            activatedAt: { $lte: currentDate },
            expiresAt: { $gte: currentDate }
        });

        let updatedCount = 0;

        for (const boost of activeBoosts) {
            const isInSlot = checkIfInSlot(currentTime, boost.timeSlots);

            if (isInSlot && !boost.isRunning) {
                console.log(`[STARTING] Boosting user: ${boost.userId}`);
                
                await Profile.findByIdAndUpdate(boost.userId, {
                    isBoosted: true,
                    boostIntensity: boost.intensity.toLowerCase()
                });
                await ProfileBoost.findByIdAndUpdate(boost._id, { isRunning: true });
                
                updatedCount++;
            } 
            
            else if (!isInSlot && boost.isRunning) {
                console.log(`[STOPPING] Removing boost for user: ${boost.userId}`);
                
                await Profile.findByIdAndUpdate(boost.userId, {
                    isBoosted: false,
                    boostIntensity: 'none'
                });
                await ProfileBoost.findByIdAndUpdate(boost._id, { isRunning: false });
                
                updatedCount++;
            }
            
        }

        return { success: true, count: updatedCount };
    } catch (error) {
        console.error('Boost Sync Error:', error);
        throw error;
    }
};

// const syncAllBoosts = async () => {
//     try {
//         const now = moment().tz("Asia/Kolkata");
//         const currentTime = now.format('HH:mm'); 
//         const currentDate = now.toDate();

//         console.log(`[SYNC] Checking for Time: ${currentTime}`);

//         await ProfileBoost.updateMany(
//             { status: 'active', expiresAt: { $lt: currentDate } },
//             { $set: { status: 'expired' } }
//         );

//         await Profile.updateMany({}, { $set: { isBoosted: false, boostIntensity: 'none' } });

//         const activeBoosts = await ProfileBoost.find({
//             isRunning: false,
//             status: 'active',
//             isPaymentVerified: true,
//             activatedAt: { $lte: currentDate },
//             expiresAt: { $gte: currentDate }
//         });

//         let boostedCount = 0;

//         for (const boost of activeBoosts) {
//             const isInSlot = checkIfInSlot(currentTime, boost.timeSlots);

//             if (isInSlot) {
//                 await Profile.findByIdAndUpdate(boost.userId, {
//                     isBoosted: true,
//                     boostIntensity: boost.intensity
//                 });
//                 boostedCount++;
//                 await ProfileBoost.findByIdAndUpdate(boost._id, { isRunning: true });
//             }else {
//                 await ProfileBoost.findByIdAndUpdate(boost._id, { isRunning: false });
//             }
//         }

//         return { success: true, count: boostedCount };
//     } catch (error) {
//         console.error('Boost Sync Error:', error);
//         throw error;
//     }
// };

module.exports = { syncAllBoosts };