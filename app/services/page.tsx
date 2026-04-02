export default function ServicesPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <p className="text-xs uppercase tracking-[0.25em] text-[#1F2937]/50">
        Services
      </p>

      <h1 className="mt-4 font-serif text-4xl">Salon Services</h1>
      <p className="mt-4 max-w-2xl text-lg leading-8 text-[#1F2937]/75">
        Explore pricing and services. For custom recommendations, contact the salon directly.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl border border-[#E7DDD2] bg-white/50 p-6">
          <h2 className="font-serif text-2xl">Cuts</h2>
          <p className="mt-3 text-[#1F2937]/70">
            Precision, shape, and movement tailored to you.
          </p>
        </div>

        <div className="rounded-3xl border border-[#E7DDD2] bg-white/50 p-6">
          <h2 className="font-serif text-2xl">Color</h2>
          <p className="mt-3 text-[#1F2937]/70">
            Color services designed to enhance your look and suit your maintenance goals.
          </p>
        </div>

        <div className="rounded-3xl border border-[#E7DDD2] bg-white/50 p-6">
          <h2 className="font-serif text-2xl">Waxing</h2>
          <p className="mt-3 text-[#1F2937]/70">
            Clean, simple beauty services in a comfortable setting.
          </p>
        </div>

        <div className="rounded-3xl border border-[#E7DDD2] bg-white/50 p-6">
          <h2 className="font-serif text-2xl">Scalp Therapy</h2>
          <p className="mt-3 text-[#1F2937]/70">
            Focused care to support scalp health, comfort, and overall hair wellness.
          </p>
        </div>
      </div>
    </main>
  );
}
