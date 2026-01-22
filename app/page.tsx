"use client";

import type { ReactNode } from "react";
import { useMemo, useState } from "react";

const PHONE_DISPLAY = "218-330-8125";
const PHONE_TEL = "12183308125";
const ADDRESS_LINES = ["406 West Washington Street, Suite 2", "Brainerd, MN"];
const MAPS_QUERY = encodeURIComponent("406 West Washington Street Suite 2, Brainerd, MN");

type ServiceItem = { name: string; price: string; note?: string };
type ServiceGroup = { key: string; title: string; subtitle: string; items: ServiceItem[] };

const SERVICE_GROUPS: ServiceGroup[] = [
  {
    key: "cuts",
    title: "Cuts",
    subtitle: "Precision, shape, and movement — tailored to you.",
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
    items: [
      { name: "Full color", price: "$100" },
      { name: "Refresh color", price: "$80" },
      { name: "Color transformation", price: "$75/hour", note: "Time varies by goals + hair length." },
    ],
  },
  {
    key: "wax",
    title: "Waxing",
    subtitle: "Clean, subtle finishing touches.",
    items: [
      { name: "Brow wax", price: "$20" },
      { name: "Brow coloring", price: "$20" },
      { name: "Lip wax", price: "$10" },
    ],
  },
  {
    key: "therapy",
    title: "Scalp & Therapy",
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

function Surface({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`lux-surface ${className}`}>{children}</div>;
}

function Button({
  href,
  children,
  variant = "primary",
  target,
  rel,
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  target?: React.HTMLAttributeAnchorTarget;
  rel?: string;
}) {
  const base =
    "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition lux-lift";
  const styles =
    variant === "primary"
      ? "bg-black text-white hover:opacity-90"
      : "border border-black/10 bg-white/70 hover:bg-black/5";
  return (
    <a className={`${base} ${styles}`} href={href} target={target} rel={rel}>
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
      onClick={onClick}
      className={[
        "rounded-full px-4 py-2 text-sm font-semibold transition",
        active
          ? "bg-black text-white"
          : "border border-black/10 bg-white/70 text-black/70 hover:bg-black/5",
      ].join(" ")}
      type="button"
    >
      {children}
    </button>
  );
}

export default function Page() {
  const [activeKey, setActiveKey] = useState<string>("cuts");

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
    <main className="lux-bg">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* NAV */}
      <div className="sticky top-0 z-50 border-b border-black/5 bg-white/65 backdrop-blur">
        <Container>
          <div className="flex items-center justify-between py-3">
            <a href="#top" className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white/70">
                <span className="h-2.5 w-2.5 rounded-full bg-[rgb(var(--ring))]" />
              </span>
              <div className="leading-tight">
                <div className="text-sm font-semibold tracking-tight">Intrinsic Beauty</div>
                <div className="text-xs text-black/50">Brainerd, MN</div>
              </div>
            </a>

            <div className="hidden items-center gap-5 text-sm sm:flex">
              <a className="text-black/60 hover:text-black" href="#services">Services</a>
              <a className="text-black/60 hover:text-black" href="#about">About</a>
              <a className="text-black/60 hover:text-black" href="#contact">Contact</a>
            </div>

            <div className="flex items-center gap-2">
              <Button variant="ghost" href={`sms:+1${PHONE_TEL}`}>Text</Button>
              <Button href={`tel:+1${PHONE_TEL}`}>Book</Button>
            </div>
          </div>
        </Container>
      </div>

      {/* HERO */}
      <section id="top" className="relative">
        <div className="absolute inset-0 pointer-events-none">
          {/* rings */}
          <div className="absolute left-1/2 top-10 h-80 w-80 -translate-x-1/2 rounded-full border border-[rgb(var(--ring))]/55" />
          <div className="absolute left-1/2 top-10 h-96 w-96 -translate-x-1/2 rounded-full border border-[rgb(var(--ring))]/25" />
        </div>

        <Container>
          <div className="relative py-14 sm:py-20">
            <div className="grid gap-8 lg:grid-cols-2">
              <div>
                <div className="lux-kicker">Quiet luxury • hair + beauty</div>
                <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                  Intrinsic Beauty
                </h1>
                <p className="mt-4 max-w-xl text-base text-black/65">
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
                  <Surface className="p-5">
                    <div className="lux-kicker">Phone</div>
                    <a className="mt-2 inline-block underline" href={`tel:+1${PHONE_TEL}`}>
                      {PHONE_DISPLAY}
                    </a>
                  </Surface>
                  <Surface className="p-5">
                    <div className="lux-kicker">Location</div>
                    <div className="mt-2 text-sm text-black/70">
                      <div>{ADDRESS_LINES[0]}</div>
                      <div>{ADDRESS_LINES[1]}</div>
                    </div>
                  </Surface>
                </div>
              </div>

              <Surface className="p-6">
                <div className="lux-kicker">Signature menu</div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Chip active={activeKey === "cuts"} onClick={() => setActiveKey("cuts")}>Cuts</Chip>
                  <Chip active={activeKey === "color"} onClick={() => setActiveKey("color")}>Color</Chip>
                  <Chip active={activeKey === "wax"} onClick={() => setActiveKey("wax")}>Waxing</Chip>
                  <Chip active={activeKey === "therapy"} onClick={() => setActiveKey("therapy")}>Scalp</Chip>
                </div>

                <div className="mt-6">
                  <div className="text-lg font-semibold">{activeGroup.title}</div>
                  <div className="mt-1 text-sm text-black/55">{activeGroup.subtitle}</div>

                  <div className="mt-5 divide-y divide-black/5">
                    {activeGroup.items.map((item) => (
                      <div key={item.name} className="flex items-start justify-between gap-6 py-3">
                        <div>
                          <div className="text-sm font-semibold text-black/80">{item.name}</div>
                          {item.note ? (
                            <div className="mt-1 text-xs text-black/45">{item.note}</div>
                          ) : null}
                        </div>
                        <div className="text-sm font-semibold">{item.price}</div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 rounded-2xl border border-black/5 bg-white/60 p-4 text-sm text-black/65">
                    <span className="font-semibold">Booking tip:</span> call or text{" "}
                    <a className="underline" href={`tel:+1${PHONE_TEL}`}>{PHONE_DISPLAY}</a>{" "}
                    to reserve your spot.
                  </div>
                </div>
              </Surface>
            </div>
          </div>
        </Container>
      </section>

      <div className="lux-divider" />

      {/* SERVICES (full list) */}
      <section id="services" className="py-14">
        <Container>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="lux-kicker">Service menu</div>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight">Services & pricing</h2>
              <p className="mt-2 max-w-2xl text-sm text-black/60">
                Browse by category above, or view the full menu here.
              </p>
            </div>
            <div className="flex gap-2">
              <Button variant="ghost" href={`sms:+1${PHONE_TEL}`}>Text to Book</Button>
              <Button href={`tel:+1${PHONE_TEL}`}>Call</Button>
            </div>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {SERVICE_GROUPS.map((group) => (
              <Surface key={group.key} className="p-6 lux-lift">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-lg font-semibold">{group.title}</div>
                    <div className="mt-1 text-sm text-black/55">{group.subtitle}</div>
                  </div>
                  <span className="rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs font-semibold text-black/60">
                    Menu
                  </span>
                </div>

                <div className="mt-5 divide-y divide-black/5">
                  {group.items.map((item) => (
                    <div key={item.name} className="flex items-start justify-between gap-6 py-3">
                      <div className="text-sm text-black/75">{item.name}</div>
                      <div className="text-sm font-semibold">{item.price}</div>
                    </div>
                  ))}
                </div>
              </Surface>
            ))}
          </div>
        </Container>
      </section>

      {/* ABOUT */}
      <section id="about" className="pb-6">
        <Container>
          <div className="grid gap-5 md:grid-cols-2">
            <Surface className="p-6">
              <div className="lux-kicker">About</div>
              <h3 className="mt-3 text-xl font-semibold tracking-tight">Meet Katherine</h3>
              <p className="mt-3 text-sm text-black/65">
                Intrinsic Beauty is owned and operated by{" "}
                <span className="font-semibold text-black/80">Katherine Andrews</span>.
                Come as you are — leave feeling refreshed, confident, and cared for.
              </p>
            </Surface>

            <Surface className="p-6">
              <div className="lux-kicker">Contact</div>
              <h3 className="mt-3 text-xl font-semibold tracking-tight">Find us in Brainerd</h3>

              <div className="mt-4 space-y-3 text-sm text-black/65">
                <div>
                  <div className="font-semibold text-black/80">Address</div>
                  <div>{ADDRESS_LINES[0]}</div>
                  <div>{ADDRESS_LINES[1]}</div>
                </div>

                <div>
                  <div className="font-semibold text-black/80">Phone</div>
                  <a className="underline" href={`tel:+1${PHONE_TEL}`}>{PHONE_DISPLAY}</a>
                </div>

                <div className="pt-2 flex flex-wrap gap-3">
                  <Button href={`tel:+1${PHONE_TEL}`}>Call</Button>
                  <Button variant="ghost" href={`sms:+1${PHONE_TEL}`}>Text</Button>
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

          <footer id="contact" className="mt-10 pb-12 text-center text-xs text-black/50">
            © {new Date().getFullYear()} Intrinsic Beauty • Brainerd, Minnesota
          </footer>
        </Container>
      </section>
    </main>
  );
}
