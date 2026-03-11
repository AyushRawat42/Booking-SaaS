'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2, Loader2 } from 'lucide-react';

export default function SettingsPage() {
  const [isProfileSaving, setIsProfileSaving] = useState(false);
  const [profileSaved, setProfileSaved] = useState(false);

  const [isPaymentSaving, setIsPaymentSaving] = useState(false);
  const [paymentSaved, setPaymentSaved] = useState(false);

  const handleSaveProfile = () => {
    setIsProfileSaving(true);
    setProfileSaved(false);
    setTimeout(() => {
      setIsProfileSaving(false);
      setProfileSaved(true);
      setTimeout(() => setProfileSaved(false), 3000);
    }, 800);
  };

  const handleSavePayments = () => {
    setIsPaymentSaving(true);
    setPaymentSaved(false);
    setTimeout(() => {
      setIsPaymentSaving(false);
      setPaymentSaved(true);
      setTimeout(() => setPaymentSaved(false), 3000);
    }, 800);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-gray-900">
          Settings
        </h1>
        <p className="text-sm text-gray-500">
          Manage your business profile, services, and WhatsApp configuration.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Business Profile</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Business Name</label>
              <input type="text" defaultValue="Salon Elegance" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm border p-2" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Vertical Preset</label>
              <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm border p-2">
                <option>Salon</option>
                <option>Spa</option>
                <option>Physician/Clinic</option>
                <option>Restaurant</option>
                <option>Boutique</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Timezone</label>
              <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm border p-2">
                <option>America/Los_Angeles</option>
                <option>America/New_York</option>
                <option>Europe/London</option>
                <option>Asia/Kolkata</option>
              </select>
            </div>
            <div className="flex items-center space-x-4 pt-2">
              <button 
                onClick={handleSaveProfile}
                disabled={isProfileSaving}
                className="flex items-center justify-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 disabled:opacity-70 disabled:cursor-not-allowed min-w-[120px]"
              >
                {isProfileSaving ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  'Save Profile'
                )}
              </button>
              {profileSaved && (
                <span className="flex items-center text-sm text-green-600">
                  <CheckCircle2 className="mr-1 h-4 w-4" />
                  Saved successfully
                </span>
              )}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>WhatsApp Configuration</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">WhatsApp Business Number</label>
              <input type="text" defaultValue="+1234567890" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm border p-2" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Webhook URL (Auto-generated)</label>
              <input type="text" readOnly defaultValue="https://api.saas.com/webhooks/whatsapp/tenant-123" className="mt-1 block w-full rounded-md border-gray-300 bg-gray-50 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm border p-2 text-gray-500" />
            </div>
            <div className="pt-2">
              <h4 className="text-sm font-medium text-gray-900 mb-2">Active Templates</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center justify-between">
                  <span>Booking Confirmation</span>
                  <span className="text-green-600 font-medium text-xs bg-green-50 px-2 py-1 rounded-full">Approved</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Appointment Reminder</span>
                  <span className="text-green-600 font-medium text-xs bg-green-50 px-2 py-1 rounded-full">Approved</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Payment Request</span>
                  <span className="text-green-600 font-medium text-xs bg-green-50 px-2 py-1 rounded-full">Approved</span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Payment Settings</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Payment Provider</label>
              <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm border p-2">
                <option>Stripe</option>
                <option>Razorpay</option>
                <option>PayU</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Deposit Rule</label>
              <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm border p-2">
                <option>Require 20% Deposit</option>
                <option>Require 50% Deposit</option>
                <option>Require Full Payment</option>
                <option>No Deposit Required</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Tax / GST Details</label>
              <input type="text" placeholder="e.g. GSTIN: 22AAAAA0000A1Z5" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm border p-2" />
            </div>
            <div className="flex items-center space-x-4 pt-2">
              <button 
                onClick={handleSavePayments}
                disabled={isPaymentSaving}
                className="flex items-center justify-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 disabled:opacity-70 disabled:cursor-not-allowed min-w-[120px]"
              >
                {isPaymentSaving ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  'Save Payments'
                )}
              </button>
              {paymentSaved && (
                <span className="flex items-center text-sm text-green-600">
                  <CheckCircle2 className="mr-1 h-4 w-4" />
                  Saved successfully
                </span>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
