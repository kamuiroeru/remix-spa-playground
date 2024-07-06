import type { Preview } from '@storybook/react';
import '@/tailwind.css';
import { Decorator } from '@storybook/react';
import { useState } from 'react';
import { clsx } from 'clsx/lite';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

const LightDarkTheme: Decorator = (Story) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className={clsx('flex flex-col', isDarkMode ? 'dark' : '')}>
      <div>
        <label htmlFor="darkMode">Dark Mode</label>
        <input
          type="checkbox"
          id="darkMode"
          checked={isDarkMode}
          onChange={() => setIsDarkMode(!isDarkMode)}
        />
      </div>
      <main className="w-[1440px] min-w-[1024px] flex-1 bg-gray-50 p-4 dark:bg-gray-800">
        <Story />
      </main>
    </div>
  );
};

export const decorators: Decorator[] = [LightDarkTheme];

export default preview;
