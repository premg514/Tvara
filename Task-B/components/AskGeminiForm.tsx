'use client';

import { useState } from "react";
import Loader from "./Loader";
import ResponseCard from "./ResponseCard";

export default function AskGeminiForm() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleAskGemini = async () => {
    if (!prompt.trim()) return;

    try {
      setLoading(true);
      setError("");
      setResponse("");

      const res = await fetch("/api/ask-gemini", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed");
      }

      setResponse(data.data);
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-2xl">
      <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 shadow-xl">
        <h1 className="mb-6 text-3xl font-bold text-white">
          Ask Gemini
        </h1>

        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Ask anything..."
          rows={5}
          className="w-full rounded-xl border border-zinc-700 bg-zinc-950 p-4 text-white outline-none transition focus:border-zinc-500"
        />

        <button
          onClick={handleAskGemini}
          disabled={loading}
          className="mt-4 w-full rounded-xl bg-white px-4 py-3 font-semibold text-black transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {loading ? "Thinking..." : "Ask Gemini"}
        </button>

        {loading && <Loader />}

        {error && (
          <p className="mt-4 text-sm text-red-400">
            {error}
          </p>
        )}

        {response && (
          <ResponseCard response={response} />
        )}
      </div>
    </div>
  );
}