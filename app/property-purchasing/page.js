import Link from "next/link";

export const metadata = {
  title: "Property Purchasing Support in Nairobi | Oakwire Limited",
  description:
    "Oakwire Limited supports property buyers in Nairobi with valuation insight, due diligence awareness, and real estate purchasing guidance.",
};

export default function PropertyPurchasingPage() {
  const steps = [
    "Understand buyer needs",
    "Review property details",
    "Support valuation insight",
    "Highlight due diligence checks",
    "Guide next decision steps",
  ];

  return (
    <main className="bg-[#f8f6f0] text-[#1f2933]">
      <section className="px-6 py-20 md:px-16 lg:px-24">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#b08d57]">
            Property Purchasing Support
          </p>

          <h1 className="max-w-4xl text-4xl font-bold leading-tight text-[#123524] md:text-6xl">
            Guidance for Safer Property Purchasing Decisions
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-700">
            Oakwire Limited helps buyers approach land and property purchases
            with better clarity through valuation insight, market awareness, and
            practical real estate guidance.
          </p>

          <Link
            href="/contact"
            className="mt-10 inline-block rounded-full bg-[#123524] px-8 py-4 font-semibold text-white hover:bg-[#0b2418]"
          >
            Request Buyer Guidance
          </Link>
        </div>
      </section>

      <section className="bg-white px-6 py-16 md:px-16 lg:px-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-[#123524]">
            How We Support Property Buyers
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              "Valuation guidance before purchase",
              "Awareness of key due diligence checks",
              "Market and location insight",
              "Buyer decision support",
              "Property document review guidance",
              "Connection between value, risk, and opportunity",
            ].map((item) => (
              <div key={item} className="rounded-2xl bg-[#f8f6f0] p-6">
                <p className="font-semibold text-[#123524]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:px-16 lg:px-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-[#123524]">
            Our Buyer Support Process
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-5">
            {steps.map((step, index) => (
              <div key={step} className="rounded-3xl bg-white p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#123524] font-bold text-white">
                  {index + 1}
                </div>
                <p className="mt-4 text-sm font-semibold text-[#123524]">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#123524] px-6 py-20 text-white md:px-16 lg:px-24">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold">
            Planning to Buy Land or Property?
          </h2>

          <p className="mt-4 text-gray-200">
            Speak to Oakwire Limited before committing funds so you can make a
            more informed property decision.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-block rounded-full bg-white px-8 py-4 font-semibold text-[#123524]"
          >
            Contact Oakwire Limited
          </Link>
        </div>
      </section>
    </main>
  );
}