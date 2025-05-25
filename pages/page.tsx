import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 p-6 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4 text-center">Reflecta</h1>
      <p className="text-lg text-gray-700 mb-6 text-center max-w-xl">
        Your AI-powered communication mirror. Reflecta listens to your tone and summaries what you say — so you can improve how you connect with people.
      </p>
      <Card className="w-full max-w-md shadow-xl">
        <CardContent className="p-6">
          <p className="mb-4 text-gray-600">Join the waitlist for early access:</p>
          <form
            action="https://formspree.io/f/mwkajbyl"
            method="POST"
            className="flex flex-col space-y-4"
          >
            <Input type="email" name="email" placeholder="Enter your email" required />
            <Button type="submit" className="w-full">Notify Me</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
