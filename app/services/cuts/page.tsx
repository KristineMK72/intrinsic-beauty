const PHONE_TEL = "12183308125";

const items = [
  { name: "Women", price: "$45" },
  { name: "Men", price: "$35" },
  { name: "Children", price: "$25" },
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

export default function CutsPage() {
  return (
    <main className="min-h-screen py-10">
      <Container>
        <a className="underline text-sm" href="/services">← Back to Services</a>

        <div className="mt-6 lux-kicker">Cuts</div>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight">Cuts & shaping</h1>
        <p className="mt-3 text-black/65">
          Precision, shape, and movement — tailored to you.
        </p>

        <div className="mt-7">
          <Surface>
            <div className="divide-y divide-black/5">
              {items.map((i) => <Row key={i.name} name={i.name} price={i.price} />)}
            </div>

            <div className="mt-6 rounded-2xl border border-black/5 bg-white/60 p-4 text-sm text-black/65">
              Ready to book?{" "}
              <a className="underline font-semibold" href={`tel:+1${PHONE_TEL}`}>Call</a>{" "}
              or{" "}
              <a className="underline font-semibold" href={`sms:+1${PHONE_TEL}`}>text</a>.
            </div>
          </Surface>
        </div>
      </Container>
    </main>
  );
}
