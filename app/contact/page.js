import ContactForm from "../../components/ContactForm";
export const metadata = {
  title: "Contact Oakwire Limited | Request a Property Valuation",
  description:
    "Contact Oakwire Limited for land valuation, property valuation, real estate advisory, estate agency, property management, and project management support in Kenya.",
};

export default function ContactPage() {
  return (
    <main className="bg-[#f8f6f0] text-[#1f2933]">
      <section className="px-6 py-20 md:px-16 lg:px-24">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#b08d57]">
              Contact Oakwire Limited
            </p>

            <h1 className="text-4xl font-bold leading-tight text-[#123524] md:text-5xl">
              Request a Land or Property Valuation
            </h1>

            <p className="mt-6 text-lg leading-8 text-gray-700">
              Need professional support with land valuation, property valuation,
              or real estate advisory? Share your details and Oakwire Limited
              will guide you through the next steps.
            </p>

            <div className="mt-10 space-y-4 rounded-2xl bg-white p-6 shadow-sm">
              <p className="font-semibold text-[#123524]">Contact Details</p>
              <p className="text-gray-700">Kenya</p>
              <p className="text-gray-700">Email: info@oakwire.co.ke</p>
              <p className="text-gray-700">Phone: +254 722 745 287</p>
            </div>
          </div>

          <ContactForm />
          
        </div>
      </section>
    </main>
  );
}