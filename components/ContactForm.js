"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "Land Valuation",
    location: "",
    message: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setError("");
    setSuccess(false);

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.phone || !formData.message) {
      setError("Please fill in your name, phone number, and message.");
      return;
    }

    const text = `Hello Oakwire Limited,

I would like to make an enquiry.

Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email || "Not provided"}
Service Needed: ${formData.service}
Property Location: ${formData.location || "Not provided"}

Message:
${formData.message}`;

    const whatsappUrl = `https://wa.me/254722745287?text=${encodeURIComponent(
      text
    )}`;

    setSuccess(true);
    window.open(whatsappUrl, "_blank");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl bg-white p-6 shadow-sm md:p-8"
    >
      <div className="grid gap-5">
        {error && (
          <div className="rounded-xl bg-red-50 p-4 text-sm font-medium text-red-700">
            {error}
          </div>
        )}

        {success && (
          <div className="rounded-xl bg-green-50 p-4 text-sm font-medium text-green-700">
            WhatsApp is opening with your enquiry message.
          </div>
        )}

        <input
          name="name"
          type="text"
          placeholder="Full Name *"
          value={formData.name}
          onChange={handleChange}
          className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[#123524]"
        />

        <input
          name="phone"
          type="tel"
          placeholder="Phone Number *"
          value={formData.phone}
          onChange={handleChange}
          className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[#123524]"
        />

        <input
          name="email"
          type="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[#123524]"
        />

        <select
          name="service"
          value={formData.service}
          onChange={handleChange}
          className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[#123524]"
        >
          <option>Land Valuation</option>
          <option>Property Valuation</option>
          <option>Estate Agency</option>
          <option>Property Management</option>
          <option>Project Management</option>
          <option>Real Estate Advisory</option>
          <option>General Enquiry</option>
        </select>

        <input
          name="location"
          type="text"
          placeholder="Property Location e.g. Kilimani, Nairobi"
          value={formData.location}
          onChange={handleChange}
          className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[#123524]"
        />

        <textarea
          name="message"
          rows="5"
          placeholder="Tell us what you need help with... *"
          value={formData.message}
          onChange={handleChange}
          className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[#123524]"
        ></textarea>

        <button
          type="submit"
          className="rounded-full bg-[#123524] px-8 py-4 font-semibold text-white transition hover:bg-[#0b2418]"
        >
          Send via WhatsApp
        </button>

        <a
          href="https://wa.me/254722745287"
          target="_blank"
          rel="noopener noreferrer"
          className="text-center font-semibold text-[#123524]"
        >
          Chat with Oakwire Limited on WhatsApp
        </a>
      </div>
    </form>
  );
}