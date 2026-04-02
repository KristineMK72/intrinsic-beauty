const PHONE_TEL = "12183308125";
const PHONE_DISPLAY = "218-330-8125";

const categories = [
  {
    title: "Cuts",
    href: "/services/cuts",
    description: "Precision, shape, and movement — tailored to you.",
    prices: ["Women $45", "Men $35", "Children $25"],
  },
  {
    title: "Color",
    href: "/services/color",
    description: "Dimensional color with a plan that respects your hair.",
    prices: ["Full color $100", "Refresh color $80", "Transformation $75/hr"],
  },
  {
    title: "Waxing",
    href: "/services/waxing",
    description: "Clean, subtle finishing touches.",
    prices: ["Brow wax $20", "Brow coloring $20", "Lip wax $10"],
  },
  {
    title: "Scalp Therapy",
    href: "/services/scalp-therapy",
    description: "Reset, hydrate, and restore balance.",
    prices: ["Detoxifying $50", "Moisture replenishing $50", "Scalp treatment $50"],
  },
  {
    title: "Weddings",
    href: "/services/weddings",
    description: "Bridal and special-event styling for a polished, lasting look.",
    prices: ["Contact for wedding pricing"],
  },
];

export default function ServicesPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <p className="text-xs uppercase tracking-[0.25em] text-[#1F2937]/50">
        Service Menu
      </p>

      <h1 className="mt-4 font-serif text-4xl text-[#1F2937]">Services</h1>

      <p className="mt-4 max-w-2xl text-lg leading-8 text-[#1F2937]/75">
        Explore pricing by category. Tap a service to view full details and booking information.
      </p>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <a
          href={`sms:+${PHONE_TEL}`}
          className="rounded-full bg-[#1F2937] px-6 py-3 text-center text-sm font-medium text-white"
        >
          Text to Book
        </a>
        <a
          href={`tel:+${PHONE_TEL}`}
          className="rounded-full border border-[#E7DDD2] px-6 py-3 text-center text-sm font-medium text-[#1F2937]"
        >
          Call
        </a>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {categories.map((category) => (
          <a
            key={category.title}
            href={category.href}
            className="rounded-3xl border border-[#E7DDD2] bg-white/50 p-6 transition hover:bg-white/70"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-[#1F2937]/45">
              Signature
            </p>

            <h2 className="mt-2 font-serif text-2xl text-[#1F2937]">
              {category.title}
            </h2>

            <p className="mt-3 text-[#1F2937]/70">
              {category.description}
            </p>

            <div className="mt-5 space-y-2 border-t border-[#E7DDD2] pt-4 text-sm text-[#1F2937]/75">
              {category.prices.map((price) => (
                <div key={price}>{price}</div>
              ))}
            </div>

            <div className="mt-6 text-sm font-medium text-[#1F2937]">
              View {category.title} →
            </div>
          </a>
        ))}
      </div>

      <div className="mt-10 rounded-3xl border border-[#E7DDD2] bg-white/50 p-6">
        <p className="text-sm text-[#1F2937]/70">
          Booking tip: call or text <span className="font-medium text-[#1F2937]">{PHONE_DISPLAY}</span> to reserve your spot.
        </p>
      </div>
    </main>
  );
}
