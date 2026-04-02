export default function ContactPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <p className="text-xs uppercase tracking-[0.25em] text-[#1F2937]/50">
        Contact
      </p>

      <h1 className="mt-4 font-serif text-4xl">Get in Touch</h1>
      <p className="mt-4 max-w-2xl text-lg leading-8 text-[#1F2937]/75">
        Reach out for appointments, pricing, and service questions.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        <div className="rounded-3xl border border-[#E7DDD2] bg-white/50 p-6">
          <h2 className="font-serif text-2xl">Phone</h2>
          <p className="mt-3 text-[#1F2937]/70">Add phone number</p>
        </div>

        <div className="rounded-3xl border border-[#E7DDD2] bg-white/50 p-6">
          <h2 className="font-serif text-2xl">Hours</h2>
          <p className="mt-3 text-[#1F2937]/70">Add hours</p>
        </div>

        <div className="rounded-3xl border border-[#E7DDD2] bg-white/50 p-6">
          <h2 className="font-serif text-2xl">Location</h2>
          <p className="mt-3 text-[#1F2937]/70">Add address</p>
        </div>
      </div>
    </main>
  );
}
