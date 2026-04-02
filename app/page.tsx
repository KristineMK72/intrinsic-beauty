import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <section className="max-w-3xl">
        <p className="text-xs uppercase tracking-[0.25em] text-[#1F2937]/50">
          Welcome
        </p>

        <h1 className="mt-4 font-serif text-5xl leading-tight text-[#1F2937]">
          Thoughtful salon care, personalized for you.
        </h1>

        <p className="mt-6 text-lg leading-8 text-[#1F2937]/75">
          Intrinsic Beauty offers hair, scalp, and beauty services in a calm,
          welcoming setting with a focus on care, detail, and results that fit your lifestyle.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/services"
            className="rounded-full bg-[#1F2937] px-6 py-3 text-center text-sm font-medium text-white"
          >
            View Services
          </Link>

          <Link
            href="/contact"
            className="rounded-full border border-[#E7DDD2] px-6 py-3 text-center text-sm font-medium text-[#1F2937]"
          >
            Contact
          </Link>
        </div>
      </section>

      <section className="mt-16 grid gap-6 md:grid-cols-3">
        <div className="rounded-3xl border border-[#E7DDD2] bg-white/50 p-6">
          <h2 className="font-serif text-2xl">Services</h2>
          <p className="mt-3 text-[#1F2937]/70">
            Haircuts, color, waxing, and scalp therapy tailored to each client.
          </p>
        </div>

        <div className="rounded-3xl border border-[#E7DDD2] bg-white/50 p-6">
          <h2 className="font-serif text-2xl">Products</h2>
          <p className="mt-3 text-[#1F2937]/70">
            Professional salon products used in service and available for take-home care.
          </p>
        </div>

        <div className="rounded-3xl border border-[#E7DDD2] bg-white/50 p-6">
          <h2 className="font-serif text-2xl">Book</h2>
          <p className="mt-3 text-[#1F2937]/70">
            Reach out for appointments, pricing, and service questions.
          </p>
        </div>
      </section>
    </main>
  );
}
