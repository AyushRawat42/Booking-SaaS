import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const invoices = [
  { id: 'INV-2026-001', bookingId: 'B-1001', customer: 'Sarah Jenkins', amount: '$120.00', status: 'Paid', date: '2026-03-11' },
  { id: 'INV-2026-002', bookingId: 'B-1002', customer: 'Michael Chen', amount: '$25.00', status: 'Paid', date: '2026-03-11' },
  { id: 'INV-2026-003', bookingId: 'B-1003', customer: 'Emma Watson', amount: '$80.00', status: 'Unpaid', date: '2026-03-11' },
  { id: 'INV-2026-004', bookingId: 'B-1004', customer: 'David Smith', amount: '$45.00', status: 'Paid', date: '2026-03-11' },
  { id: 'INV-2026-005', bookingId: 'B-1005', customer: 'Olivia Davis', amount: '$60.00', status: 'Paid', date: '2026-03-11' },
];

export default function InvoicesPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-gray-900">
            Invoices
          </h1>
          <p className="text-sm text-gray-500">
            Manage billing, generate PDFs, and track payment status.
          </p>
        </div>
        <button className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500">
          Create Manual Invoice
        </button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Invoices</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 border-b">
                <tr>
                  <th scope="col" className="px-6 py-3">Invoice Number</th>
                  <th scope="col" className="px-6 py-3">Booking ID</th>
                  <th scope="col" className="px-6 py-3">Customer</th>
                  <th scope="col" className="px-6 py-3">Amount</th>
                  <th scope="col" className="px-6 py-3">Status</th>
                  <th scope="col" className="px-6 py-3">Date</th>
                  <th scope="col" className="px-6 py-3 text-right">Action</th>
                </tr>
              </thead>
              <tbody>
                {invoices.map((invoice) => (
                  <tr key={invoice.id} className="bg-white border-b hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                      {invoice.id}
                    </td>
                    <td className="px-6 py-4 text-indigo-600 hover:underline cursor-pointer">{invoice.bookingId}</td>
                    <td className="px-6 py-4">{invoice.customer}</td>
                    <td className="px-6 py-4 font-medium text-gray-900">{invoice.amount}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        invoice.status === 'Paid' ? 'bg-green-100 text-green-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {invoice.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">{invoice.date}</td>
                    <td className="px-6 py-4 text-right space-x-2">
                      <button className="font-medium text-indigo-600 hover:underline">Download PDF</button>
                      <button className="font-medium text-indigo-600 hover:underline">Send via WA</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
