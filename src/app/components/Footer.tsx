"use client";

import { useState } from "react";

export default function Footer() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // You can connect this to an API or email service
    console.log("Form submitted:", form);
    alert("Message Sent!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <footer className="bg-gray-100 border-t border-gray-300 text-primary">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* About Us */}
        <div className="md:border-r md:pr-6">
          <h3 className="text-xl font-semibold mb-4">About Us</h3>
          <p className="text-sm leading-relaxed text-gray-600">
            We are a passionate team dedicated to delivering quality and innovation.
            Our mission is to create meaningful digital experiences that connect
            people and solve real-world problems through technology.
          </p>
        </div>

        {/* Send Your Message */}
        <div className="md:border-r md:px-6">
          <h3 className="text-xl font-semibold mb-4">Send Your Message</h3>
          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              className="px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
              className="px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={4}
              value={form.message}
              onChange={handleChange}
              required
              className="px-4 py-2 border rounded resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-primary text-white px-4 py-2 rounded hover:bg-hover transition"
            >
              Send
            </button>
          </form>
        </div>

        {/* Contact Us */}
        <div className="md:pl-6">
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <ul className="text-sm space-y-3 text-gray-700">
            <li>
              <span className="font-medium">Name:</span> AlliStorLabz
            </li>
            <li>
              <span className="font-medium">Phone:</span> +91 98765 43210
            </li>
            <li>
              <span className="font-medium">Email:</span> support@yourbrand.com
            </li>
            <li>
              <span className="font-medium">Address:</span> Sector 21, New Delhi, India
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 py-6 border-t border-gray-200">
        © {new Date().getFullYear()} <span className="font-semibold">AllistorLabz</span>. All rights reserved.
      </div>
    </footer>
  );
}
