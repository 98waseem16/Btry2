import React from 'react';
import Link from 'next/link';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      {/* Left-hand navigation bar */}
      <nav className="bg-black text-white w-64 p-4 space-y-4">
        <h2 className="text-xl font-bold mb-4">Menu</h2>
        <ul className="space-y-2">
          <li>
            <Link href="/dashboard" className="block p-2 hover:bg-gray-700 rounded">
              Dashboard
            </Link>
          </li>
          {/* Add more navigation links here */}
          <li>
            <Link href="/dashboard/bots" className="block p-2 hover:bg-gray-700 rounded">
              Bots
            </Link>
          </li>
          <li>
            <Link href="/dashboard/settings" className="block p-2 hover:bg-gray-700 rounded">
              Settings
            </Link>
          </li>
        </ul>
      </nav>

      {/* Main content area */}
      <main className="flex-1 p-6">
        {children}
      </main>
    </div>
  );
}
