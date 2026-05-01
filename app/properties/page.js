import Link from "next/link";

export const metadata = {
  title: "Properties for Sale in Nairobi | Oakwire Limited",
  description:
    "Explore selected land and property listings for sale through Oakwire Limited in Nairobi, Kenya.",
};

export default function PropertiesPage() {
  const properties = [
    {
      title: "Residential Plot in Kiambu",
      location: "Kiambu, Kenya",
      price: "Price on Request",
      type: "Land",
      status: "For Sale",
      description:
        "A suitable residential plot ideal for home development or long-term investment.",
    },
    {
      title: "Apartment Unit in Nairobi",
      location: "Nairobi, Kenya",
      price: "Price on Request",
      type: "Apartment",
      status: "For Sale",
      description:
        "A well-positioned apartment option for buyers seeking urban convenience and investment value.",
    },
    {
      title: "Commercial Property Opportunity",
      location: "Nairobi Metropolitan Area",
      price: "Price on Request",
      type: "Commercial",
      status: "For Sale",
      description:
        "A commercial property opportunity suitable for business use or income generation.",
    },
  ];

  return (
    <main className="bg-[#f8f6f0] text-[#1f2933]">
      <section className="px-6 py-20 md:px-16 lg:px-24">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#b08d57]">
            Property Listings
          </p>

          <h1 className="max-w-4xl text-4xl font-bold leading-tight text-[#123524] md:text-6xl">
            Properties for Sale
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-700">
            Explore selected land and property opportunities available through
            Oakwire Limited. For current availability, pricing, and viewing
            arrangements, contact our team directly.
          </p>
        </div>
      </section>

      <section className="px-6 pb-20 md:px-16 lg:px-24">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          {properties.map((property) => (
            <article
              key={property.title}
              className="rounded-3xl bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mb-5 flex items-center justify-between gap-3">
                <span className="rounded-full bg-[#f8f6f0] px-4 py-2 text-xs font-semibold text-[#b08d57]">
                  {property.type}
                </span>

                <span className="rounded-full bg-[#123524] px-4 py-2 text-xs font-semibold text-white">
                  {property.status}
                </span>
              </div>

              <h2 className="text-xl font-bold text-[#123524]">
                {property.title}
              </h2>

              <p className="mt-2 text-sm font-medium text-gray-500">
                {property.location}
              </p>

              <p className="mt-4 text-lg font-bold text-[#123524]">
                {property.price}
              </p>

              <p className="mt-4 text-sm leading-6 text-gray-700">
                {property.description}
              </p>

              <Link
                href="/contact"
                className="mt-6 inline-block rounded-full bg-[#123524] px-5 py-3 text-sm font-semibold text-white hover:bg-[#0b2418]"
              >
                Enquire About Property
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}