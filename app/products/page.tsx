export default function ProductsPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <p className="text-xs uppercase tracking-[0.25em] text-[#1F2937]/50">
        Products
      </p>

      <h1 className="mt-4 font-serif text-4xl">Professional Products</h1>

      <div className="mt-8 max-w-3xl rounded-3xl border border-[#E7DDD2] bg-white/50 p-8">
        <h2 className="font-serif text-2xl">Davines</h2>
        <p className="mt-4 leading-8 text-[#1F2937]/75">
          Intrinsic Beauty uses Davines professional salon products to support healthy hair and scalp care.
          Ask in salon about the best options for your hair type, goals, and maintenance routine.
        </p>
      </div>
    </main>
  );
}
