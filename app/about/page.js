export const metadata = {
  title: "About Oakwire Limited | Real Estate Valuation & Advisory ",
  description:
    "Learn about Oakwire Limited, a real estate advisory company focused on land valuation, property valuation, and professional property guidance.",
};

export default function AboutPage() {
  const values = [
    {
      title: "Integrity",
      text: "We value honest, professional, and transparent service.",
    },
    {
      title: "Clarity",
      text: "We make property information easier to understand and act on.",
    },
    {
      title: "Reliability",
      text: "We aim to provide dependable valuation and advisory support.",
    },
    {
      title: "Client Focus",
      text: "We listen, guide, and support clients throughout the process.",
    },
  ];

  return (
    <main className="bg-[#f8f6f0] text-[#1f2933]">
      <section className="px-6 py-20 md:px-16 lg:px-24">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#b08d57]">
            About Oakwire Limited
          </p>

          <h1 className="max-w-4xl text-4xl font-bold leading-tight text-[#123524] md:text-6xl">
            Rooted in Trust. Focused on Property Value.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-700">
            Oakwire Limited is a real estate advisory company
            helping individuals, investors, businesses, and institutions make
            informed property decisions through professional land and property
            valuation services.
          </p>
        </div>
      </section>

      <section className="bg-white px-6 py-16 md:px-16 lg:px-24">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-[#123524]">
              Who We Are
            </h2>
            <p className="mt-4 leading-8 text-gray-700">
              Our work is guided by clarity, reliability, and practical market
              understanding. We support clients seeking valuation, real estate
              advisory, estate agency, property management, and project
              management services.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-[#123524]">
              What Oakwire Represents
            </h2>
            <p className="mt-4 leading-8 text-gray-700">
              The oak tree represents strength, stability, growth, and
              long-term value. At Oakwire Limited, this identity reflects our
              approach to real estate advisory: grounded, professional, and
              focused on helping clients make decisions that stand the test of
              time.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:px-16 lg:px-24">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
          <div className="rounded-3xl bg-[#123524] p-8 text-white">
            <h2 className="text-2xl font-bold">Our Mission</h2>
            <p className="mt-4 leading-8 text-gray-200">
              To provide reliable valuation and real estate advisory services
              that help clients understand property value, reduce uncertainty,
              and make confident decisions.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-[#123524]">Our Vision</h2>
            <p className="mt-4 leading-8 text-gray-700">
              To become a trusted real estate valuation and advisory partner in
              Kenya and across the Globe
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16 md:px-16 lg:px-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-[#123524]">
            Our Values
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-2xl border border-gray-200 bg-[#f8f6f0] p-6"
              >
                <h3 className="text-xl font-semibold text-[#123524]">
                  {value.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-gray-700">
                  {value.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#123524] px-6 py-20 text-white md:px-16 lg:px-24">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold">
            Need Professional Property Guidance?
          </h2>
          <p className="mt-4 text-gray-200">
            Talk to Oakwire Limited for reliable land valuation, property
            valuation, and real estate advisory support.
          </p>
          <a
            href="/contact"
            className="mt-8 inline-block rounded-full bg-white px-8 py-4 font-semibold text-[#123524]"
          >
            Contact Oakwire Limited
          </a>
        </div>
      </section>
    </main>
  );
}