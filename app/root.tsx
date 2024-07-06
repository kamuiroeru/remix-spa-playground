import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';
import './tailwind.css';
import { useState } from 'react';
import { clsx } from 'clsx/lite';

export function Layout({ children }: { children: React.ReactNode }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body
        className={clsx(
          isDarkMode ? 'dark' : '',
          'flex w-full min-w-[1024px] flex-col',
        )}
      >
        <header className="flex w-full min-w-[1024px] items-center gap-5 bg-blue-500 p-4 text-white">
          <p className="text-3xl">Remix App</p>
          <div>
            <label htmlFor="darkMode">Dark Mode</label>
            <input
              type="checkbox"
              id="darkMode"
              checked={isDarkMode}
              onChange={() => setIsDarkMode(!isDarkMode)}
            />
          </div>
        </header>
        <main className="flex-1 bg-gray-50 dark:bg-gray-800">{children}</main>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function HydrateFallback() {
  return <p>Loading...</p>;
}
