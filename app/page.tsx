import type { ReactNode } from "react";

const PHONE_DISPLAY = "218-330-8125";
const PHONE_TEL = "12183308125";

const ADDRESS_LINES = [
  "406 West Washington Street, Suite 2",
  "Brainerd, MN",
];

const MAPS_QUERY = encodeURIComponent(
  "406 West Washington Street Suite 2, Brainerd, MN"
);

const services = [
  {
    title: "Shear Cutting",
    items: [
      { name: "Women", price: "$45" },
      { name: "Men", price: "$35" },
      { name: "Children", price: "$25" },
    ],
  },
  {
    title: "Color Chemistry",
    items: [
      { name: "Full color", price: "$100" },
      { name: "Refresh color", price: "$80" },
      { name: "Color transformation", price: "$75/hour" },
    ],
  },
  {
    title: "Facial Hair",
    items: [
      { name: "Brow wax", price: "$20" },
      { name: "Brow coloring", price: "$20" },
      { name: "Lip wax", price: "$10" },
    ],
  },
  {
    title: "Hair & Scalp Therapy",
    items: [
      { name: "Detoxifying", price: "$50" },
      { name: "Moisture replenishing", price: "$50" },
      { name: "Scalp treatment", price: "$50" },
    ],
  },
];

function Container({ children }: { children: ReactNode }) {
  return <div className="mx-auto w-full max-w-5xl px-5">{children}</div>;
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
        "rounded-3xl border border-black/5 bg-white/80 p-6 shadow-sm backdrop-blur",
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
      : "border border-black/10 bg-white hover:bg-black/5";

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
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO */}
      <div className="relative overflow-hidden border-b border-black/5">
        {/* background */}
        <div className="absolute inset-0">
          <div className="absolute -left-28 -top-28 h-96 w-96 rounded-full bg-black/5 blur-3xl" />
          <div className="absolute -right-28 top-24 h-96 w-96 rounded-full bg-black/5 blur-3xl" />
          {/* ring motif (uses --ring from globals.css) */}
          <div className="absolute left-1/2 top-10 h-72 w-72 -translate-x-1/2 rounded-full border border-[rgb(var(--ring))]/60" />
          <div className="absolute left-1/2 top-10 h-80 w-80 -translate-x-1/2 rounded-full border border-[rgb(var(--ring))]/30" />
        </div>

        <Container>
          <header className="relative py-14">
            <div className="flex flex-col gap-10">
              <div>
                <div className="text-xs font-semibold tracking-widest text-black/60">
                  Brainerd, MN • Hair & Beauty Services
                </div>

                <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
                  Intrinsic Beauty
                </h1>

                <p className="mt-4 max-w-2xl text-base leading-relaxed text-black/70">
                  A warm, personal salon experience by{" "}
                  <span className="font-semibold">Katherine Andrews</span>. Fresh
                  cuts, dimensional color, and scalp care — done with intention.
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

                <div className="mt-6 grid gap-4 text-sm text-black/60 sm:grid-cols-2">
                  <div>
                    <div className="font-semibold text-black/70">Phone</div>
                    <a className="underline" href={`tel:+1${PHONE_TEL}`}>
                      {PHONE_DISPLAY}
                    </a>
                  </div>

                  <div>
                    <div className="font-semibold text-black/70">Location</div>
                    <div>{ADDRESS_LINES[0]}</div>
                    <div>{ADDRESS_LINES[1]}</div>
                  </div>
                </div>
              </div>

              {/* quick highlights */}
              <div className="grid gap-4 sm:grid-cols-3">
                <Card>
                  <div className="text-sm font-semibold">Shear Cutting</div>
                  <div className="mt-1 text-sm text-black/60">
                    Women, men, and children.
                  </div>
                </Card>

                <Card>
                  <div className="text-sm font-semibold">Color Chemistry</div>
                  <div className="mt-1 text-sm text-black/60">
                    Full color, refresh, transformations.
                  </div>
                </Card>

                <Card>
                  <div className="text-sm font-semibold">Hair & Scalp Therapy</div>
                  <div className="mt-1 text-sm text-black/60">
                    Detox, moisture, and treatment.
                  </div>
                </Card>
              </div>
            </div>
          </header>
        </Container>
      </div>

      {/* SERVICES */}
      <section id="services" className="py-12">
        <Container>
          <div className="flex items-end justify-between gap-6">
            <div>
              <div className="text-xs font-semibold tracking-widest text-black/60">
                SERVICE MENU
              </div>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight">
                Pricing
              </h2>
              <p className="mt-2 max-w-2xl text-sm text-black/60">
                Clear, simple pricing — based on the current menu.
              </p>
            </div>

            <a
              className="hidden text-sm underline sm:block"
              href={`tel:+1${PHONE_TEL}`}
            >
              Call to book: {PHONE_DISPLAY}
            </a>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {services.map((block) => (
              <Card key={block.title}>
                <div className="text-lg font-semibold">{block.title}</div>

                <div className="mt-4 divide-y divide-black/5">
                  {block.items.map((item) => (
                    <div
                      key={item.name}
                      className="flex items-center justify-between py-3 text-sm"
                    >
                      <div className="text-black/80">{item.name}</div>
                      <div className="font-semibold">{item.price}</div>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          <Card className="mt-7 bg-white/60">
            <div className="text-sm text-black/70">
              <span className="font-semibold">Booking tip:</span> call or text{" "}
              <a className="underline" href={`tel:+1${PHONE_TEL}`}>
                {PHONE_DISPLAY}
              </a>{" "}
              to reserve your spot.
            </div>
          </Card>
        </Container>
      </section>

      {/* ABOUT + CONTACT */}
      <section id="contact" className="pb-16">
        <Container>
          <div className="grid gap-5 md:grid-cols-2">
            <Card>
              <div className="text-xs font-semibold tracking-widest text-black/60">
                ABOUT
              </div>
              <h3 className="mt-2 text-xl font-semibold">Meet Katherine</h3>
              <p className="mt-3 text-sm leading-relaxed text-black/70">
                Intrinsic Beauty is owned and operated by{" "}
                <span className="font-semibold">Katherine Andrews</span>. Come as
                you are — leave feeling refreshed, confident, and cared for.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Button href={`tel:+1${PHONE_TEL}`}>Call</Button>
                <Button variant="ghost" href={`sms:+1${PHONE_TEL}`}>
                  Text
                </Button>
              </div>
            </Card>

            <Card>
              <div className="text-xs font-semibold tracking-widest text-black/60">
                CONTACT
              </div>
              <h3 className="mt-2 text-xl font-semibold">Find us in Brainerd</h3>

              <div className="mt-4 space-y-3 text-sm text-black/70">
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

                <div className="pt-2">
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
            </Card>
          </div>

          <footer className="mt-10 text-center text-xs text-black/50">
            © {new Date().getFullYear()} Intrinsic Beauty • Brainerd, Minnesota
          </footer>
        </Container>
      </section>
    </main>
  );
}
