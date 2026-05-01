import Link from "next/link";
import { blogs } from "../../data/blogs";

export default async function BlogPost({ params }) {
  const { slug } = await params;
  const blog = blogs.find((item) => item.slug === slug);

  if (!blog) {
    return (
      <main className="bg-[#f8f6f0] px-6 py-20 text-[#1f2933] md:px-16 lg:px-24">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold text-[#123524]">
            Blog not found
          </h1>

          <Link
            href="/insights"
            className="mt-6 inline-block font-semibold text-[#123524]"
          >
            Back to Insights
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-[#f8f6f0] px-6 py-20 text-[#1f2933] md:px-16 lg:px-24">
      <article className="mx-auto max-w-4xl">
        <Link
          href="/insights"
          className="mb-8 inline-block text-sm font-semibold text-[#123524]"
        >
          ← Back to Insights
        </Link>

        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#b08d57]">
          {blog.tag}
        </p>

        <h1 className="text-4xl font-bold leading-tight text-[#123524] md:text-5xl">
          {blog.title}
        </h1>

        <p className="mt-4 text-sm font-medium text-gray-500">
          {blog.readTime}
        </p>

        <div className="mt-10 rounded-3xl bg-white p-6 shadow-sm md:p-10">
          <p className="whitespace-pre-line text-lg leading-9 text-gray-700">
            {blog.content}
          </p>
        </div>

        <div className="mt-12 rounded-3xl bg-[#123524] p-8 text-white">
          <h2 className="text-2xl font-bold">
            Need professional property guidance?
          </h2>

          <p className="mt-4 leading-7 text-gray-200">
            Talk to Oakwire Limited for land valuation, property valuation, and
            real estate advisory support.
          </p>

          <Link
            href="/contact"
            className="mt-6 inline-block rounded-full bg-white px-6 py-3 font-semibold text-[#123524]"
          >
            Request a Valuation
          </Link>
        </div>
      </article>
    </main>
  );
}