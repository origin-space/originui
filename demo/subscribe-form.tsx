"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { subscribe } from "./subscribe-action";

export default function SubscribeForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const result = await subscribe(email);
      if (!result.success) {
        setStatus("error");
        setMessage(result.error);
      } else {
        setStatus("success");
        setMessage("Thanks for subscribing!");
        setEmail("");
      }
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Failed to subscribe");
    }
  };

  return (
    <div className="rounded-xl bg-zinc-900 px-4 py-10 sm:px-8">
      <h2 className="mb-6 text-xl/[1.1] font-extrabold tracking-tight text-zinc-100 md:text-2xl/[1.1]">
        Get notified when new stuff drops.
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <div className="inline-flex gap-2">
            <Input
              id="subscribe-form"
              className="flex-1 md:min-w-64"
              placeholder="Your email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-label="Subscribe the newsletter"
              required
            />
            <Button variant="outline" type="submit" disabled={status === "loading"}>
              Subscribe
            </Button>
          </div>
          {message && (
            <p className={`text-sm ${status === "error" ? "text-red-600" : "text-green-600"}`}>
              {message}
            </p>
          )}
        </div>
      </form>
    </div>
  );
}
