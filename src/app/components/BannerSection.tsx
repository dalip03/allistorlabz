"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function BannerSection() {
  return (
    <section className="w-screen bg-primary text-white overflow-hidden relative py-12 sm:py-20 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left Image */}
        <div className="relative w-full md:w-1/2 flex justify-center">
          <div className="relative w-[200px] sm:w-[250px] md:w-[300px] -mt-16">
            <Image
              src="/Labz/Whey.jpg"
              alt="Protein"
              width={300}
              height={300}
              className="object-contain"
            />
          </div>
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <p className="text-lg italic font-semibold text-white mb-2">
            Get Your Natural
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
            Supplement with Most Powerful all in one Formula
          </h2>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="inline-block"
          >
            <Link href="/products">
              <button className="bg-white text-primary font-semibold px-6 py-3 rounded-md transition hover:bg-gray-100">
                View Products
              </button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
