const models = require('../model/index.js');
const moment = require('moment-timezone');
const ProfileBoost = models.boostModel;
const Profile = models.userModel;



const checkIfInSlot = (currentTime, slots) => {
    return slots.find(slot => {
        const { startTime, endTime } = slot;
        
        const start = startTime === "24:00" ? "00:00" : startTime;
        const end = endTime === "24:00" ? "00:00" : endTime;

        if (start > end) {
            return currentTime >= start || currentTime < end;
        }
        return currentTime >= start && currentTime < end;
    });
};

const syncAllBoosts = async () => {
    try {
        const now = moment().tz("Asia/Kolkata");
        const currentTime = now.format('HH:mm'); 

        console.log(`[SYNC] Checking for Time: ${currentTime}`);

        const activeBoosts = await ProfileBoost.find({
            status: 'active',
            isPaymentVerified: true,
            $expr: { $lt: ["$runBoostCount", "$totalBoostCount"] }
        });

        let updatedCount = 0;

        for (const boost of activeBoosts) {
            const activeSlot = checkIfInSlot(currentTime, boost.timeSlots);

            if (activeSlot) {
                await Profile.findByIdAndUpdate(boost.userId, {
                    isBoosted: true,
                    boostIntensity: boost.intensity.toLowerCase()
                });

                let currentRunCount = boost.runBoostCount;
                let isSlotChanged = false;

                if (boost.lastProcessedSlot !== activeSlot.slotName) {
                    currentRunCount = boost.runBoostCount + 1; 
                    isSlotChanged = true;
                    console.log(`[COUNT INCREMENTED] User ${boost.userId} entered NEW slot: ${activeSlot.slotName}. Total used slots: ${currentRunCount}`);
                } else {
                    console.log(`[ALREADY PROCESSED] User ${boost.userId} is still in the same slot: ${activeSlot.slotName}. No count added.`);
                }

                if (currentRunCount >= boost.totalBoostCount) {
                    console.log(`[COMPLETED] All ${boost.totalBoostCount} slots finished for user: ${boost.userId}`);
                    
                    await Profile.findByIdAndUpdate(boost.userId, {
                        isBoosted: false,
                        boostIntensity: 'none'
                    });

                    await ProfileBoost.findByIdAndUpdate(boost._id, { 
                        runBoostCount: boost.totalBoostCount,
                        lastProcessedSlot: activeSlot.slotName,
                        status: 'completed', 
                        isRunning: false 
                    });
                } else {
                    const updateData = { isRunning: true };
                    if (isSlotChanged) {
                        updateData.runBoostCount = currentRunCount;
                        updateData.lastProcessedSlot = activeSlot.slotName; 
                    }
                    await ProfileBoost.findByIdAndUpdate(boost._id, updateData);
                }
                
                updatedCount++;
            } 
            else {
                if (boost.isRunning) {
                    console.log(`[PAUSING] Outside slots. Pausing boost for user: ${boost.userId}`);
                    
                    await Profile.findByIdAndUpdate(boost.userId, {
                        isBoosted: false,
                        boostIntensity: 'none'
                    });
                    
                    await ProfileBoost.findByIdAndUpdate(boost._id, { 
                        isRunning: false 
                    });
                    
                    updatedCount++;
                }
            }
        }

        return { success: true, count: updatedCount };
    } catch (error) {
        console.error('Boost Sync Error:', error);
        throw error;
    }
};
module.exports = { syncAllBoosts };