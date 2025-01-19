"use client";

import { SignOutButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="space-x-2">
      <Button>Call Protected</Button>
      <Button>Call Unprotected</Button>
      <SignOutButton>
        <Button>Sign Out</Button>
      </SignOutButton>
    </div>
  );
}
