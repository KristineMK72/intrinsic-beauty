const PHONE_TEL = "+12183308125";

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <p className="text-xs uppercase tracking-[0.25em] text-[#1F2937]/50">
        About
      </p>

      <h1 className="mt-4 font-serif text-4xl">Meet Katherine</h1>

      <div className="mt-8 max-w-3xl rounded-3xl border border-[#E7DDD2] bg-white/50 p-8">
        <p className="text-lg leading-8 text-[#1F2937]/75">
          Intrinsic Beauty is owned and operated by Katherine Andrews. Come as you
          are — leave feeling refreshed, confident, and cared for.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={`tel:${PHONE_TEL}`}
            className="rounded-full bg-[#1F2937] px-5 py-2 text-sm font-medium text-white"
          >
            Call
          </a>
          <a
            href={`sms:${PHONE_TEL}`}
            className="rounded-full border border-[#E7DDD2] px-5 py-2 text-sm font-medium text-[#1F2937]"
          >
            Text
          </a>
        </div>
      </div>
    </main>
  );
}
