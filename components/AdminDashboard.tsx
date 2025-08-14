"use client";
import React, { useState } from "react";

interface User {
    id: string;
    name: string;
    email: string;
    created?: string;
}

interface Interview {
    id: string;
    role: string;
    level: string;
    questions: string[];
    techstack: string[];
    createdAt: string;
    userId: string;
    type: string;
    finalized: boolean;
}

export default function AdminDashboard({ totalUsers, totalInterviews, users, interviews }: { totalUsers: number, totalInterviews: number, users: User[], interviews: Interview[] }) {
    const [showUsers, setShowUsers] = useState(false);
    const [showInterviews, setShowInterviews] = useState(false);

    return (
        <main className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-100 p-8">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-3xl font-bold mb-8 text-center text-cyan-900">Admin Dashboard</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <button
                        className="bg-white rounded-xl shadow p-6 flex flex-col items-center cursor-pointer hover:bg-cyan-50 focus:outline-none"
                        onClick={() => setShowUsers(true)}
                    >
                        <span className="text-5xl font-extrabold text-cyan-600">{totalUsers}</span>
                        <span className="mt-2 text-lg text-cyan-900 font-medium"> Users</span>
                    </button>
                    <button
                        className="bg-white rounded-xl shadow p-6 flex flex-col items-center cursor-pointer hover:bg-cyan-50 focus:outline-none"
                        onClick={() => setShowInterviews(true)}
                    >
                        <span className="text-5xl font-extrabold text-cyan-600">{totalInterviews}</span>
                        <span className="mt-2 text-lg text-cyan-900 font-medium">Total Generated Interviews</span>
                    </button>
                    {/* Interviews Table Modal */}
                    {showInterviews && (
                        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
                            <div className="bg-white rounded-lg shadow-lg p-6 max-w-full w-full relative max-h-[80vh] overflow-y-auto">
                                <button
                                    className="absolute top-2 right-2 text-cyan-700 hover:text-cyan-900 text-2xl font-bold"
                                    onClick={() => setShowInterviews(false)}
                                    aria-label="Close"
                                >
                                    &times;
                                </button>
                                <h2 className="text-2xl font-bold mb-4 text-cyan-900">Interviews List</h2>
                                <div className="overflow-x-auto">
                                    <div className="max-h-[60vh] overflow-y-auto">
                                        <table className="w-full border border-cyan-200">
                                            <thead>
                                                <tr className="bg-cyan-100">
                                                    <th className="py-2 px-4 border-b">Interview ID</th>
                                                    <th className="py-2 px-4 border-b">User ID</th>
                                                    <th className="py-2 px-4 border-b">Role</th>
                                                    <th className="py-2 px-4 border-b">Level</th>
                                                    <th className="py-2 px-4 border-b">Type</th>
                                                    <th className="py-2 px-4 border-b">Tech Stack</th>
                                                    <th className="py-2 px-4 border-b">Created At</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {interviews.map((interview, index) => (

                                                    <tr key={interview.id} className="even:bg-cyan-50">
                                                        <td className="py-2 px-4 border-b">{++index}</td>
                                                        <td className="py-2 px-4 border-b">{interview.userId}</td>
                                                        <td className="py-2 px-4 border-b">{interview.role}</td>
                                                        <td className="py-2 px-4 border-b">{interview.level}</td>
                                                        <td className="py-2 px-4 border-b">{interview.type}</td>
                                                        <td className="py-2 px-4 border-b">{Array.isArray(interview.techstack) ? interview.techstack.join(", ") : interview.techstack}</td>
                                                        <td className="py-2 px-4 border-b">{interview.createdAt ? new Date(interview.createdAt).toLocaleString() : "-"}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* User Table Modal */}
                {showUsers && (
                    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
                        <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl w-full relative">
                            <button
                                className="absolute top-2 right-2 text-cyan-700 hover:text-cyan-900 text-2xl font-bold"
                                onClick={() => setShowUsers(false)}
                                aria-label="Close"
                            >
                                &times;
                            </button>
                            <h2 className="text-2xl font-bold mb-4 text-cyan-900">Users List</h2>
                            <div className="overflow-x-auto">
                                <table className="min-w-full border border-cyan-200">
                                    <thead>
                                        <tr className="bg-cyan-100 text-left">
                                            <th className="py-2 px-4 border-b">#</th>
                                            <th className="py-2 px-4 border-b">Name</th>
                                            <th className="py-2 px-4 border-b">Email</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        {users.map((user, index) => (
                                            <tr key={user.id} className="even:bg-cyan-50">
                                                <td className="py-2 px-4 border-b">{index + 1}</td>
                                                <td className="py-2 px-4 border-b">{user.name}</td>
                                                <td className="py-2 px-4 border-b">{user.email}</td>


                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </main>
    );
}
