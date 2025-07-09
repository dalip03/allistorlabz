"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function SupplimentWorks() {
  return (
    <section className="relative w-full py-20 px-4 lg:px-24 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/bg/vitamins.jpg"
          alt="Supplement Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="opacity-60"
        />
        {/* Green transparent overlay */}
        <div className="absolute inset-0 bg-primary opacity-80 mix-blend-multiply"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left - Image */}
        <motion.div
          initial={{ x: -40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.4 }}
          className="flex-shrink-0"
        >
          <Image
            src="/Labz/massGainer.jpg"
            alt="How Supplement Works"
            width={400}
            height={300}
            className="object-contain rounded-lg"
          />
        </motion.div>

        {/* Right - Text */}
        <motion.div
          initial={{ x: 40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true, amount: 0.4 }}
          className="text-white max-w-xl"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            How Our Supplement Works:
          </h2>
          <p className="text-sm md:text-base mb-4 leading-relaxed text-white/90">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form humour the and randomised words which don&apos;t look even slightly believable. If you are is going to use a passage of Lorem Ipsum.
          </p>
          <p className="text-sm md:text-base mb-6 leading-relaxed text-white/90">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form humour the and randomised words which don&apos;t look even slightly believable. If you are is going to use a passage of Lorem Ipsum.
          </p>
          <button className="bg-gray-200 text-gray-600 font-semibold px-6 py-2 rounded shadow hover:bg-gray-100 transition-all">
            Discover More &gt;
          </button>
        </motion.div>
      </div>
    </section>
  );
}
