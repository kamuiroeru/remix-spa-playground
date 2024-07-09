import { ClientLoaderFunction, useLoaderData } from '@remix-run/react';
import { Link } from '@/components/ui/Link';

export const clientLoader: ClientLoaderFunction = async ({ params }) => {
  return { slug: params.slug };
};

export default function Page() {
  const data = useLoaderData<typeof clientLoader>() as Record<string, string>;
  return (
    <section className="p-4 font-sans">
      <h1 className="text-3xl">About with Slug</h1>
      <Link to="/">Back to Home</Link>
      <hr className="my-4" />
      <p>Slug: {data.slug}</p>
    </section>
  );
}
