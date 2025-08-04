"use client";

import { useEffect, useState } from "react";
import { getCurrentUser } from "@/lib/actions/auth.action";
import Image from "next/image";
import Link from "next/link";

declare type User = {
  name: string;
  email: string;
  id: string;
};

export default function ProfilePage() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      const userData = await getCurrentUser();
      setUser(userData);
      setLoading(false);
    };
    fetchUser();
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h2 className="text-2xl font-bold text-primary-700">Loading...</h2>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h2 className="text-2xl font-bold text-red-500">User not found</h2>
        <p className="mt-2 text-gray-500">Please sign in to view your profile.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <div className="rounded-xl shadow-lg p-8 w-full max-w-md flex flex-col items-center">
        <Image src="/user-avatar.png" alt="User Avatar" width={96} height={96} className="rounded-full mb-4 border-4 border-primary-200" />
        <h1 className="text-3xl font-bold text-primary-700 mb-2">{user.name}</h1>
        <p className="text-lg text-primary-500 mb-4">{user.email}</p>
            <Link href="/" className="text-xs font-semibold text-primary-500 hover:underline">
              ← Go Back
            </Link>
      </div>
    </div>
  );
}
