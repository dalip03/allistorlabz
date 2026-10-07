"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Mail, MapPin, Phone, Send } from "lucide-react";

const contacts = [
  { icon: Phone, label: "Phone", value: "+91 98765 43210" },
  { icon: Mail, label: "Email", value: "support@yourbrand.com" },
  { icon: MapPin, label: "Address", value: "Sector 21, New Delhi, India" },
];

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
];

const inputClass =
  "w-full rounded-xl bg-white/5 px-4 py-3 text-sm text-white placeholder:text-gray-500 ring-1 ring-white/10 transition focus:outline-none focus:ring-2 focus:ring-primary";

export default function Footer() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // You can connect this to an API or email service
    console.log("Form submitted:", form);
    setSent(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <footer id="footer" className="relative overflow-hidden bg-gray-950 text-white">
      <div className="pointer-events-none absolute -top-40 right-0 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* About Us */}
        <div className="lg:col-span-4">
          <Image
            src="/Labz/logo.jpg"
            alt="AlliStorLabz"
            width={110}
            height={72}
            className="rounded-lg"
          />
          <p className="mt-6 text-sm leading-relaxed text-gray-400">
            AlliStorLabz brings you quality supplements made to support your
            fitness goals and everyday wellness. Quality you can trust,
            results you can feel.
          </p>

          <h4 className="mt-8 text-sm font-semibold uppercase tracking-widest text-gray-300">
            Quick Links
          </h4>
          <ul className="mt-4 flex gap-6 text-sm">
            {quickLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-gray-400 transition hover:text-primary">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Us */}
        <div className="lg:col-span-3">
          <h3 className="text-lg font-bold">Contact Us</h3>
          <ul className="mt-6 space-y-5">
            {contacts.map(({ icon: Icon, label, value }) => (
              <li key={label} className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  <Icon className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-wider text-gray-500">{label}</p>
                  <p className="text-sm text-gray-200">{value}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Send Your Message */}
        <div className="lg:col-span-5 rounded-3xl bg-white/[0.03] p-6 sm:p-8 ring-1 ring-white/10">
          <h3 className="text-lg font-bold">Send Your Message</h3>
          <p className="mt-1 text-sm text-gray-400">We usually reply within a day.</p>
          <form onSubmit={handleSubmit} className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              className={inputClass}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
              className={inputClass}
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={4}
              value={form.message}
              onChange={handleChange}
              required
              className={`${inputClass} resize-none sm:col-span-2`}
            />
            <div className="sm:col-span-2 flex flex-wrap items-center gap-4">
              <button
                type="submit"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/30 transition hover:bg-hover"
              >
                Send Message
                <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
              {sent && (
                <span className="inline-flex items-center gap-2 text-sm text-green-400">
                  <CheckCircle2 className="h-4 w-4" />
                  Message sent!
                </span>
              )}
            </div>
          </form>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-gray-300">AllistorLabz</span>. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
