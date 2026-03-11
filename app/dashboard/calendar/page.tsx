import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function CalendarPage() {
  const hours = Array.from({ length: 10 }, (_, i) => i + 9); // 9 AM to 6 PM
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <div className="space-y-6 flex flex-col h-full">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-gray-900">
            Calendar
          </h1>
          <p className="text-sm text-gray-500">
            View and manage your schedule.
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center rounded-md border border-gray-300 bg-white shadow-sm">
            <button className="p-2 text-gray-400 hover:text-gray-500">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <span className="px-4 text-sm font-medium text-gray-900">
              March 9 - 14, 2026
            </span>
            <button className="p-2 text-gray-400 hover:text-gray-500">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
          <button className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500">
            New Appointment
          </button>
        </div>
      </div>

      <Card className="flex-1 overflow-hidden flex flex-col">
        <CardContent className="p-0 flex-1 overflow-auto">
          <div className="min-w-[800px]">
            {/* Header */}
            <div className="grid grid-cols-7 border-b border-gray-200 bg-gray-50">
              <div className="p-4 text-center border-r border-gray-200 text-sm font-medium text-gray-500">
                Time
              </div>
              {days.map((day, i) => (
                <div key={day} className="p-4 text-center border-r border-gray-200 text-sm font-medium text-gray-900">
                  {day} <span className="text-gray-500 ml-1">{i + 9}</span>
                </div>
              ))}
            </div>

            {/* Body */}
            <div className="bg-white">
              {hours.map((hour) => (
                <div key={hour} className="grid grid-cols-7 border-b border-gray-100">
                  <div className="p-4 text-center border-r border-gray-200 text-sm text-gray-500">
                    {hour > 12 ? hour - 12 : hour}:00 {hour >= 12 ? 'PM' : 'AM'}
                  </div>
                  {days.map((day, dayIdx) => (
                    <div key={day} className="p-2 border-r border-gray-100 relative min-h-[80px]">
                      {/* Mock some appointments */}
                      {dayIdx === 1 && hour === 10 && (
                        <div className="absolute inset-x-1 top-1 bottom-1 bg-indigo-100 border border-indigo-200 rounded p-2 text-xs overflow-hidden">
                          <p className="font-semibold text-indigo-900">Sarah Jenkins</p>
                          <p className="text-indigo-700">Haircut & Styling</p>
                        </div>
                      )}
                      {dayIdx === 2 && hour === 14 && (
                        <div className="absolute inset-x-1 top-1 bottom-1 bg-green-100 border border-green-200 rounded p-2 text-xs overflow-hidden">
                          <p className="font-semibold text-green-900">Michael Chen</p>
                          <p className="text-green-700">Beard Trim</p>
                        </div>
                      )}
                      {dayIdx === 4 && hour === 11 && (
                        <div className="absolute inset-x-1 top-1 h-24 bg-blue-100 border border-blue-200 rounded p-2 text-xs overflow-hidden z-10">
                          <p className="font-semibold text-blue-900">Emma Watson</p>
                          <p className="text-blue-700">Coloring (2 hrs)</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
