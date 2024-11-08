"use server";

import { z } from "zod";

const subscribeSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

type SubscribeResult = { success: true } | { success: false; error: string };

export async function subscribe(email: string): Promise<SubscribeResult> {
  const result = subscribeSchema.safeParse({ email });
  if (!result.success) {
    return {
      success: false,
      error: result.error.errors[0]?.message || "Invalid email format",
    };
  }

  const API_KEY = process.env.EMAIL_OCTOPUS_API_KEY;
  const LIST_ID = process.env.EMAIL_OCTOPUS_LIST_ID;

  if (!API_KEY || !LIST_ID) {
    return {
      success: false,
      error: "Missing API configuration",
    };
  }

  try {
    const response = await fetch(`https://api.emailoctopus.com/lists/${LIST_ID}/contacts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({
        email_address: email,
        status: "subscribed",
        fields: {},
        tags: {},
      }),
    });

    const data = await response.json();

    console.log("API Response:", {
      status: response.status,
      statusText: response.statusText,
      headers: Object.fromEntries(response.headers.entries()),
      data,
    });

    if (!response.ok) {
      console.error("Error Response:", data);
      return {
        success: false,
        error: data.detail || data.title || "Failed to subscribe",
      };
    }

    return { success: true };
  } catch (error) {
    console.error("Unexpected Error:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to subscribe",
    };
  }
}
