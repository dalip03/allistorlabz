"use client";

import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
];

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => pathname === href;

  // Scroll to footer function
  const scrollToFooter = () => {
    const footer = document.getElementById("footer");
    if (footer) {
      footer.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false); // close mobile menu if open
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/80 backdrop-blur-lg shadow-[0_4px_30px_rgba(0,0,0,0.05)] border-b border-gray-100"
            : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image src="/Labz/logo.jpg" alt="AlliStorLabz" width={70} height={46} priority className="rounded-lg" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-2">
            <div className="flex items-center gap-1 rounded-full bg-gray-50 p-1 ring-1 ring-gray-100">
              {navLinks.map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  className={`relative px-5 py-2 text-sm font-medium rounded-full transition-colors ${
                    isActive(href) ? "text-white" : "text-gray-600 hover:text-primary"
                  }`}
                >
                  {isActive(href) && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-primary shadow-md shadow-primary/30"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative">{label}</span>
                </Link>
              ))}
            </div>
            <button
              onClick={scrollToFooter}
              className="group ml-4 inline-flex items-center gap-2 rounded-full bg-gray-900 px-6 py-2.5 text-sm font-medium text-white transition hover:bg-primary"
            >
              Contact Us
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex h-11 w-11 items-center justify-center rounded-full bg-gray-50 text-gray-700 ring-1 ring-gray-100"
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm md:hidden"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 right-0 w-72 h-full bg-white shadow-2xl z-50 p-6 flex flex-col md:hidden"
            >
              <div className="flex items-center justify-between mb-10">
                <Image src="/Labz/logo.jpg" alt="AlliStorLabz" width={70} height={40} />
                <button
                  onClick={() => setIsOpen(false)}
                  aria-label="Close menu"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-50 ring-1 ring-gray-100"
                >
                  <X size={20} />
                </button>
              </div>
              <nav className="flex flex-col gap-2">
                {navLinks.map(({ label, href }) => (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setIsOpen(false)}
                    className={`rounded-xl px-4 py-3 text-base font-medium transition ${
                      isActive(href)
                        ? "bg-primary/10 text-primary"
                        : "text-gray-800 hover:bg-gray-50"
                    }`}
                  >
                    {label}
                  </Link>
                ))}
              </nav>
              <button
                onClick={scrollToFooter}
                className="mt-auto inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 font-medium text-white shadow-lg shadow-primary/30 transition hover:bg-hover"
              >
                Contact Us
                <ArrowRight className="h-4 w-4" />
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
