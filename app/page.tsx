import Link from "next/link";

export default function HomePage() {
  return (
    <section className="space-y-6">
      <p className="inline-flex rounded-full bg-brand/10 px-3 py-1 text-sm font-medium text-brand">
        App Router + Tailwind starter
      </p>
      <h1 className="text-4xl font-bold tracking-tight text-slate-900">Find your next home, faster.</h1>
      <p className="max-w-2xl text-lg text-slate-600">
        This scaffold includes public listings and admin management routes, plus a ready-to-run Supabase
        schema for inventory, images, and reservations.
      </p>
      <div className="flex flex-wrap gap-3">
        <Link href="/items" className="rounded-md bg-brand px-5 py-2.5 font-semibold text-white">
          Browse listings
        </Link>
        <Link
          href="/admin"
          className="rounded-md border border-slate-300 bg-white px-5 py-2.5 font-semibold text-slate-800"
        >
          Open admin
        </Link>
      </div>
    </section>
  );
}
