"use client";
import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    setTimeout(() => {
      setStatus("Message sent successfully!");
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5 max-w-xl mx-auto">
      <input
        className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600"
        placeholder="Your Name"
        required
      />

      <input
        className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600"
        placeholder="Email"
        type="email"
        required
      />

      <textarea
        className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600"
        placeholder="Your Message"
        rows="5"
        required
      ></textarea>

      <button className="w-full p-4 bg-blue-600 text-white rounded-2xl text-lg font-semibold hover:bg-blue-700 transition">
        Send Message
      </button>

      {status && <p className="text-green-600 text-center">{status}</p>}
    </form>
  );
}
