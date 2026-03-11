import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const bookings = [
  { id: 'B-1001', customer: 'Sarah Jenkins', service: 'Haircut & Styling', date: '2026-03-11', time: '10:00 AM', status: 'Confirmed', payment: 'Paid' },
  { id: 'B-1002', customer: 'Michael Chen', service: 'Beard Trim', date: '2026-03-11', time: '10:30 AM', status: 'Confirmed', payment: 'Deposit Paid' },
  { id: 'B-1003', customer: 'Emma Watson', service: 'Coloring', date: '2026-03-11', time: '11:00 AM', status: 'Pending', payment: 'Pending' },
  { id: 'B-1004', customer: 'David Smith', service: 'Haircut', date: '2026-03-11', time: '11:45 AM', status: 'Confirmed', payment: 'Paid' },
  { id: 'B-1005', customer: 'Olivia Davis', service: 'Styling', date: '2026-03-11', time: '12:30 PM', status: 'Confirmed', payment: 'Paid' },
  { id: 'B-1006', customer: 'James Wilson', service: 'Haircut', date: '2026-03-12', time: '09:00 AM', status: 'Cancelled', payment: 'Refunded' },
  { id: 'B-1007', customer: 'Sophia Lee', service: 'Coloring', date: '2026-03-12', time: '10:00 AM', status: 'Confirmed', payment: 'Deposit Paid' },
];

export default function BookingsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-gray-900">
            Bookings
          </h1>
          <p className="text-sm text-gray-500">
            Manage your appointments and reservations.
          </p>
        </div>
        <button className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500">
          New Booking
        </button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Bookings</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 border-b">
                <tr>
                  <th scope="col" className="px-6 py-3">Booking ID</th>
                  <th scope="col" className="px-6 py-3">Customer</th>
                  <th scope="col" className="px-6 py-3">Service</th>
                  <th scope="col" className="px-6 py-3">Date & Time</th>
                  <th scope="col" className="px-6 py-3">Status</th>
                  <th scope="col" className="px-6 py-3">Payment</th>
                  <th scope="col" className="px-6 py-3 text-right">Action</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((booking) => (
                  <tr key={booking.id} className="bg-white border-b hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                      {booking.id}
                    </td>
                    <td className="px-6 py-4">{booking.customer}</td>
                    <td className="px-6 py-4">{booking.service}</td>
                    <td className="px-6 py-4">{booking.date} at {booking.time}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        booking.status === 'Confirmed' ? 'bg-green-100 text-green-800' :
                        booking.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {booking.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        booking.payment === 'Paid' ? 'bg-green-100 text-green-800' :
                        booking.payment === 'Deposit Paid' ? 'bg-blue-100 text-blue-800' :
                        booking.payment === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {booking.payment}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="font-medium text-indigo-600 hover:underline">Edit</button>
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
