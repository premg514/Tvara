import { NextRequest, NextResponse } from "next/server";
import { ai } from "@/lib/gemini";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const prompt = body.prompt;

    if (!prompt || typeof prompt !== "string") {
      return NextResponse.json(
        { error: "Prompt is required" },
        { status: 400 },
      );
    }

    if (prompt.length > 2000) {
      return NextResponse.json({ error: "Prompt too long" }, { status: 400 });
    }

    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: prompt,
    });

    const text =
      response?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "No response generated";

    return NextResponse.json({
      success: true,
      data: text,
    });
  } catch (error: any) {
    console.error("Gemini API Error:", error);

    const message = error?.message || "Failed to generate response";

    return NextResponse.json(
      {
        success: false,
        error: message,
      },
      {
        status: error?.status || 500,
      },
    );
  }
}
