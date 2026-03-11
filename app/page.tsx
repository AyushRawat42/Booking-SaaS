import Link from 'next/link';
import { ArrowRight, MessageSquare, Calendar, CreditCard } from 'lucide-react';

export default function Home() {
  return (
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">WhatsApp SaaS</span>
              <div className="h-8 w-8 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold">
                W
              </div>
            </a>
          </div>
          <div className="flex flex-1 justify-end space-x-4">
            <Link href="/dashboard" className="text-sm font-semibold leading-6 text-gray-900">
              Log in <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </nav>
      </header>

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Turn WhatsApp into your booking engine
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              A complete multi-tenant platform for salons, spas, clinics, and restaurants. Accept bookings, collect payments, and send invoices directly through WhatsApp Flows.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/dashboard"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Go to Dashboard
              </Link>
              <a href="#" className="text-sm font-semibold leading-6 text-gray-900 flex items-center">
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="py-24 sm:py-32 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">Faster Bookings</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Everything you need to run your business on WhatsApp
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <Calendar className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  Smart Booking Engine
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  Manage services, staff, locations, and slots. Prevent double bookings with our real-time slot engine.
                </dd>
              </div>
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <CreditCard className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  Integrated Payments
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  Collect advance payments, deposits, or full payments via payment links or native WhatsApp payments.
                </dd>
              </div>
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <MessageSquare className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  WhatsApp Flows
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  Structured interactions for appointment booking with dynamic data from your backend.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
