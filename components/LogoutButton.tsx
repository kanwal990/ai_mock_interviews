"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

interface LogoutButtonProps {
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
}

const LogoutButton = ({ variant = "default" }: LogoutButtonProps) => {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await fetch("/api/sign-in", {
        method: "DELETE",
        credentials: "include",
      });
      router.push("/sign-in");
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  return (
    <Button variant={variant} onClick={handleLogout} className="cursor-pointer">
      Logout
    </Button>
  );
};

export default LogoutButton;
