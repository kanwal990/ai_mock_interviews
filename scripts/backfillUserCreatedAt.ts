import { db } from "@/firebase/admin";

async function backfillUserCreatedAt() {
  const usersSnap = await db.collection("users").get();
  let updated = 0;
  for (const doc of usersSnap.docs) {
    const data = doc.data();
    if (!data.createdAt || !String(data.createdAt).trim()) {
      // Use Firestore's updateTime as fallback, or set to now
      const createdAt = (doc.updateTime && typeof doc.updateTime.toDate === 'function')
        ? doc.updateTime.toDate().toISOString()
        : new Date().toISOString();
      await db.collection("users").doc(doc.id).update({ createdAt });
      console.log(`Updated user ${doc.id} with createdAt: ${createdAt}`);
      updated++;
    }
  }
  return updated;
}

// Run this script manually (node ./scripts/backfillUserCreatedAt.ts)
backfillUserCreatedAt().then(updated => {
  console.log(`Backfilled createdAt for ${updated} users.`);
  process.exit(0);
});
