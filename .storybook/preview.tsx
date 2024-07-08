import type { Preview } from '@storybook/react';
import '@/tailwind.css';
import { Decorator } from '@storybook/react';
import { LightDarkSwitch } from '@/components/ui/LightDarkSwitch';
import { useState } from 'react';
import { clsx } from 'clsx/lite';
// JSX を使うために import しないと形エラーで怒られるので、import しておく
import React from 'react';

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
    <div className={clsx('flex flex-col gap-2', isDarkMode ? 'dark' : '')}>
      <LightDarkSwitch checked={isDarkMode} onChange={setIsDarkMode} />
      <main className="w-[1440px] min-w-[1024px] flex-1 bg-gray-50 p-4 dark:bg-gray-800">
        <Story />
      </main>
    </div>
  );
};

export const decorators: Decorator[] = [LightDarkTheme];

export default preview;
