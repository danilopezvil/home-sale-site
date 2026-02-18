import Link from "next/link";

const adminLinks = [
  {
    href: "/admin/items",
    title: "Manage Items",
    description: "Create, edit, and archive property listings."
  },
  {
    href: "/admin/reservations",
    title: "Manage Reservations",
    description: "Review holds, confirmations, and cancellations."
  }
];

export default function AdminPage() {
  return (
    <section className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Admin dashboard</h1>
        <p className="mt-2 text-slate-600">Use these routes to manage inventory and reservation workflow.</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {adminLinks.map((link) => (
          <Link key={link.href} href={link.href} className="rounded-lg border border-slate-200 bg-white p-5">
            <h2 className="text-lg font-semibold text-slate-900">{link.title}</h2>
            <p className="mt-2 text-sm text-slate-600">{link.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
