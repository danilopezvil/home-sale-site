import { sampleItems } from "@/lib/sample-data";

export default function AdminItemsPage() {
  return (
    <section className="space-y-4">
      <h1 className="text-3xl font-bold text-slate-900">Admin · Items</h1>
      <p className="text-slate-600">Placeholder management table for listings.</p>
      <div className="overflow-hidden rounded-lg border border-slate-200 bg-white">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-100 text-slate-700">
            <tr>
              <th className="px-4 py-3">Title</th>
              <th className="px-4 py-3">City</th>
              <th className="px-4 py-3">Price</th>
              <th className="px-4 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {sampleItems.map((item) => (
              <tr key={item.id} className="border-t border-slate-200">
                <td className="px-4 py-3 font-medium">{item.title}</td>
                <td className="px-4 py-3">{item.city}</td>
                <td className="px-4 py-3">${item.price.toLocaleString()}</td>
                <td className="px-4 py-3 capitalize">{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
