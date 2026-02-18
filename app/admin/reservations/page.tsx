const reservationRows = [
  {
    id: "RSV-1001",
    itemId: "sunset-villa",
    buyerName: "Morgan Lee",
    status: "pending",
    reservedAt: "2026-02-10"
  },
  {
    id: "RSV-1002",
    itemId: "maple-townhome",
    buyerName: "Casey Nguyen",
    status: "confirmed",
    reservedAt: "2026-02-11"
  }
];

export default function AdminReservationsPage() {
  return (
    <section className="space-y-4">
      <h1 className="text-3xl font-bold text-slate-900">Admin · Reservations</h1>
      <p className="text-slate-600">Placeholder reservation queue and statuses.</p>
      <div className="overflow-hidden rounded-lg border border-slate-200 bg-white">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-100 text-slate-700">
            <tr>
              <th className="px-4 py-3">Reservation</th>
              <th className="px-4 py-3">Item</th>
              <th className="px-4 py-3">Buyer</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Reserved at</th>
            </tr>
          </thead>
          <tbody>
            {reservationRows.map((row) => (
              <tr key={row.id} className="border-t border-slate-200">
                <td className="px-4 py-3 font-medium">{row.id}</td>
                <td className="px-4 py-3">{row.itemId}</td>
                <td className="px-4 py-3">{row.buyerName}</td>
                <td className="px-4 py-3 capitalize">{row.status}</td>
                <td className="px-4 py-3">{row.reservedAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
