"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const headings = [
  "Dealing with Supplements",
  "Power Up with Natural Boosters",
  "Wellness That Works for You",
];

const images = [
  "/Labz/massGainer.jpg",
  "/Labz/WeightGainer.jpg",
  "/Labz/Penta.jpg",
];

export default function HeroSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % headings.length);
    }, 4000); // Change every 4 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-center ">
        {/* Left Text Section */}
        <div className="w-full md:w-1/2 text-center md:text-left  md:pl-20  ">
          <AnimatePresence mode="wait">
            <motion.h1
              key={headings[index]}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl font-bold text-primary mb-6"
            >
              {headings[index]}
            </motion.h1>
          </AnimatePresence>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-gray-600 mb-8 max-w-md mx-auto md:mx-0"
          >
            Explore our range of scientifically backed supplements designed to
            support your energy, immunity, and overall wellness. Quality you can
            trust, results you can feel.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Link href="/products">
              <button className="bg-primary text-white px-6 py-3 rounded-md hover:bg-hover transition">
                Product Details
              </button>
            </Link>
          </motion.div>
        </div>

        {/* Right Image Section */}
        <div className="w-full md:w-1/2 flex justify-center ">
          <AnimatePresence mode="wait">
            <motion.div
              key={images[index]}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.6 }}
              className="w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] relative"
            >
              <Image
                src={images[index]}
                alt="Supplement"
                fill
                className="object-contain"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
