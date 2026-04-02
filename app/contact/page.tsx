const PHONE_DISPLAY = "218-330-8125";
const PHONE_TEL = "+12183308125";
const ADDRESS_LINE_1 = "406 West Washington Street, Suite 2";
const ADDRESS_LINE_2 = "Brainerd, MN";
const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=406+West+Washington+Street+Suite+2+Brainerd+MN";

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <p className="text-xs uppercase tracking-[0.25em] text-[#1F2937]/50">
        Contact
      </p>

      <h1 className="mt-4 font-serif text-4xl">Find us in Brainerd</h1>
      <p className="mt-4 max-w-2xl text-lg leading-8 text-[#1F2937]/75">
        Reach out for appointments, pricing, wedding hair inquiries, and service questions.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        <div className="rounded-3xl border border-[#E7DDD2] bg-white/50 p-6">
          <h2 className="font-serif text-2xl">Phone</h2>
          <p className="mt-3 text-[#1F2937]/70">{PHONE_DISPLAY}</p>

          <div className="mt-5 flex flex-wrap gap-3">
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

        <div className="rounded-3xl border border-[#E7DDD2] bg-white/50 p-6">
          <h2 className="font-serif text-2xl">Address</h2>
          <p className="mt-3 text-[#1F2937]/70">{ADDRESS_LINE_1}</p>
          <p className="text-[#1F2937]/70">{ADDRESS_LINE_2}</p>

          <div className="mt-5">
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-[#E7DDD2] px-5 py-2 text-sm font-medium text-[#1F2937]"
            >
              Open in Maps
            </a>
          </div>
        </div>

        <div className="rounded-3xl border border-[#E7DDD2] bg-white/50 p-6">
          <h2 className="font-serif text-2xl">Booking</h2>
          <p className="mt-3 text-[#1F2937]/70">
            Call or text to reserve your spot. Reach out for appointments, pricing,
            and bridal styling availability.
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href={`sms:${PHONE_TEL}`}
              className="rounded-full bg-[#1F2937] px-5 py-2 text-sm font-medium text-white"
            >
              Text to Book
            </a>
            <a
              href="/services"
              className="rounded-full border border-[#E7DDD2] px-5 py-2 text-sm font-medium text-[#1F2937]"
            >
              View Services
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
