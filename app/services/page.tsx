const PHONE_DISPLAY = "218-330-8125";
const PHONE_TEL = "12183308125";

const CATS = [
  {
    title: "Cuts",
    desc: "Precision, shape, and movement — tailored to you.",
    href: "/services/cuts",
  },
  {
    title: "Color",
    desc: "Dimensional color with a plan that respects your hair.",
    href: "/services/color",
  },
  {
    title: "Waxing",
    desc: "Clean, subtle finishing touches.",
    href: "/services/waxing",
  },
  {
    title: "Scalp Therapy",
    desc: "Reset, hydrate, and restore balance.",
    href: "/services/scalp",
  },
];

function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto w-full max-w-6xl px-5">{children}</div>;
}

function Surface({ children }: { children: React.ReactNode }) {
  return <div className="lux-surface p-7">{children}</div>;
}

function Button({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
}) {
  const base =
    "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition active:translate-y-[1px]";
  const styles =
    variant === "primary"
      ? "bg-black text-white hover:opacity-90"
      : "border border-black/10 bg-white/70 text-black/80 hover:bg-black/5";
  return (
    <a href={href} className={`${base} ${styles}`}>
      {children}
    </a>
  );
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <div className="sticky top-0 z-50 border-b border-black/5 bg-white/70 backdrop-blur">
        <Container>
          <div className="flex items-center justify-between py-3">
            <a href="/" className="text-sm font-semibold">
              ← Intrinsic Beauty
            </a>
            <div className="flex gap-2">
              <Button variant="ghost" href={`sms:+1${PHONE_TEL}`}>Text</Button>
              <Button href={`tel:+1${PHONE_TEL}`}>Book</Button>
            </div>
          </div>
        </Container>
      </div>

      <Container>
        <div className="py-12 sm:py-16">
          <div className="lux-kicker">Service menu</div>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight">
            Services
          </h1>
          <p className="mt-3 max-w-2xl text-black/65">
            Choose a category to view pricing. For appointments, call or text{" "}
            <a className="underline" href={`tel:+1${PHONE_TEL}`}>{PHONE_DISPLAY}</a>.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {CATS.map((c) => (
              <a key={c.title} href={c.href} className="block">
                <Surface>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-xl font-semibold">{c.title}</div>
                      <div className="mt-2 text-sm text-black/55">{c.desc}</div>
                    </div>
                    <span className="h-10 w-10 rounded-full border border-black/10 bg-white/70 flex items-center justify-center">
                      →
                    </span>
                  </div>
                </Surface>
              </a>
            ))}
          </div>
        </div>
      </Container>
    </main>
  );
}
