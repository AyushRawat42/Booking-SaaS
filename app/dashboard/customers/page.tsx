import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const customers = [
  { id: 'C-001', name: 'Sarah Jenkins', phone: '+1 555-0101', email: 'sarah@example.com', totalBookings: 5, lastVisit: '2026-03-11' },
  { id: 'C-002', name: 'Michael Chen', phone: '+1 555-0102', email: 'michael@example.com', totalBookings: 2, lastVisit: '2026-03-11' },
  { id: 'C-003', name: 'Emma Watson', phone: '+1 555-0103', email: 'emma@example.com', totalBookings: 8, lastVisit: '2026-03-11' },
  { id: 'C-004', name: 'David Smith', phone: '+1 555-0104', email: 'david@example.com', totalBookings: 1, lastVisit: '2026-03-11' },
  { id: 'C-005', name: 'Olivia Davis', phone: '+1 555-0105', email: 'olivia@example.com', totalBookings: 3, lastVisit: '2026-03-11' },
];

export default function CustomersPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-gray-900">
            Customers
          </h1>
          <p className="text-sm text-gray-500">
            View and manage your customer list.
          </p>
        </div>
        <button className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500">
          Add Customer
        </button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Customer Directory</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 border-b">
                <tr>
                  <th scope="col" className="px-6 py-3">ID</th>
                  <th scope="col" className="px-6 py-3">Name</th>
                  <th scope="col" className="px-6 py-3">Phone</th>
                  <th scope="col" className="px-6 py-3">Email</th>
                  <th scope="col" className="px-6 py-3 text-center">Total Bookings</th>
                  <th scope="col" className="px-6 py-3">Last Visit</th>
                  <th scope="col" className="px-6 py-3 text-right">Action</th>
                </tr>
              </thead>
              <tbody>
                {customers.map((customer) => (
                  <tr key={customer.id} className="bg-white border-b hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                      {customer.id}
                    </td>
                    <td className="px-6 py-4 font-medium text-gray-900">{customer.name}</td>
                    <td className="px-6 py-4">{customer.phone}</td>
                    <td className="px-6 py-4">{customer.email}</td>
                    <td className="px-6 py-4 text-center">
                      <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-indigo-100 bg-indigo-600 rounded-full">
                        {customer.totalBookings}
                      </span>
                    </td>
                    <td className="px-6 py-4">{customer.lastVisit}</td>
                    <td className="px-6 py-4 text-right">
                      <button className="font-medium text-indigo-600 hover:underline">View History</button>
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
