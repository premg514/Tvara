type Props = {
  response: string;
};

export default function ResponseCard({ response }: Props) {
  return (
    <div className="mt-6 w-full rounded-2xl border border-zinc-800 bg-zinc-900 p-6 shadow-lg">
      <h2 className="mb-4 text-lg font-semibold text-white">
        Gemini Response
      </h2>

      <p className="whitespace-pre-wrap leading-7 text-zinc-300">
        {response}
      </p>
    </div>
  );
}