import Link from "next/link";
import type { SaleItem } from "@/lib/sample-data";

const statusStyles: Record<SaleItem["status"], string> = {
  available: "bg-emerald-100 text-emerald-700",
  reserved: "bg-amber-100 text-amber-700",
  sold: "bg-slate-200 text-slate-700"
};

export function ItemCard({ item }: { item: SaleItem }) {
  return (
    <article className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
      <img src={item.imageUrl} alt={item.title} className="h-48 w-full object-cover" />
      <div className="space-y-4 p-5">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-slate-900">{item.title}</h2>
          <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${statusStyles[item.status]}`}>
            {item.status}
          </span>
        </div>
        <p className="text-sm text-slate-600">{item.city}</p>
        <p className="text-2xl font-bold text-brand">${item.price.toLocaleString()}</p>
        <div className="text-sm text-slate-600">
          {item.bedrooms} bd · {item.bathrooms} ba · {item.areaSqFt.toLocaleString()} sqft
        </div>
        <Link
          href={`/items/${item.id}`}
          className="inline-flex rounded-md bg-brand px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-dark"
        >
          View details
        </Link>
      </div>
    </article>
  );
}
