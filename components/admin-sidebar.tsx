import Link from 'next/link';
import {
  LayoutDashboard,
  Building2,
  Settings,
} from 'lucide-react';

const navigation = [
  { name: 'Overview', href: '/admin', icon: LayoutDashboard },
  { name: 'Tenants', href: '/admin/tenants', icon: Building2 },
  { name: 'System Settings', href: '/admin/settings', icon: Settings },
];

export function AdminSidebar() {
  return (
    <div className="flex h-full w-64 flex-col border-r border-gray-200 bg-gray-900 text-white">
      <div className="flex h-16 items-center px-6 border-b border-gray-800">
        <span className="text-lg font-bold text-white">SaaS Super Admin</span>
      </div>
      <nav className="flex-1 space-y-1 px-3 py-4">
        {navigation.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="group flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-800 hover:text-white"
          >
            <item.icon
              className="mr-3 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-300"
              aria-hidden="true"
            />
            {item.name}
          </Link>
        ))}
      </nav>
      <div className="border-t border-gray-800 p-4">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <div className="h-8 w-8 rounded-full bg-indigo-500 flex items-center justify-center text-white font-bold">
              SA
            </div>
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-white">Super Admin</p>
            <p className="text-xs font-medium text-gray-400">admin@saas.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
