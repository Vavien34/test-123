import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tech Service App',
  description: 'A modern tech service application',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header className="bg-blue-600 text-white p-4">
          <div className="container mx-auto">
            <h1 className="text-2xl font-bold">Tech Service App</h1>
          </div>
        </header>
        <main className="container mx-auto p-4">{children}</main>
        <footer className="bg-gray-100 p-4 mt-8">
          <div className="container mx-auto text-center text-gray-600">
            <p>© 2025 Tech Service App. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
