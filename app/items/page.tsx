import { ItemCard } from "@/components/item-card";
import { sampleItems } from "@/lib/sample-data";

export default function ItemsPage() {
  return (
    <section className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Available properties</h1>
        <p className="mt-2 text-slate-600">Browse featured homes currently listed for sale.</p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {sampleItems.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
