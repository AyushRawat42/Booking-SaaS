import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const tenants = [
  { id: 'T-001', name: 'Salon Elegance', vertical: 'Salon', status: 'Active', mrr: '$99', joined: '2025-10-15' },
  { id: 'T-002', name: 'Zen Spa', vertical: 'Spa', status: 'Active', mrr: '$149', joined: '2025-11-02' },
  { id: 'T-003', name: 'Dr. Smith Clinic', vertical: 'Physician/Clinic', status: 'Active', mrr: '$199', joined: '2025-12-10' },
  { id: 'T-004', name: 'Bistro 42', vertical: 'Restaurant', status: 'Onboarding', mrr: '$0', joined: '2026-03-01' },
  { id: 'T-005', name: 'Chic Boutique', vertical: 'Boutique', status: 'Active', mrr: '$99', joined: '2026-01-20' },
];

export default function AdminDashboardPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-gray-900">
            Super Admin Overview
          </h1>
          <p className="text-sm text-gray-500">
            Manage your SaaS tenants and platform metrics.
          </p>
        </div>
        <button className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500">
          Onboard New Tenant
        </button>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Total Tenants</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">124</div>
            <p className="text-xs text-green-600">+12 this month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Total MRR</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$15,420</div>
            <p className="text-xs text-green-600">+$1,200 this month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Active WA Numbers</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">118</div>
            <p className="text-xs text-gray-500">6 pending verification</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Messages Sent (MTD)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">45.2k</div>
            <p className="text-xs text-gray-500">Across all tenants</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Tenants</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 border-b">
                <tr>
                  <th scope="col" className="px-6 py-3">Tenant ID</th>
                  <th scope="col" className="px-6 py-3">Business Name</th>
                  <th scope="col" className="px-6 py-3">Vertical</th>
                  <th scope="col" className="px-6 py-3">Status</th>
                  <th scope="col" className="px-6 py-3">MRR</th>
                  <th scope="col" className="px-6 py-3">Joined</th>
                  <th scope="col" className="px-6 py-3 text-right">Action</th>
                </tr>
              </thead>
              <tbody>
                {tenants.map((tenant) => (
                  <tr key={tenant.id} className="bg-white border-b hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                      {tenant.id}
                    </td>
                    <td className="px-6 py-4 font-medium text-gray-900">{tenant.name}</td>
                    <td className="px-6 py-4">{tenant.vertical}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        tenant.status === 'Active' ? 'bg-green-100 text-green-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {tenant.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">{tenant.mrr}</td>
                    <td className="px-6 py-4">{tenant.joined}</td>
                    <td className="px-6 py-4 text-right space-x-2">
                      <button className="font-medium text-indigo-600 hover:underline">Manage</button>
                      <button className="font-medium text-indigo-600 hover:underline">Impersonate</button>
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
