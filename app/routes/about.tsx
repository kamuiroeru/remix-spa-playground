import { ClientLoaderFunction, useLoaderData } from '@remix-run/react';
import { Link } from '@/components/ui/Link';

export const clientLoader: ClientLoaderFunction = async ({ request }) => {
  const p: Record<string, string> = {};
  for (const [key, value] of new URL(request.url).searchParams.entries()) {
    p[key] = value;
  }
  return p;
};

export default function Page() {
  const data = useLoaderData<typeof clientLoader>() as Record<string, string>;
  const entries = Object.entries(data);
  return (
    <section className="p-4 font-sans">
      <h1 className="text-3xl">About</h1>
      <Link to="/">Back to Home</Link>
      <hr className="my-4" />
      {entries.length !== 0 && (
        <>
          <p>Query Params</p>
          <ul className="ml-4 list-disc">
            {entries.map(([key, value]) => (
              <li key={key}>
                {key}: {value}
              </li>
            ))}
          </ul>
        </>
      )}
    </section>
  );
}
