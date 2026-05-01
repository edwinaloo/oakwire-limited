export default function WhatsAppButton() {
  const phoneNumber = "254722745287";

  const message =
    "Hello Oakwire Limited, I would like to enquire about land or property valuation services.";

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 rounded-full bg-[#25D366] px-5 py-4 font-semibold text-white shadow-lg transition hover:scale-105"
    >
      WhatsApp
    </a>
  );
}