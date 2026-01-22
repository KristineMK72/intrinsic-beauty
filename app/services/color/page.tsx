const PHONE_TEL = "12183308125";

const items = [
  { name: "Full color", price: "$100" },
  { name: "Refresh color", price: "$80" },
  { name: "Color transformation", price: "$75/hr" },
];

function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto w-full max-w-3xl px-5">{children}</div>;
}
function Surface({ children }: { children: React.ReactNode }) {
  return <div className="lux-surface p-7">{children}</div>;
}
function Row({ name, price }: { name: string; price: string }) {
  return (
    <div className="flex items-baseline justify-between gap-6 py-3">
      <div className="text-sm font-semibold text-black/85">{name}</div>
      <div className="text-sm font-semibold">{price}</div>
    </div>
  );
}

export default function ColorPage() {
  return (
    <main className="min-h-screen py-10">
      <Container>
        <a className="underline text-sm" href="/services">← Back to Services</a>

        <div className="mt-6 lux-kicker">Color</div>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight">Color chemistry</h1>
        <p className="mt-3 text-black/65">
          Dimensional color with a plan that respects your hair.
        </p>

        <div className="mt-7">
          <Surface>
            <div className="divide-y divide-black/5">
              {items.map((i) => <Row key={i.name} name={i.name} price={i.price} />)}
            </div>

            <div className="mt-4 text-xs text-black/45">
              Transformations vary by hair length and goals.
            </div>

            <div className="mt-6 rounded-2xl border border-black/5 bg-white/60 p-4 text-sm text-black/65">
              Questions?{" "}
              <a className="underline font-semibold" href={`sms:+1${PHONE_TEL}`}>Text</a>{" "}
              for an estimate.
            </div>
          </Surface>
        </div>
      </Container>
    </main>
  );
}
