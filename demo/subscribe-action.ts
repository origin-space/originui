"use server";

import { z } from "zod";

type EmailOctopusError = {
  code?: string;
  detail?: string;
  title?: string;
};

const subscribeSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

type SubscribeResult = { success: true } | { success: false; error: string };

export async function subscribe(email: string): Promise<SubscribeResult> {
  if (!process.env.EMAIL_OCTOPUS_API_KEY || !process.env.EMAIL_OCTOPUS_LIST_ID) {
    throw new Error("Missing required environment variables");
  }

  const result = subscribeSchema.safeParse({ email: email.trim() });
  if (!result.success) {
    return {
      success: false,
      error: result.error.errors[0]?.message || "Invalid email format.",
    };
  }

  try {
    const response = await fetch(
      `https://api.emailoctopus.com/lists/${process.env.EMAIL_OCTOPUS_LIST_ID}/contacts`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.EMAIL_OCTOPUS_API_KEY}`,
        },
        body: JSON.stringify({
          email_address: result.data.email,
          status: "subscribed",
          fields: {},
          tags: [],
        }),
      },
    );

    const data = (await response.json()) as EmailOctopusError;

    if (!response.ok && process.env.NODE_ENV === "development") {
      console.error("API Error:", {
        status: response.status,
        statusText: response.statusText,
        data,
      });
    }

    if (!response.ok) {
      if (response.status === 429) {
        return {
          success: false,
          error: "Too many attempts. Please try again later.",
        };
      }

      return {
        success: false,
        error: data.detail || data.title || "Failed to subscribe.",
      };
    }

    return { success: true };
  } catch (error) {
    if (process.env.NODE_ENV === "development") {
      console.error("Unexpected Error:", error);
    }

    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to subscribe.",
    };
  }
}
