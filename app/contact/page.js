export const metadata = {
  title: "Contact Oakwire Limited | Request a Property Valuation in Nairobi",
  description:
    "Contact Oakwire Limited for land valuation, property valuation, real estate advisory, estate agency, property management, and project management support in Nairobi, Kenya.",
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
              <p className="text-gray-700">Nairobi, Kenya</p>
              <p className="text-gray-700">Email: info@oakwire.co.ke</p>
              <p className="text-gray-700">Phone: +254 722 745 287</p>
            </div>
          </div>

          <form className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
            <div className="grid gap-5">
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Your full name"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[#123524]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="+254722745287"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[#123524]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[#123524]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Service Needed
                </label>
                <select className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[#123524]">
                  <option>Land Valuation</option>
                  <option>Property Valuation</option>
                  <option>Estate Agency</option>
                  <option>Property Management</option>
                  <option>Project Management</option>
                  <option>Real Estate Advisory</option>
                  <option>General Enquiry</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Property Location
                </label>
                <input
                  type="text"
                  placeholder="Example: Kilimani, Nairobi"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[#123524]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  rows="5"
                  placeholder="Tell us what you need help with..."
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[#123524]"
                ></textarea>
              </div>

              <button
                type="submit"
                className="rounded-full bg-[#123524] px-8 py-4 font-semibold text-white transition hover:bg-[#0b2418]"
              >
                Send Enquiry
              </button>

              <a
                href="https://wa.me/254722745287"
                target="_blank"
                className="text-center font-semibold text-[#123524]"
              >
                Chat with Oakwire Limited on WhatsApp
              </a>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}