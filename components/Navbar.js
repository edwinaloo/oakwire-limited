"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-200 bg-[#f8f6f0]/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 md:px-12">
        {/* Logo */}
        <Link href="/" onClick={closeMenu}>
          <Image
            src="/logo.png"
            alt="Oakwire Limited Logo"
            width={150}
            height={50}
            priority
            className="h-20 w-auto"
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden items-center gap-8 md:flex">
          <Link href="/" className="text-gray-700 hover:text-[#123524]">
            Home
          </Link>

          <Link href="/about" className="text-gray-700 hover:text-[#123524]">
            About
          </Link>

          <div className="group relative">
            <Link
              href="/#services"
              className="text-gray-700 hover:text-[#123524]"
            >
              Services
            </Link>

            <div className="invisible absolute left-0 top-8 w-64 rounded-2xl border border-gray-200 bg-white p-3 opacity-0 shadow-lg transition-all duration-200 group-hover:visible group-hover:opacity-100">
              <Link
                href="/valuation"
                className="block rounded-xl px-4 py-3 text-sm text-gray-700 hover:bg-[#f8f6f0] hover:text-[#123524]"
              >
                Land & Property Valuation
              </Link>

              <Link
                href="/estate-agency"
                className="block rounded-xl px-4 py-3 text-sm text-gray-700 hover:bg-[#f8f6f0] hover:text-[#123524]"
              >
                Estate Agency
              </Link>

              <Link
                href="/property-management"
                className="block rounded-xl px-4 py-3 text-sm text-gray-700 hover:bg-[#f8f6f0] hover:text-[#123524]"
              >
                Property Management
              </Link>

              <Link
                href="/property-purchasing"
                className="block rounded-xl px-4 py-3 text-sm text-gray-700 hover:bg-[#f8f6f0] hover:text-[#123524]"
              >
                Property Purchasing
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

        {/* Desktop CTA */}
        <Link
          href="/contact"
          className="hidden rounded-full bg-[#123524] px-5 py-2 text-sm font-semibold text-white hover:bg-[#0b2418] md:block"
        >
          Request Valuation
        </Link>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-xl border border-gray-300 px-4 py-2 text-sm font-semibold text-[#123524] md:hidden"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? "Close" : "Menu"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-gray-200 bg-[#f8f6f0] px-6 py-5 md:hidden">
          <div className="flex flex-col gap-4">
            <Link
              href="/"
              onClick={closeMenu}
              className="text-gray-700 hover:text-[#123524]"
            >
              Home
            </Link>

            <Link
              href="/about"
              onClick={closeMenu}
              className="text-gray-700 hover:text-[#123524]"
            >
              About
            </Link>

            <Link
              href="/#services"
              onClick={closeMenu}
              className="text-gray-700 hover:text-[#123524]"
            >
              Services
            </Link>

            <div className="ml-4 flex flex-col gap-3 border-l border-[#d6b36a] pl-4">
              <Link
                href="/valuation"
                onClick={closeMenu}
                className="text-sm text-gray-600 hover:text-[#123524]"
              >
                Land & Property Valuation
              </Link>

              <Link
                href="/estate-agency"
                onClick={closeMenu}
                className="text-sm text-gray-600 hover:text-[#123524]"
              >
                Estate Agency
              </Link>

              <Link
                href="/property-management"
                onClick={closeMenu}
                className="text-sm text-gray-600 hover:text-[#123524]"
              >
                Property Management
              </Link>

              <Link
                href="/property-purchasing"
                onClick={closeMenu}
                className="text-sm text-gray-600 hover:text-[#123524]"
              >
                Property Purchasing
              </Link>
            </div>

            <Link
              href="/properties"
              onClick={closeMenu}
              className="text-gray-700 hover:text-[#123524]"
            >
              Properties
            </Link>

            <Link
              href="/insights"
              onClick={closeMenu}
              className="text-gray-700 hover:text-[#123524]"
            >
              Insights
            </Link>

            <Link
              href="/contact"
              onClick={closeMenu}
              className="text-gray-700 hover:text-[#123524]"
            >
              Contact
            </Link>

            <Link
              href="/contact"
              onClick={closeMenu}
              className="mt-2 rounded-full bg-[#123524] px-5 py-3 text-center text-sm font-semibold text-white hover:bg-[#0b2418]"
            >
              Request Valuation
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}