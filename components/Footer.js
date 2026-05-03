export default function Footer() {
  return (
    <footer className="bg-[#123524] text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 md:px-12">
        
        <h2 className="text-xl font-bold">Oakwire Limited</h2>

        <p className="mt-4 max-w-md text-gray-300">
          Professional land and property valuation services in Kenya,
          with support in real estate advisory, estate agency, and property management.
        </p>

        <div className="mt-8 flex flex-col gap-2 text-sm text-gray-300">
          <p>Kenya</p>
          <p>Email: info@oakwire.co.ke</p>
          <p>Phone: +254 722 745 287</p>
        </div>

        <p className="mt-10 text-xs text-gray-400">
          © {new Date().getFullYear()} Oakwire Limited. All rights reserved.
        </p>
      </div>
    </footer>
  );
}