import type { MetaFunction } from '@remix-run/node';
import { Button } from '@/components/ui/Button';
import { Icon } from '@iconify/react';
import { Link } from '@/components/ui/Link';

export const meta: MetaFunction = () => {
  return [
    { title: 'New Remix SPA' },
    { name: 'description', content: 'Welcome to Remix (SPA Mode)!' },
  ];
};

export default function Index() {
  return (
    <section className="p-4 font-sans">
      <h1 className="text-3xl">Welcome to Remix (SPA Mode)</h1>
      <ul className="mt-4 list-disc space-y-2 pl-6">
        <li className="hover:bg-purple-300">
          <a
            className="text-blue-600 underline visited:text-purple-900"
            target="_blank"
            href="https://remix.run/guides/spa-mode"
            rel="noreferrer"
          >
            SPA Mode Guide
          </a>
        </li>
        <li>
          <a
            className="text-blue-700 underline visited:text-purple-900"
            target="_blank"
            href="https://remix.run/docs"
            rel="noreferrer"
          >
            Remix Docs
          </a>
        </li>
        <li className="flex flex-row gap-4">
          <Button
            text="Normal Button"
            type="normal"
            color="green"
            leadingIcon={<Icon icon="teenyicons:button-outline" />}
          />
          <Button
            text="Outline Button"
            type="outline"
            color="green"
            leadingIcon={<Icon icon="material-symbols:star" />}
          />
          <Button
            text="Text Button"
            type="text"
            color="green"
            leadingIcon={<Icon icon="solar:text-bold" />}
          />
        </li>
        <li>
          <Link to="https://example.com">about</Link>
        </li>
        <li>
          <Link to="/hogefugapyo">hogefugapyo</Link>
        </li>
      </ul>
    </section>
  );
}
