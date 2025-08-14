import React from "react";
import Link from "next/link";

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-100 p-8 flex flex-col items-center justify-center">
            <section className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl w-full text-center border-t-4 border-cyan-400">
                <h1 className="text-3xl font-bold mb-4 text-black">Our Services</h1>
                <p className="text-lg mb-6 text-black">
                    PrepWise offers a suite of tools to help you prepare for your next big interview:
                </p>
                <ul className="text-left space-y-3 mx-auto max-w-md">
                    <li className="text-black"><span className="font-semibold text-black">AI Mock Interviews:</span> Practice with realistic, AI-driven interview simulations tailored to your role and experience.</li>
                    <li className="text-black"><span className="font-semibold text-black">Personalized Feedback:</span> Get actionable feedback and tips to improve your interview skills.</li>
                    <li className="text-black"><span className="font-semibold text-black">Interview Analytics:</span> Identify areas for improvement.</li>
                    <li className="text-black"><span className="font-semibold text-black">Expert Resources:</span> Access curated guides, question banks, and best practices for technical and behavioral interviews.</li>
                </ul>
                <p className="mt-8 text-black">Ready to level up your interview game? Start exploring our services today!</p>
                <Link href="/" className="inline-block mt-10 px-6 py-2 bg-cyan-700 text-white font-semibold rounded-lg shadow hover:bg-cyan-800 transition-colors">
                    Back to Home
                </Link>
            </section>
        </main>
    );
}
