import Link from "next/link";
import { notFound } from "next/navigation";
import { getItemById } from "@/lib/sample-data";

export default function ItemDetailsPage({ params }: { params: { id: string } }) {
  const item = getItemById(params.id);

  if (!item) {
    notFound();
  }

  return (
    <section className="space-y-6">
      <Link href="/items" className="text-sm font-medium text-brand hover:underline">
        ← Back to listings
      </Link>
      <img src={item.imageUrl} alt={item.title} className="h-80 w-full rounded-xl object-cover" />
      <div className="space-y-4">
        <h1 className="text-3xl font-bold text-slate-900">{item.title}</h1>
        <p className="text-slate-600">{item.city}</p>
        <p className="text-2xl font-bold text-brand">${item.price.toLocaleString()}</p>
        <p className="max-w-3xl text-slate-700">{item.description}</p>
      </div>
    </section>
  );
}
