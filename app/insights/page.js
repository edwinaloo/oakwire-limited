import Link from "next/link";
import { blogs } from "../data/blogs";

export const metadata = {
  title: "Property Insights & Valuation Guides | Oakwire Limited",
  description:
    "Read practical property valuation, land buying, and real estate advisory guides from Oakwire Limited in Nairobi, Kenya.",
};

export default function InsightsPage() {
  return (
    <main className="bg-[#f8f6f0] text-[#1f2933]">
      <section className="px-6 py-20 md:px-16 lg:px-24">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#b08d57]">
            Oakwire Insights
          </p>

          <h1 className="max-w-4xl text-4xl font-bold leading-tight text-[#123524] md:text-6xl">
            Property Insights & Valuation Guides
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-700">
            Practical articles from Oakwire Limited to help clients understand
            land valuation, property decisions, and real estate advisory matters
            across the world
          </p>
        </div>
      </section>

      <section className="px-6 pb-20 md:px-16 lg:px-24">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          {blogs.map((post) => (
            <article
              key={post.slug}
              className="rounded-3xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <span className="rounded-full bg-[#f8f6f0] px-4 py-2 text-xs font-semibold text-[#b08d57]">
                {post.tag}
              </span>

              <p className="mt-5 text-xs font-medium text-gray-500">
                {post.readTime}
              </p>

              <h2 className="mt-3 text-xl font-bold text-[#123524]">
                {post.title}
              </h2>

              <p className="mt-3 text-sm leading-6 text-gray-700">
                {post.description}
              </p>

              <Link
                href={`/insights/${post.slug}`}
                className="mt-6 inline-block text-sm font-semibold text-[#123524]"
              >
                Read Guide →
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}