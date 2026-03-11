import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const campaigns = [
  { id: 'CAMP-001', name: 'Spring Discount', type: 'Offer', audience: 'All Customers', sent: 120, clicked: 45, booked: 12, status: 'Active' },
  { id: 'CAMP-002', name: 'Reactivation', type: 'Reminder', audience: 'Inactive > 3 months', sent: 50, clicked: 10, booked: 3, status: 'Active' },
  { id: 'CAMP-003', name: 'Valentine Special', type: 'Offer', audience: 'All Customers', sent: 150, clicked: 80, booked: 25, status: 'Completed' },
];

export default function CampaignsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-gray-900">
            Campaigns
          </h1>
          <p className="text-sm text-gray-500">
            Manage WhatsApp marketing campaigns and automated reminders.
          </p>
        </div>
        <button className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500">
          Create Campaign
        </button>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Total Sent This Month</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">320</div>
            <p className="text-xs text-green-600">+12% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Average Click Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">42%</div>
            <p className="text-xs text-green-600">+5% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Revenue from Campaigns</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$1,250</div>
            <p className="text-xs text-green-600">+18% from last month</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Campaigns</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 border-b">
                <tr>
                  <th scope="col" className="px-6 py-3">Campaign Name</th>
                  <th scope="col" className="px-6 py-3">Type</th>
                  <th scope="col" className="px-6 py-3">Audience</th>
                  <th scope="col" className="px-6 py-3 text-center">Sent</th>
                  <th scope="col" className="px-6 py-3 text-center">Clicked</th>
                  <th scope="col" className="px-6 py-3 text-center">Booked</th>
                  <th scope="col" className="px-6 py-3">Status</th>
                  <th scope="col" className="px-6 py-3 text-right">Action</th>
                </tr>
              </thead>
              <tbody>
                {campaigns.map((campaign) => (
                  <tr key={campaign.id} className="bg-white border-b hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                      {campaign.name}
                    </td>
                    <td className="px-6 py-4">{campaign.type}</td>
                    <td className="px-6 py-4">{campaign.audience}</td>
                    <td className="px-6 py-4 text-center">{campaign.sent}</td>
                    <td className="px-6 py-4 text-center">{campaign.clicked}</td>
                    <td className="px-6 py-4 text-center font-medium text-indigo-600">{campaign.booked}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        campaign.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                      }`}>
                        {campaign.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="font-medium text-indigo-600 hover:underline">View Report</button>
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
