import React from 'react';
import { DashboardProvider } from '../context/DashboardContext';
import './globals.css';

export const metadata = {
  title: 'PI Planning Dashboard',
  description: 'Dashboard for PI Planning and tracking',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <DashboardProvider>
          <main className="min-h-screen bg-gray-50">
            {children}
          </main>
        </DashboardProvider>
      </body>
    </html>
  );
}