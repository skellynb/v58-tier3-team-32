"use client";

import Groq from "groq-sdk";
import { appInfo } from "@/data/appInfo";

export async function aiChat(msg: string) {
  try {
    const apiKey = process.env.NEXT_PUBLIC_GROQ_API_KEY!;
    const groq = new Groq({ apiKey });

    const systemPrompt = `
      You are a helpful assistant for an application called ChinguVerse.
      Your job is to answer questions about how the app works.
      Here is information about the application:
      ---
      ${appInfo}
      ---
      Only answer questions related to ChinguVerse, filters, the map, or the features in the app.
      If the question is not related, politely decline.
    `;

  

    // Groq chat completion
    const completion = await groq.chat.completions.create({
      model: "llama3-8b-8192",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: msg },
      ],
      temperature: 0.7,
    });

    const reply =
      completion.choices?.[0]?.message?.content || "No response.";

    return { reply };
  } catch (error) {
    console.error("AI Chat Error:", error);
    return { error: "Something went wrong" };
  }
}
