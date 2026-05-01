import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full border-b border-gray-200 bg-[#f8f6f0]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-12">
        
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-[#123524]">
          Oakwire
        </Link>

        {/* Links */}
        <div className="hidden items-center gap-8 md:flex">
          <Link href="/" className="text-gray-700 hover:text-[#123524]">
            Home
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-[#123524]">
            About
          </Link>
          <Link href="/valuation" className="text-gray-700 hover:text-[#123524]">
            Valuation
          </Link>
          <Link href="/insights" className="text-gray-700 hover:text-[#123524]">
            Insights
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-[#123524]">
            Contact
          </Link>
        </div>

        {/* CTA */}
        <Link
          href="/contact"
          className="hidden rounded-full bg-[#123524] px-5 py-2 text-sm font-semibold text-white md:block hover:bg-[#0b2418]"
        >
          Request Valuation
        </Link>
      </div>
    </nav>
  );
}