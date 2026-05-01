import Link from "next/link";
import { blogs } from "./data/blogs";

export const metadata = {
  title: "Oakwire Limited | Land & Property Valuation Services in Nairobi",
  description:
    "Oakwire Limited provides professional land and property valuation services in Nairobi, Kenya, with support in real estate advisory, estate agency, property management, and project management.",
};

export default function Home() {
  const services = [
    {
      title: "Land & Property Valuation",
      text: "Professional valuation support for land, residential, commercial, rental, and development-related property decisions.",
      link: "/valuation",
    },
    {
      title: "Estate Agency Services",
      text: "Support for property sales, leasing, buyer guidance, seller guidance, and property marketing.",
      link: "/estate-agency",
    },
    {
      title: "Property Management",
      text: "Practical support for landlords and property owners who want better rental oversight and property care.",
      link: "/property-management",
    },
    {
      title: "Project Management",
      text: "Guidance for real estate development planning, coordination, monitoring, and execution.",
      link: "/project-management",
    },
  ];

  const process = [
    "Initial Enquiry",
    "Document Review",
    "Inspection & Market Review",
    "Valuation Guidance",
  ];

  return (
    <main className="bg-[#f8f6f0] text-[#1f2933]">
      {/* Hero */}
      <section className="px-6 py-24 md:px-16 lg:px-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#b08d57]">
              Oakwire Limited
            </p>

            <h1 className="text-4xl font-bold leading-tight text-[#123524] md:text-6xl">
              Trusted Land & Property Valuation Services in Nairobi
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-700">
              Oakwire Limited provides professional real estate valuation and
              advisory services to help individuals, investors, businesses, and
              institutions make confident property decisions.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-full bg-[#123524] px-8 py-4 text-center font-semibold text-white transition hover:bg-[#0b2418]"
              >
                Request a Valuation
              </Link>

              <Link
                href="/valuation"
                className="rounded-full border border-[#123524] px-8 py-4 text-center font-semibold text-[#123524] transition hover:bg-[#123524] hover:text-white"
              >
                Explore Valuation Services
              </Link>
            </div>
          </div>

          <div className="rounded-4xl bg-white p-6 shadow-sm">
            <div className="rounded-3xl bg-[#123524] p-8 text-white">
              <p className="text-sm uppercase tracking-[0.2em] text-[#d6b36a]">
                Valuation-first advisory
              </p>
              <h2 className="mt-4 text-3xl font-bold">
                Clear property insight before you buy, sell, finance, or
                develop.
              </h2>
              <p className="mt-6 leading-7 text-gray-200">
                Our work is rooted in clarity, reliability, and practical local
                market understanding.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="px-6 pb-16 md:px-16 lg:px-24">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-4">
          {[
            "Nairobi-Based Expertise",
            "Valuation-First Approach",
            "Clear Reporting",
            "Client-Focused Service",
          ].map((item) => (
            <div key={item} className="rounded-2xl bg-white p-5 shadow-sm">
              <p className="font-semibold text-[#123524]">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Main Valuation Section */}
      <section className="bg-white px-6 py-20 md:px-16 lg:px-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#b08d57]">
              Our Core Service
            </p>

            <h2 className="text-3xl font-bold text-[#123524] md:text-4xl">
              Professional Valuation for Smarter Property Decisions
            </h2>

            <p className="mt-5 leading-8 text-gray-700">
              Property decisions require more than guesswork. Whether you are
              buying land, selling property, applying for financing, managing
              assets, or planning development, Oakwire Limited provides
              valuation support designed to give you clarity before you act.
            </p>

            <Link
              href="/valuation"
              className="mt-8 inline-block rounded-full bg-[#123524] px-7 py-3 font-semibold text-white"
            >
              Learn More About Valuation
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Land Valuation",
              "Residential Valuation",
              "Commercial Valuation",
              "Rental Valuation",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-gray-200 bg-[#f8f6f0] p-6"
              >
                <h3 className="font-semibold text-[#123524]">{item}</h3>
                <p className="mt-3 text-sm leading-6 text-gray-600">
                  Reliable valuation guidance for informed property decisions.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Supporting Services */}
      <section className="px-6 py-20 md:px-16 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#b08d57]">
              Additional Services
            </p>

            <h2 className="text-3xl font-bold text-[#123524] md:text-4xl">
              Real Estate Support Beyond Valuation
            </h2>

            <p className="mt-5 leading-8 text-gray-700">
              While valuation remains our main focus, Oakwire Limited also
              supports clients with selected real estate services that help them
              manage, market, and develop property more effectively.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-4">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-3xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <h3 className="text-xl font-bold text-[#123524]">
                  {service.title}
                </h3>

                <p className="mt-4 text-sm leading-6 text-gray-700">
                  {service.text}
                </p>

                <Link
                  href={service.link}
                  className="mt-6 inline-block text-sm font-semibold text-[#123524]"
                >
                  Learn more →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="bg-white px-6 py-20 md:px-16 lg:px-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#b08d57]">
              Why Oakwire
            </p>

            <h2 className="text-3xl font-bold text-[#123524] md:text-4xl">
              Rooted in Trust. Focused on Long-Term Value.
            </h2>

            <p className="mt-5 leading-8 text-gray-700">
              Like the oak tree in our identity, Oakwire Limited is built around
              strength, stability, and dependable guidance. We help clients move
              through property decisions with clarity and confidence.
            </p>
          </div>

          <div className="space-y-4">
            {[
              "Local Nairobi market understanding",
              "Clear and practical valuation guidance",
              "Professional communication from enquiry to report",
              "Real estate advisory built around client needs",
            ].map((item) => (
              <div key={item} className="rounded-2xl bg-[#f8f6f0] p-5">
                <p className="font-semibold text-[#123524]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="px-6 py-20 md:px-16 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-[#123524] md:text-4xl">
            How Our Valuation Process Works
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-4">
            {process.map((step, index) => (
              <div key={step} className="rounded-3xl bg-white p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#123524] font-bold text-white">
                  {index + 1}
                </div>
                <h3 className="mt-5 text-lg font-bold text-[#123524]">
                  {step}
                </h3>
                <p className="mt-3 text-sm leading-6 text-gray-700">
                  A clear step designed to help clients understand the valuation
                  journey from first contact to final guidance.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="bg-white px-6 py-20 md:px-16 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#b08d57]">
                Insights
              </p>

              <h2 className="text-3xl font-bold text-[#123524] md:text-4xl">
                Property Insights & Valuation Guides
              </h2>
            </div>

            <Link
              href="/insights"
              className="font-semibold text-[#123524]"
            >
              View all insights →
            </Link>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {blogs.slice(0, 3).map((post) => (
              <article key={post.slug} className="rounded-3xl bg-[#f8f6f0] p-6">
                <span className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-[#b08d57]">
                  {post.tag}
                </span>

                <h3 className="mt-6 text-xl font-bold text-[#123524]">
                  {post.title}
                </h3>

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
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#123524] px-6 py-20 text-white md:px-16 lg:px-24">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            Need a Land or Property Valuation in Nairobi?
          </h2>

          <p className="mt-5 leading-8 text-gray-200">
            Speak to Oakwire Limited today for professional valuation guidance
            and real estate advisory support tailored to your property needs.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-block rounded-full bg-white px-8 py-4 font-semibold text-[#123524]"
          >
            Request a Valuation
          </Link>
        </div>
      </section>
    </main>
  );
}