import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-200 bg-[#f8f6f0]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-12">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-[#123524]">
          <Image
            src="/logo.png"
            alt="Oakwire Limited Logo"
            width={150}
            height={50}
            className="h-20 w-auto"
            priority
          />
        </Link>

        {/* Links */}
        <div className="hidden items-center gap-8 md:flex">
          <Link href="/" className="text-gray-700 hover:text-[#123524]">
            Home
          </Link>

          <Link href="/about" className="text-gray-700 hover:text-[#123524]">
            About
          </Link>

          {/* Services Dropdown */}
          <div className="group relative">
  <Link
    href="/#services"
    className="text-gray-700 hover:text-[#123524]"
  >
    Services
  </Link>

  <div className="invisible absolute left-0 top-8 w-64 rounded-2xl border border-gray-200 bg-white p-3 opacity-0 shadow-lg transition-all duration-200 group-hover:visible group-hover:opacity-100">
    
    <Link href="/valuation" className="block rounded-xl px-4 py-3 text-sm hover:bg-[#f8f6f0]">
      Land & Property Valuation
    </Link>

    <Link href="/estate-agency" className="block rounded-xl px-4 py-3 text-sm hover:bg-[#f8f6f0]">
      Estate Agency Services
    </Link>

    <Link href="/property-management" className="block rounded-xl px-4 py-3 text-sm hover:bg-[#f8f6f0]">
      Property Management
    </Link>

    <Link href="/project-management" className="block rounded-xl px-4 py-3 text-sm hover:bg-[#f8f6f0]">
      Project Management
    </Link>

    <Link href="/real-estate-advisory" className="block rounded-xl px-4 py-3 text-sm hover:bg-[#f8f6f0]">
      Real Estate Advisory
    </Link>
  </div>
</div>

          <Link href="/valuation" className="text-gray-700 hover:text-[#123524]">
            Valuation
          </Link>

          <Link href="/properties" className="text-gray-700 hover:text-[#123524]">
            Properties
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
          className="hidden rounded-full bg-[#123524] px-5 py-2 text-sm font-semibold text-white hover:bg-[#0b2418] md:block"
        >
          Request Valuation
        </Link>
      </div>
    </nav>
  );
}