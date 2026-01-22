import type { ReactNode } from "react";

const PHONE_DISPLAY = "218-330-8125";
const PHONE_TEL = "12183308125";

const ADDRESS_LINES = ["406 West Washington Street, Suite 2", "Brainerd, MN"];

const MAPS_QUERY = encodeURIComponent(
  "406 West Washington Street Suite 2, Brainerd, MN"
);

const services = [
  {
    title: "Shear Cutting",
    subtitle: "Precision cuts for women, men, and children.",
    items: [
      { name: "Women", price: "$45" },
      { name: "Men", price: "$35" },
      { name: "Children", price: "$25" },
    ],
  },
  {
    title: "Color Chemistry",
    subtitle: "Dimensional color with a tailored plan for your hair.",
    items: [
      { name: "Full color", price: "$100" },
      { name: "Refresh color", price: "$80" },
      { name: "Color transformation", price: "$75/hour" },
    ],
  },
  {
    title: "Facial Hair",
    subtitle: "Clean, subtle finishing touches.",
    items: [
      { name: "Brow wax", price: "$20" },
      { name: "Brow coloring", price: "$20" },
      { name: "Lip wax", price: "$10" },
    ],
  },
  {
    title: "Hair & Scalp Therapy",
    subtitle: "Reset, hydrate, and restore balance.",
    items: [
      { name: "Detoxifying", price: "$50" },
      { name: "Moisture replenishing", price: "$50" },
      { name: "Scalp treatment", price: "$50" },
    ],
  },
];

function Container({ children }: { children: ReactNode }) {
  return <div className="mx-auto w-full max-w-6xl px-5">{children}</div>;
}

function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={[
        "rounded-3xl border border-black/5 bg-white/75 p-6 shadow-sm backdrop-blur",
        "transition hover:-translate-y-0.5 hover:shadow-md",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}

function Button({
  href,
  children,
  variant = "primary",
  target,
  rel,
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  target?: React.HTMLAttributeAnchorTarget;
  rel?: string;
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition";
  const styles =
    variant === "primary"
      ? "bg-black text-white hover:opacity-90"
      : "border border-black/10 bg-white/70 hover:bg-black/5";

  return (
    <a
      className={[base, styles, className].join(" ")}
      href={href}
      target={target}
      rel={rel}
    >
      {children}
    </a>
  );
}

function Pill({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs font-semibold text-black/70">
      {children}
    </span>
  );
}

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    name: "Intrinsic Beauty",
    telephone: `+1${PHONE_TEL}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "406 West Washington Street Suite 2",
      addressLocality: "Brainerd",
      addressRegion: "MN",
      addressCountry: "US",
    },
    founder: "Katherine Andrews",
    areaServed: "Brainerd, MN",
    priceRange: "$$",
  };

  return (
    <main className="text-[15px] leading-relaxed">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Top Nav */}
      <div className="sticky top-0 z-50 border-b border-black/5 bg-white/70 backdrop-blur">
        <Container>
          <div className="flex items-center justify-between py-3">
            <a href="#top" className="flex items-center gap-2">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-black/10 bg-white/70">
                <span className="h-2.5 w-2.5 rounded-full bg-[rgb(var(--ring))]" />
              </span>
              <div className="leading-tight">
                <div className="text-sm font-semibold tracking-tight">
                  Intrinsic Beauty
                </div>
                <div className="text-xs text-black/50">Brainerd, MN</div>
              </div>
            </a>

            <div className="hidden items-center gap-4 text-sm sm:flex">
              <a className="text-black/60 hover:text-black" href="#services">
                Services
              </a>
              <a className="text-black/60 hover:text-black" href="#gallery">
                Gallery
              </a>
              <a className="text-black/60 hover:text-black" href="#about">
                About
              </a>
              <a className="text-black/60 hover:text-black" href="#contact">
                Contact
              </a>
            </div>

            <div className="flex items-center gap-2">
              <Button variant="ghost" href={`sms:+1${PHONE_TEL}`}>
                Text
              </Button>
              <Button href={`tel:+1${PHONE_TEL}`}>Book</Button>
            </div>
          </div>
        </Container>
      </div>

      {/* Hero */}
      <div id="top" className="relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute -left-32 -top-32 h-[30rem] w-[30rem] rounded-full bg-black/5 blur-3xl" />
          <div className="absolute -right-32 top-24 h-[30rem] w-[30rem] rounded-full bg-black/5 blur-3xl" />

          {/* Gold rings */}
          <div className="absolute left-1/2 top-10 h-80 w-80 -translate-x-1/2 rounded-full border border-[rgb(var(--ring))]/55" />
          <div className="absolute left-1/2 top-10 h-96 w-96 -translate-x-1/2 rounded-full border border-[rgb(var(--ring))]/25" />

          {/* Soft gradient wash */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white/70" />
        </div>

        <Container>
          <section className="relative py-14 sm:py-20">
            <div className="grid items-center gap-10 lg:grid-cols-2">
              <div>
                <div className="flex flex-wrap gap-2">
                  <Pill>Hair • Color • Waxing</Pill>
                  <Pill>Scalp Therapy</Pill>
                  <Pill>Brainerd, MN</Pill>
                </div>

                <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
                  Quiet luxury for your hair —{" "}
                  <span className="text-black/70">done with intention.</span>
                </h1>

                <p className="mt-4 max-w-xl text-black/65">
                  Intrinsic Beauty is owned & operated by{" "}
                  <span className="font-semibold text-black/80">
                    Katherine Andrews
                  </span>
                  . Fresh cuts, dimensional color, and restorative scalp care in
                  a calm, welcoming space.
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  <Button href={`tel:+1${PHONE_TEL}`}>Call to Book</Button>
                  <Button
                    variant="ghost"
                    href={`https://www.google.com/maps/search/?api=1&query=${MAPS_QUERY}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Get Directions
                  </Button>
                </div>

                <div className="mt-7 grid gap-4 rounded-3xl border border-black/5 bg-white/65 p-5 text-sm text-black/65 sm:grid-cols-2">
                  <div>
                    <div className="text-xs font-semibold tracking-widest text-black/45">
                      PHONE
                    </div>
                    <a className="underline" href={`tel:+1${PHONE_TEL}`}>
                      {PHONE_DISPLAY}
                    </a>
                  </div>
                  <div>
                    <div className="text-xs font-semibold tracking-widest text-black/45">
                      LOCATION
                    </div>
                    <div>{ADDRESS_LINES[0]}</div>
                    <div>{ADDRESS_LINES[1]}</div>
                  </div>
                </div>
              </div>

              {/* Right side "feature" card */}
              <Card className="bg-white/65">
                <div className="text-xs font-semibold tracking-widest text-black/45">
                  QUICK MENU
                </div>

                <div className="mt-4 space-y-4">
                  <div className="rounded-2xl border border-black/5 bg-white/70 p-4">
                    <div className="font-semibold">Shear Cutting</div>
                    <div className="mt-2 flex items-center justify-between text-sm">
                      <span className="text-black/65">Women</span>
                      <span className="font-semibold">$45</span>
                    </div>
                    <div className="mt-2 flex items-center justify-between text-sm">
                      <span className="text-black/65">Men</span>
                      <span className="font-semibold">$35</span>
                    </div>
                    <div className="mt-2 flex items-center justify-between text-sm">
                      <span className="text-black/65">Children</span>
                      <span className="font-semibold">$25</span>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-black/5 bg-white/70 p-4">
                    <div className="font-semibold">Color Chemistry</div>
                    <div className="mt-2 flex items-center justify-between text-sm">
                      <span className="text-black/65">Full color</span>
                      <span className="font-semibold">$100</span>
                    </div>
                    <div className="mt-2 flex items-center justify-between text-sm">
                      <span className="text-black/65">Refresh color</span>
                      <span className="font-semibold">$80</span>
                    </div>
                    <div className="mt-2 flex items-center justify-between text-sm">
                      <span className="text-black/65">Transformation</span>
                      <span className="font-semibold">$75/hr</span>
                    </div>
                  </div>

                  <div className="text-xs text-black/50">
                    * Pricing reflects the current menu. For transformations,
                    timing varies by hair length and goals.
                  </div>
                </div>
              </Card>
            </div>
          </section>
        </Container>
      </div>

      {/* Services */}
      <section id="services" className="py-14">
        <Container>
          <div className="flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <div className="text-xs font-semibold tracking-widest text-black/45">
                SERVICE MENU
              </div>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight">
                Services & Pricing
              </h2>
              <p className="mt-2 max-w-2xl text-sm text-black/60">
                Simple, transparent pricing — beautifully done.
              </p>
            </div>

            <div className="flex gap-2">
              <Button variant="ghost" href={`sms:+1${PHONE_TEL}`}>
                Text to Book
              </Button>
              <Button href={`tel:+1${PHONE_TEL}`}>Call</Button>
            </div>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {services.map((block) => (
              <Card key={block.title}>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-lg font-semibold">{block.title}</div>
                    <div className="mt-1 text-sm text-black/55">
                      {block.subtitle}
                    </div>
                  </div>
                  <span className="inline-flex items-center rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs font-semibold text-black/60">
                    Menu
                  </span>
                </div>

                <div className="mt-5 divide-y divide-black/5">
                  {block.items.map((item) => (
                    <div
                      key={item.name}
                      className="flex items-center justify-between py-3 text-sm"
                    >
                      <div className="text-black/75">{item.name}</div>
                      <div className="font-semibold">{item.price}</div>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-7 rounded-3xl border border-black/5 bg-white/60 p-5 text-sm text-black/65">
            <span className="font-semibold">Booking tip:</span> call or text{" "}
            <a className="underline" href={`tel:+1${PHONE_TEL}`}>
              {PHONE_DISPLAY}
            </a>{" "}
            to reserve your spot.
          </div>
        </Container>
      </section>

      {/* Gallery (placeholders for now) */}
      <section id="gallery" className="py-14">
        <Container>
          <div className="flex items-end justify-between gap-6">
            <div>
              <div className="text-xs font-semibold tracking-widest text-black/45">
                GALLERY
              </div>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight">
                Recent work
              </h2>
              <p className="mt-2 max-w-2xl text-sm text-black/60">
                Add 6–12 photos later (before/after, color, cuts). For now these
                tiles make the site feel complete.
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Dimensional color",
              "Clean precision cut",
              "Soft refresh",
              "Brow shaping",
              "Scalp therapy reset",
              "Transformation session",
            ].map((label) => (
              <div
                key={label}
                className="group relative aspect-[4/3] overflow-hidden rounded-3xl border border-black/5 bg-white/70 shadow-sm"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-black/0 via-black/0 to-black/5" />
                <div className="absolute inset-0 p-5">
                  <div className="inline-flex items-center rounded-full border border-black/10 bg-white/75 px-3 py-1 text-xs font-semibold text-black/60">
                    {label}
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="h-10 w-10 rounded-full border border-black/10 bg-white/70 transition group-hover:scale-105" />
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* About + Testimonials */}
      <section id="about" className="py-14">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="bg-white/65">
              <div className="text-xs font-semibold tracking-widest text-black/45">
                ABOUT
              </div>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight">
                Meet Katherine
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-black/65">
                Intrinsic Beauty is owned and operated by{" "}
                <span className="font-semibold text-black/80">
                  Katherine Andrews
                </span>
                . Come as you are — leave feeling refreshed, confident, and
                cared for.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button href={`tel:+1${PHONE_TEL}`}>Call</Button>
                <Button variant="ghost" href={`sms:+1${PHONE_TEL}`}>
                  Text
                </Button>
              </div>
            </Card>

            <Card className="bg-white/65">
              <div className="text-xs font-semibold tracking-widest text-black/45">
                KIND WORDS
              </div>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight">
                What clients say
              </h2>

              <div className="mt-5 space-y-4 text-sm text-black/65">
                <div className="rounded-2xl border border-black/5 bg-white/70 p-4">
                  “Calm, welcoming, and the color was exactly what I wanted.”
                </div>
                <div className="rounded-2xl border border-black/5 bg-white/70 p-4">
                  “My haircut finally feels like *me*. I’ll be back.”
                </div>
                <div className="text-xs text-black/50">
                  Replace these with real testimonials anytime.
                </div>
              </div>
            </Card>
          </div>
        </Container>
      </section>

      {/* Contact */}
      <section id="contact" className="pb-16 pt-10">
        <Container>
          <Card className="bg-white/65">
            <div className="grid gap-6 md:grid-cols-3">
              <div className="md:col-span-2">
                <div className="text-xs font-semibold tracking-widest text-black/45">
                  CONTACT
                </div>
                <h2 className="mt-2 text-2xl font-semibold tracking-tight">
                  Find us in Brainerd
                </h2>

                <div className="mt-4 space-y-3 text-sm text-black/65">
                  <div>
                    <div className="font-semibold text-black/80">Address</div>
                    <div>{ADDRESS_LINES[0]}</div>
                    <div>{ADDRESS_LINES[1]}</div>
                  </div>

                  <div>
                    <div className="font-semibold text-black/80">Phone</div>
                    <a className="underline" href={`tel:+1${PHONE_TEL}`}>
                      {PHONE_DISPLAY}
                    </a>
                  </div>

                  <div className="pt-2 flex flex-wrap gap-3">
                    <Button href={`tel:+1${PHONE_TEL}`}>Call</Button>
                    <Button variant="ghost" href={`sms:+1${PHONE_TEL}`}>
                      Text
                    </Button>
                    <Button
                      variant="ghost"
                      href={`https://www.google.com/maps/search/?api=1&query=${MAPS_QUERY}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Open in Maps
                    </Button>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-black/5 bg-white/70 p-5">
                <div className="text-xs font-semibold tracking-widest text-black/45">
                  HOURS
                </div>
                <div className="mt-2 text-sm text-black/65">
                  Add hours here when ready.
                </div>
                <div className="mt-4 text-xs text-black/50">
                  Tip: hours help Google results a lot.
                </div>
              </div>
            </div>
          </Card>

          <footer className="mt-10 text-center text-xs text-black/50">
            © {new Date().getFullYear()} Intrinsic Beauty • Brainerd, Minnesota
          </footer>
        </Container>
      </section>
    </main>
  );
}
