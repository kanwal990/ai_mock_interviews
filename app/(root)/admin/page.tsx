

import { db } from "@/firebase/admin";
import AdminDashboard from "@/components/AdminDashboard";

async function getAdminStats() {
    // Get all users
    const usersSnap = await db.collection("users").get();
    const users = usersSnap.docs.map(doc => {
        const data = doc.data();
        return {
            id: doc.id,
            ...data,
            created: data.created && data.created.toDate ? data.created.toDate().toISOString() : data.created || null,
        };
    });
    const totalUsers = users.length;

    // Get all interviews
    const interviewsSnap = await db.collection("interviews").get();
    const interviews = interviewsSnap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    const totalInterviews = interviews.length;

    return { totalUsers, totalInterviews, users, interviews };
}


import React from "react";

export default async function AdminPage() {
    const { totalUsers, totalInterviews, users, interviews } = await getAdminStats();
    return <AdminDashboard totalUsers={totalUsers} totalInterviews={totalInterviews} users={users} interviews={interviews} />;
}
