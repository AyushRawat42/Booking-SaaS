import Link from 'next/link';
import {
  Calendar,
  LayoutDashboard,
  ListTodo,
  CreditCard,
  FileText,
  Users,
  Megaphone,
  Settings,
  LogOut,
} from 'lucide-react';

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Calendar', href: '/dashboard/calendar', icon: Calendar },
  { name: 'Bookings', href: '/dashboard/bookings', icon: ListTodo },
  { name: 'Payments', href: '/dashboard/payments', icon: CreditCard },
  { name: 'Invoices', href: '/dashboard/invoices', icon: FileText },
  { name: 'Customers', href: '/dashboard/customers', icon: Users },
  { name: 'Campaigns', href: '/dashboard/campaigns', icon: Megaphone },
  { name: 'Settings', href: '/dashboard/settings', icon: Settings },
];

export function Sidebar() {
  return (
    <div className="flex h-full w-64 flex-col border-r border-gray-200 bg-white">
      <div className="flex h-16 items-center px-6 border-b border-gray-200">
        <span className="text-lg font-bold text-gray-900">Salon Elegance</span>
      </div>
      <nav className="flex-1 space-y-1 px-3 py-4">
        {navigation.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="group flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
          >
            <item.icon
              className="mr-3 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
              aria-hidden="true"
            />
            {item.name}
          </Link>
        ))}
      </nav>
      <div className="border-t border-gray-200 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="h-8 w-8 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold">
                O
              </div>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-700">Owner</p>
              <p className="text-xs font-medium text-gray-500">owner@salon.com</p>
            </div>
          </div>
          <Link href="/" className="text-gray-400 hover:text-gray-600" title="Log out">
            <LogOut className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
