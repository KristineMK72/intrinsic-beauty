"use client";

import type { ReactNode } from "react";
import { useMemo, useState } from "react";

/** ======================
 *  Salon info
====================== */
const PHONE_DISPLAY = "218-330-8125";
const PHONE_TEL = "12183308125";

const ADDRESS_LINES = ["406 West Washington Street, Suite 2", "Brainerd, MN"];
const MAPS_QUERY = encodeURIComponent("406 West Washington Street Suite 2, Brainerd, MN");

/** ======================
 *  Services
====================== */
type ServiceKey = "cuts" | "color" | "waxing" | "scalp";

type ServiceItem = { name: string; price: string; note?: string };

type ServiceGroup = {
  key: ServiceKey;
  title: string;
  subtitle: string;
  href: string;
  items: ServiceItem[];
};

const SERVICE_GROUPS: ServiceGroup[] = [
  {
    key: "cuts",
    title: "Cuts",
    subtitle: "Precision, shape, and movement — tailored to you.",
    href: "/services/cuts",
    items: [
      { name: "Women", price: "$45" },
      { name: "Men", price: "$35" },
      { name: "Children", price: "$25" },
    ],
  },
  {
    key: "color",
    title: "Color",
    subtitle: "Dimensional color with a plan that respects your hair.",
    href: "/services/color",
    items: [
      { name: "Full color", price: "$100" },
      { name: "Refresh color", price: "$80" },
      { name: "Color transformation", price: "$75/hour", note: "Timing varies by hair length + goals." },
    ],
  },
  {
    key: "waxing",
    title: "Waxing",
    subtitle: "Clean, subtle finishing touches.",
    href: "/services/waxing",
    items: [
      { name: "Brow wax", price: "$20" },
      { name: "Brow coloring", price: "$20" },
      { name: "Lip wax", price: "$10" },
    ],
  },
  {
    key: "scalp",
    title: "Scalp Therapy",
    subtitle: "Reset, hydrate, and restore balance.",
    href: "/services/scalp",
    items: [
      { name: "Detoxifying", price: "$50" },
      { name: "Moisture replenishing", price: "$50" },
      { name: "Scalp treatment", price: "$50" },
    ],
  },
];

/** ======================
 *  UI primitives
====================== */
function Container({ children }: { children: ReactNode }) {
  return <div className="mx-auto w-full max-w-6xl px-5">{children}</div>;
}

function Surface({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <div id={id} className={`lux-surface ${className}`}>
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
    "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition active:translate-y-[1px]";
  const styles =
    variant === "primary"
      ? "bg-black text-white hover:opacity-90"
      : "border border-black/10 bg-white/70 text-black/75 hover:bg-black/5";
  return (
    <a href={href} target={target} rel={rel} className={`${base} ${styles} ${className}`}>
      {children}
    </a>
  );
}

function Chip({
  active,
  children,
  onClick,
}: {
  active?: boolean;
  children: ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={
        "rounded-full px-4 py-2 text-sm font-semibold transition " +
        (active
          ? "bg-black text-white shadow-sm ring-1 ring-[rgba(201,162,96,.35)]"
          : "border border-black/10 bg-white/60 text-black/70 hover:bg-white/85")
      }
    >
      {children}
    </button>
  );
}

function PriceRow({ item }: { item: ServiceItem }) {
  return (
    <div className="py-3">
      <div className="flex items-baseline justify-between gap-6">
        <div className="text-sm font-semibold text-black/85">{item.name}</div>
        <div className="text-sm font-semibold">{item.price}</div>
      </div>
      {item.note ? <div className="mt-1 text-xs text-black/45">{item.note}</div> : null}
    </div>
  );
}

function GoldDivider() {
  return <div className="mt-5 h-px w-full bg-gradient-to-r from-transparent via-[rgba(201,162,96,.6)] to-transparent" />;
}

/** ======================
 *  Page
====================== */
export default function Page() {
  const [activeKey, setActiveKey] = useState<ServiceKey>("cuts");

  const activeGroup = useMemo(
    () => SERVICE_GROUPS.find((g) => g.key === activeKey) ?? SERVICE_GROUPS[0],
    [activeKey]
  );

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
    <main className="min-h-screen sparkle-bg">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ======================
          Top Bar (mobile-safe)
      ======================= */}
      <header className="sticky top-0 z-50 border-b border-black/5 bg-white/70 backdrop-blur">
        <Container>
          <div className="flex items-center justify-between gap-3 py-3">
            <a href="#top" className="flex items-center gap-3 min-w-0">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white/70 shrink-0">
                <span className="h-2.5 w-2.5 rounded-full bg-[rgb(var(--ring))]" />
              </span>
              <div className="leading-tight min-w-0">
                <div className="text-sm font-semibold truncate">Intrinsic Beauty</div>
                <div className="text-xs text-black/50 truncate">Brainerd, MN</div>
              </div>
            </a>

            <div className="flex items-center gap-2">
              <a className="hidden sm:inline text-sm font-semibold text-black/60 hover:text-black" href="/services">
                Services
              </a>
              <a className="hidden sm:inline text-sm font-semibold text-black/60 hover:text-black" href="#about">
                About
              </a>
              <a className="hidden sm:inline text-sm font-semibold text-black/60 hover:text-black" href="#contact">
                Contact
              </a>

              <Button variant="ghost" href={`sms:+1${PHONE_TEL}`} className="px-4 py-2">
                Text
              </Button>
              <Button href={`tel:+1${PHONE_TEL}`} className="px-4 py-2">
                Book
              </Button>
            </div>
          </div>

          {/* Mobile-only quick links */}
          <div className="sm:hidden pb-3 flex gap-4 text-sm">
            <a className="underline text-black/70" href="/services">
              Services
            </a>
            <a className="underline text-black/70" href="#about">
              About
            </a>
            <a className="underline text-black/70" href="#contact">
              Contact
            </a>
          </div>
        </Container>
      </header>

      {/* ======================
          Hero
      ======================= */}
      <section id="top" className="relative">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-10 h-80 w-80 -translate-x-1/2 rounded-full border border-[rgba(201,162,96,.55)]" />
          <div className="absolute left-1/2 top-10 h-96 w-96 -translate-x-1/2 rounded-full border border-[rgba(201,162,96,.25)]" />
        </div>

        <Container>
          <div className="relative py-10 sm:py-14">
            <div className="grid gap-6 lg:grid-cols-2">
              {/* Left: Brand */}
              <Surface className="p-7">
                <div className="lux-kicker">Quiet luxury • hair + beauty</div>

                <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                  Intrinsic Beauty
                </h1>

                <GoldDivider />

                <p className="mt-5 max-w-xl text-base text-black/65">
                  A calm, personal salon experience by{" "}
                  <span className="font-semibold text-black/80">Katherine Andrews</span>.
                  Fresh cuts, dimensional color, and restorative scalp care — done with intention.
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

                <div className="mt-7 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-black/5 bg-white/60 p-4">
                    <div className="lux-kicker">Phone</div>
                    <a className="mt-2 inline-block text-base font-semibold underline" href={`tel:+1${PHONE_TEL}`}>
                      {PHONE_DISPLAY}
                    </a>
                  </div>

                  <div className="rounded-2xl border border-black/5 bg-white/60 p-4">
                    <div className="lux-kicker">Location</div>
                    <div className="mt-2 text-sm text-black/70">
                      <div>{ADDRESS_LINES[0]}</div>
                      <div>{ADDRESS_LINES[1]}</div>
                    </div>
                  </div>
                </div>
              </Surface>

              {/* Right: Signature preview */}
              <Surface className="p-7">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="lux-kicker">Signature menu</div>
                    <div className="mt-3 text-2xl font-semibold tracking-tight">Explore pricing</div>
                    <div className="mt-2 text-sm text-black/55">
                      Tap a category to preview pricing. For full details, visit the Services page.
                    </div>
                  </div>
                  <span className="hidden sm:inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white/70">
                    ✦
                  </span>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {SERVICE_GROUPS.map((g) => (
                    <Chip key={g.key} active={activeKey === g.key} onClick={() => setActiveKey(g.key)}>
                      {g.title}
                    </Chip>
                  ))}
                </div>

                <div className="mt-6">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <div className="text-xl font-semibold">{activeGroup.title}</div>
                      <div className="mt-1 text-sm text-black/55">{activeGroup.subtitle}</div>
                    </div>
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white/70">
                      →
                    </span>
                  </div>

                  <div className="mt-5 divide-y divide-black/5">
                    {activeGroup.items.map((item) => (
                      <PriceRow key={item.name} item={item} />
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    <Button variant="ghost" href={activeGroup.href}>
                      View {activeGroup.title} Page
                    </Button>
                    <Button variant="ghost" href="/services">
                      View All Services
                    </Button>
                  </div>

                  <div className="mt-5 text-sm text-black/55">
                    Booking tip: call or text{" "}
                    <a className="underline font-semibold" href={`tel:+1${PHONE_TEL}`}>
                      {PHONE_DISPLAY}
                    </a>{" "}
                    to reserve your spot.
                  </div>
                </div>
              </Surface>
            </div>
          </div>
        </Container>
      </section>

      <div className="lux-divider" />

      {/* ======================
          Services grid (bold sections)
      ======================= */}
      <section className="py-12">
        <Container>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="lux-kicker">Services</div>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight">Four signature categories</h2>
              <GoldDivider />
              <p className="mt-5 max-w-2xl text-sm text-black/60">
                Cuts, color, waxing, and scalp therapy — presented as clear, beautiful sections.
              </p>
            </div>

            <div className="flex gap-2">
              <Button variant="ghost" href={`sms:+1${PHONE_TEL}`}>
                Text to Book
              </Button>
              <Button href={`tel:+1${PHONE_TEL}`}>Call</Button>
            </div>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {SERVICE_GROUPS.map((g) => (
              <a key={g.key} href={g.href} className="block">
                <Surface className="p-7 transition hover:-translate-y-0.5 hover:shadow-lg">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-3">
                        <span className="h-6 w-[3px] rounded-full bg-[rgb(var(--ring))]" />
                        <div className="text-xl font-semibold">{g.title}</div>
                      </div>
                      <div className="mt-2 text-sm text-black/55">{g.subtitle}</div>

                      <div className="mt-5 space-y-2 text-sm text-black/70">
                        {g.items.slice(0, 3).map((i) => (
                          <div key={i.name} className="flex items-baseline justify-between">
                            <span>{i.name}</span>
                            <span className="font-semibold">{i.price}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white/70">
                      →
                    </span>
                  </div>
                </Surface>
              </a>
            ))}
          </div>

          <div className="mt-9 text-center">
            <Button variant="ghost" href="/services">
              View all services
            </Button>
          </div>
        </Container>
      </section>

      {/* ======================
          About + Contact
      ======================= */}
      <section className="pb-16">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            <Surface id="about" className="p-7">
              <div className="lux-kicker">About</div>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight">Meet Katherine</h3>
              <GoldDivider />
              <p className="mt-5 text-sm text-black/65">
                Intrinsic Beauty is owned and operated by{" "}
                <span className="font-semibold text-black/80">Katherine Andrews</span>. Come as you are — leave feeling
                refreshed, confident, and cared for.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button href={`tel:+1${PHONE_TEL}`}>Call</Button>
                <Button variant="ghost" href={`sms:+1${PHONE_TEL}`}>
                  Text
                </Button>
              </div>
            </Surface>

            <Surface id="contact" className="p-7">
              <div className="lux-kicker">Contact</div>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight">Find us in Brainerd</h3>
              <GoldDivider />

              <div className="mt-5 space-y-4 text-sm text-black/65">
                <div>
                  <div className="font-semibold text-black/80">Address</div>
                  <div>{ADDRESS_LINES[0]}</div>
                  <div>{ADDRESS_LINES[1]}</div>
                </div>

                <div>
                  <div className="font-semibold text-black/80">Phone</div>
                  <a className="underline font-semibold" href={`tel:+1${PHONE_TEL}`}>
                    {PHONE_DISPLAY}
                  </a>
                </div>

                <div className="pt-1 flex flex-wrap gap-3">
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
            </Surface>
          </div>

          <footer className="mt-10 text-center text-xs text-black/50">
            © {new Date().getFullYear()} Intrinsic Beauty • Brainerd, Minnesota
          </footer>
        </Container>
      </section>
    </main>
  );
}
