const cron = require('node-cron');
const model = require('../model/index');

console.log('🚀 Ads Cron File Loaded Successfully');

// ===============================
// ⏱️ START ADS (pending → running)
// ===============================
cron.schedule('*/1 * * * *', async () => {
  try {
    console.log('⏱️ START CRON CHECKING PENDING ADS');

    const now = new Date();

    const result = await model.adsModel.updateMany(
      {
        status: 'pending',
        startDate: { $lte: now }
      },
      {
        $set: { status: 'running' }
      }
    );

    console.log(`📌 Ads Activated: ${result.modifiedCount}`);

  } catch (error) {
    console.log('❌ Start Cron Error:', error.message);
  }
});


// ===============================
// 💰 DAILY DEDUCTION CRON
// ===============================
cron.schedule('0 0 * * *', async () => {
  try {
    console.log('💰 DAILY ADS CRON STARTED');

    const now = new Date();

    const runningAds = await model.adsModel.find({
      status: 'running',
      startDate: { $lte: now },
      endDate: { $gte: now }
    });

    console.log(`📊 Running Ads Found: ${runningAds.length}`);

    for (let ad of runningAds) {

      console.log(`➡ Processing Ad: ${ad._id}`);

      const dailyCost = 1;

      // ❌ budget finished
      if (ad.remainingBudget <= 0) {
        ad.status = 'expired';
        await ad.save();
        console.log(`❌ Ad Expired (no budget): ${ad._id}`);
        continue;
      }

      // 💸 deduction
      ad.spentBudget = (ad.spentBudget || 0) + dailyCost;
      ad.remainingBudget = (ad.remainingBudget || ad.budget) - dailyCost;

      // ❌ expire if budget over
      if (ad.remainingBudget <= 0) {
        ad.status = 'expired';
        ad.remainingBudget = 0;
      }

      await ad.save();

      console.log(`💸 Updated Ad: ${ad._id} | Remaining: ${ad.remainingBudget}`);
    }

    console.log('✅ DAILY CRON COMPLETED');

  } catch (error) {
    console.log('❌ Daily Cron Error:', error.message);
  }
});