import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const payments = [
  { id: 'PAY-1001', bookingId: 'B-1001', customer: 'Sarah Jenkins', amount: '$120.00', type: 'Full Payment', status: 'Completed', date: '2026-03-11 09:45 AM' },
  { id: 'PAY-1002', bookingId: 'B-1002', customer: 'Michael Chen', amount: '$25.00', type: 'Deposit', status: 'Completed', date: '2026-03-11 10:15 AM' },
  { id: 'PAY-1003', bookingId: 'B-1003', customer: 'Emma Watson', amount: '$80.00', type: 'Full Payment', status: 'Pending', date: '2026-03-11 10:50 AM' },
  { id: 'PAY-1004', bookingId: 'B-1004', customer: 'David Smith', amount: '$45.00', type: 'Full Payment', status: 'Completed', date: '2026-03-11 11:30 AM' },
  { id: 'PAY-1005', bookingId: 'B-1005', customer: 'Olivia Davis', amount: '$60.00', type: 'Full Payment', status: 'Completed', date: '2026-03-11 12:15 PM' },
  { id: 'PAY-1006', bookingId: 'B-1006', customer: 'James Wilson', amount: '$45.00', type: 'Refund', status: 'Refunded', date: '2026-03-10 14:00 PM' },
];

export default function PaymentsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-gray-900">
            Payments
          </h1>
          <p className="text-sm text-gray-500">
            Track deposits, full payments, and refunds.
          </p>
        </div>
        <button className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500">
          Generate Payment Link
        </button>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Total Collected</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$2,450.00</div>
            <p className="text-xs text-gray-500">This week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Deposits</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$450.00</div>
            <p className="text-xs text-gray-500">This week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Pending</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-amber-600">$120.00</div>
            <p className="text-xs text-gray-500">Awaiting payment</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Refunds</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">$45.00</div>
            <p className="text-xs text-gray-500">This week</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Transactions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 border-b">
                <tr>
                  <th scope="col" className="px-6 py-3">Transaction ID</th>
                  <th scope="col" className="px-6 py-3">Booking ID</th>
                  <th scope="col" className="px-6 py-3">Customer</th>
                  <th scope="col" className="px-6 py-3">Amount</th>
                  <th scope="col" className="px-6 py-3">Type</th>
                  <th scope="col" className="px-6 py-3">Status</th>
                  <th scope="col" className="px-6 py-3">Date</th>
                  <th scope="col" className="px-6 py-3 text-right">Action</th>
                </tr>
              </thead>
              <tbody>
                {payments.map((payment) => (
                  <tr key={payment.id} className="bg-white border-b hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                      {payment.id}
                    </td>
                    <td className="px-6 py-4 text-indigo-600 hover:underline cursor-pointer">{payment.bookingId}</td>
                    <td className="px-6 py-4">{payment.customer}</td>
                    <td className="px-6 py-4 font-medium text-gray-900">{payment.amount}</td>
                    <td className="px-6 py-4">{payment.type}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        payment.status === 'Completed' ? 'bg-green-100 text-green-800' :
                        payment.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {payment.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">{payment.date}</td>
                    <td className="px-6 py-4 text-right">
                      <button className="font-medium text-indigo-600 hover:underline">View Receipt</button>
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
