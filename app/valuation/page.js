export const metadata = {
  title: "Land & Property Valuation Services in Kenya | Oakwire Limited",
  description:
    "Oakwire Limited provides professional land and property valuation services in Kenya for buyers, sellers, investors, businesses, and institutions.",
};

export default function ValuationPage() {
  const valuationServices = [
    "Land Valuation",
    "Residential Valuation",
    "Commercial Valuation",
    "Rental Valuation",
    "Mortgage & Financing Valuation",
    "Development Advisory Valuation",
  ];

  const needs = [
    "Buying land or property",
    "Selling property",
    "Applying for financing or mortgages",
    "Property investment decisions",
    "Insurance and asset protection",
    "Rental pricing and review",
    "Family or succession matters",
    "Real estate development planning",
  ];

  const documents = [
    "Copy of title deed or ownership document",
    "Property location details",
    "Land reference or parcel number",
    "Building plans, if available",
    "Lease agreements, if applicable",
    "Rental income details, if applicable",
  ];

  const steps = [
    "Enquiry",
    "Document Review",
    "Inspection",
    "Market Analysis",
    "Valuation Report",
  ];

  const faqs = [
  {
    question: "How much does property valuation cost in Kenya?",
    answer:
      "The cost depends on the property type, location, purpose of valuation, and complexity of the assignment. Oakwire Limited can provide guidance after reviewing the property details.",
  },
  {
    question: "How long does land or property valuation take?",
    answer:
      "The timeline depends on document availability, inspection needs, and the type of property. Simple valuation requests may move faster when all required documents are ready.",
  },
  {
    question: "What documents are needed for property valuation?",
    answer:
      "Common documents include a title deed or ownership document, land reference or parcel number, location details, building plans where applicable, lease agreements, and rental income details.",
  },
  {
    question: "Do you inspect the property before valuation?",
    answer:
      "In many cases, inspection helps confirm the property condition, location, access, improvements, and surrounding market context before valuation guidance is prepared.",
  },
  {
    question: "Can valuation help before buying land?",
    answer:
      "Yes. Valuation helps buyers understand whether the asking price is reasonable and supports better decision-making before committing funds.",
  },
];

  return (
    <main className="bg-[#f8f6f0] text-[#1f2933]">
      {/* Hero Section */}
      <section className="px-6 py-20 md:px-16 lg:px-24">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#b08d57]">
            Valuation Services
          </p>

          <h1 className="max-w-4xl text-4xl font-bold leading-tight text-[#123524] md:text-6xl">
            Land & Property Valuation Services in Kenya
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-700">
            Oakwire Limited helps individuals, investors, businesses, and
            institutions understand property value before buying, selling,
            financing, developing, insuring, or managing real estate assets.
          </p>

          <div className="mt-10">
            <a
              href="/contact"
              className="rounded-full bg-[#123524] px-8 py-4 font-semibold text-white transition hover:bg-[#0b2418]"
            >
              Request a Valuation
            </a>
          </div>
        </div>
      </section>

      {/* Valuation Services Cards */}
      <section className="px-6 pb-20 md:px-16 lg:px-24">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          {valuationServices.map((service) => (
            <div
              key={service}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-xl font-semibold text-[#123524]">
                {service}
              </h3>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                Professional valuation support designed to give clients clear
                property insight and practical decision-making confidence.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* When You Need Valuation */}
      <section className="bg-white px-6 py-16 md:px-16 lg:px-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-[#123524]">
            When You May Need Property Valuation
          </h2>

          <ul className="mt-6 grid gap-4 text-gray-700 md:grid-cols-2">
            {needs.map((item) => (
              <li
                key={item}
                className="rounded-xl border border-gray-200 bg-[#f8f6f0] p-4"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Documents Required */}
      <section className="px-6 py-16 md:px-16 lg:px-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-[#123524]">
            Documents Required for Valuation
          </h2>

          <ul className="mt-6 space-y-3 text-gray-700">
            {documents.map((item) => (
              <li key={item} className="rounded-xl bg-white p-4 shadow-sm">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Process */}
      <section className="bg-white px-6 py-16 md:px-16 lg:px-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-[#123524]">
            Our Valuation Process
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-5">
            {steps.map((step, index) => (
              <div key={step} className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#123524] text-white">
                  {index + 1}
                </div>
                <p className="mt-3 text-sm text-gray-700">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
<section className="px-6 py-16 md:px-16 lg:px-24">
  <div className="mx-auto max-w-5xl">
    <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#b08d57]">
      Frequently Asked Questions
    </p>

    <h2 className="text-3xl font-bold text-[#123524]">
      Property Valuation FAQs
    </h2>

    <div className="mt-8 space-y-4">
      {faqs.map((faq) => (
        <div key={faq.question} className="rounded-2xl bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-[#123524]">
            {faq.question}
          </h3>
          <p className="mt-3 leading-7 text-gray-700">{faq.answer}</p>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Final CTA */}
      <section className="bg-[#123524] px-6 py-20 text-white md:px-16 lg:px-24">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold">
            Need a Land or Property Valuation in Nairobi?
          </h2>

          <p className="mt-4 text-gray-200">
            Speak to Oakwire Limited today and get professional valuation
            guidance before making your next property decision.
          </p>

          <a
            href="/contact"
            className="mt-8 inline-block rounded-full bg-white px-8 py-4 font-semibold text-[#123524]"
          >
            Request a Valuation
          </a>
        </div>
      </section>
    </main>
  );
}