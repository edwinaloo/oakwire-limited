export const metadata = {
  title: "Oakwire Limited | Land & Property Valuation Services in Nairobi",
  description:
    "Oakwire Limited provides professional land and property valuation services in Nairobi, Kenya, with support in real estate advisory, estate agency, property management, and project management.",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8f6f0] text-[#1f2933]">
      <section className="px-6 py-24 md:px-16 lg:px-24">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#b08d57]">
            Oakwire Limited
          </p>

          <h1 className="max-w-4xl text-4xl font-bold leading-tight text-[#123524] md:text-6xl">
            Trusted Land & Property Valuation Services in Nairobi
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-700">
            Oakwire Limited provides professional real estate valuation and
            advisory services to help individuals, investors, businesses, and
            institutions make informed property decisions with confidence.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="/contact"
              className="rounded-full bg-[#123524] px-8 py-4 text-center font-semibold text-white transition hover:bg-[#0b2418]"
            >
              Request a Valuation
            </a>

            <a
              href="/valuation"
              className="rounded-full border border-[#123524] px-8 py-4 text-center font-semibold text-[#123524] transition hover:bg-[#123524] hover:text-white"
            >
              Explore Our Services
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}