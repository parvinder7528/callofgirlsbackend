const cron = require('node-cron');
const { syncAllBoosts } = require('./boostCronService');

const initBoostCron = () => {
    // Har 15 minute mein check karega
    cron.schedule('*/2 * * * *', async () => {
        console.log(`[CRON] Checking boosts at ${new Date().toLocaleTimeString()}`);
        try {
            const result = await syncAllBoosts();
            console.log(`[CRON] Success: Found ${result.count} active boosts.`);
        } catch (err) {
            console.error('[CRON] Failed:', err.message);
        }
    });

    console.log('🚀 Boost Cron Job Started (Running every 2 mins)');
};

module.exports = {initBoostCron};