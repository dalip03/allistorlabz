"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, FlaskConical, ShieldCheck, Star, Zap } from "lucide-react";

const slides = [
  {
    tag: "New Arrival",
    title: "Premium Whey for",
    highlight: "Peak Performance",
    image: "/Labz/PremiumWhey.png",
  },
  {
    tag: "Bestseller",
    title: "Get Jacked with",
    highlight: "Every Scoop",
    image: "/Labz/JackedWhey.png",
  },
  {
    tag: "Mass Gainer",
    title: "Dealing with",
    highlight: "Supplements",
    image: "/Labz/massGainer.jpg",
  },
  {
    tag: "Weight Gainer",
    title: "Power Up with",
    highlight: "Natural Boosters",
    image: "/Labz/WeightGainer.jpg",
  },
  {
    tag: "Daily Wellness",
    title: "Wellness That",
    highlight: "Works for You",
    image: "/Labz/Penta.jpg",
  },
];

const stats = [
  { value: "50K+", label: "Happy Customers" },
  { value: "100%", label: "Lab Tested" },
  { value: "4.9", label: "Avg. Rating", icon: true },
];

const SLIDE_DURATION = 4500;

export default function HeroSection() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = setTimeout(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, SLIDE_DURATION);
    return () => clearTimeout(timer);
  }, [index, paused]);

  const slide = slides[index];

  return (
    <section
      className="relative w-full overflow-hidden pt-20 bg-gradient-to-br from-white via-white to-red-50"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Decorative background */}
      <div className="pointer-events-none absolute -top-32 -right-32 h-[28rem] w-[28rem] rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-32 h-[24rem] w-[24rem] rounded-full bg-primary/5 blur-3xl" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle, var(--primary) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 items-center">
        {/* Left: Text */}
        <div className="order-2 md:order-1 text-center md:text-left md:pl-10">
          <AnimatePresence mode="wait">
            <motion.span
              key={`tag-${index}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              {slide.tag}
            </motion.span>
          </AnimatePresence>

          <div className="mt-6 min-h-[7.5rem] sm:min-h-[9rem] lg:min-h-[10.5rem]">
            <AnimatePresence mode="wait">
              <motion.h1
                key={`title-${index}`}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -24 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-gray-900"
              >
                {slide.title}{" "}
                <span className="relative inline-block text-primary">
                  {slide.highlight}
                  <svg
                    className="absolute -bottom-2 left-0 w-full"
                    viewBox="0 0 200 12"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                  >
                    <motion.path
                      d="M2 9 Q 100 1 198 7"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                      opacity={0.35}
                    />
                  </svg>
                </span>
              </motion.h1>
            </AnimatePresence>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-6 text-gray-600 text-base sm:text-lg leading-relaxed max-w-md mx-auto md:mx-0"
          >
            Scientifically backed supplements designed to support your energy,
            immunity, and overall wellness. Quality you can trust, results you
            can feel.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <Link
              href="/products"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 font-semibold text-white shadow-lg shadow-primary/30 transition hover:bg-hover hover:shadow-xl hover:shadow-primary/40"
            >
              Shop Now
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center justify-center rounded-full border-2 border-primary/20 px-7 py-3.5 font-semibold text-primary transition hover:border-primary hover:bg-primary/5"
            >
              Product Details
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-12 flex justify-center md:justify-start divide-x divide-gray-200"
          >
            {stats.map((s) => (
              <div key={s.label} className="px-5 first:pl-0 last:pr-0">
                <p className="flex items-center justify-center md:justify-start gap-1 text-2xl font-bold text-gray-900">
                  {s.value}
                  {s.icon && <Star className="h-4 w-4 fill-primary text-primary" />}
                </p>
                <p className="text-xs text-gray-500 mt-1">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: Product showcase */}
        <div className="order-1 md:order-2 relative flex flex-col items-center">
          <div className="relative w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] lg:w-[460px] lg:h-[460px]">
            {/* Rotating dashed ring */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-dashed border-primary/25"
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            />
            {/* Glow + disc */}
            <div className="absolute inset-6 rounded-full bg-gradient-to-br from-primary/25 to-primary/5 blur-2xl" />
            <div className="absolute inset-8 rounded-full bg-white shadow-2xl shadow-primary/20 ring-1 ring-primary/10" />

            {/* Product image */}
            <AnimatePresence mode="wait">
              <motion.div
                key={slide.image}
                initial={{ opacity: 0, scale: 0.85, rotate: -6 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.9, rotate: 6 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="absolute inset-[18%]"
              >
                <motion.div
                  className="relative h-full w-full"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Image
                    src={slide.image}
                    alt={`${slide.title} ${slide.highlight}`}
                    fill
                    priority={index === 0}
                    sizes="(max-width: 640px) 180px, (max-width: 1024px) 260px, 300px"
                    className="object-contain drop-shadow-xl"
                  />
                </motion.div>
              </motion.div>
            </AnimatePresence>

            {/* Floating badges */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9 }}
              className="absolute top-10 -left-2 sm:left-0 flex items-center gap-2 rounded-2xl bg-white/90 backdrop-blur px-3 py-2 shadow-lg ring-1 ring-gray-100"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                <ShieldCheck className="h-4 w-4 text-primary" />
              </span>
              <span className="text-xs font-semibold text-gray-800 leading-tight">
                100% Authentic
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.1 }}
              className="absolute bottom-16 -right-2 sm:right-0 flex items-center gap-2 rounded-2xl bg-white/90 backdrop-blur px-3 py-2 shadow-lg ring-1 ring-gray-100"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                <FlaskConical className="h-4 w-4 text-primary" />
              </span>
              <span className="text-xs font-semibold text-gray-800 leading-tight">
                Lab Tested
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3 }}
              className="absolute -bottom-2 left-1/2 -translate-x-1/2 hidden sm:flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-white shadow-lg shadow-primary/30"
            >
              <Zap className="h-4 w-4 fill-white" />
              <span className="text-xs font-semibold">High Protein Formula</span>
            </motion.div>
          </div>

          {/* Slide indicators */}
          <div className="mt-10 flex items-center gap-2">
            {slides.map((s, i) => (
              <button
                key={s.image}
                onClick={() => setIndex(i)}
                aria-label={`Show slide ${i + 1}`}
                className={`relative h-2 overflow-hidden rounded-full transition-all duration-300 ${
                  i === index ? "w-10 bg-primary/20" : "w-2 bg-gray-300 hover:bg-gray-400"
                }`}
              >
                {i === index && (
                  <motion.span
                    key={`progress-${index}-${paused}`}
                    className="absolute inset-y-0 left-0 bg-primary rounded-full"
                    initial={{ width: paused ? "100%" : "0%" }}
                    animate={{ width: "100%" }}
                    transition={{
                      duration: paused ? 0 : SLIDE_DURATION / 1000,
                      ease: "linear",
                    }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
