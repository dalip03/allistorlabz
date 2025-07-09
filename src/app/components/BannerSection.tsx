"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function BannerSection() {
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  const leftControls = useAnimation();
  const rightControls = useAnimation();

  // Check if each element is in view
  const leftInView = useInView(leftRef, { once: true, margin: "-100px" });
  const rightInView = useInView(rightRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (leftInView) {
      leftControls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
      });
    }
    if (rightInView) {
      rightControls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut", delay: 0.2 },
      });
    }
  }, [leftInView, rightInView, leftControls, rightControls]);

  return (
    <section className="w-screen bg-primary text-white overflow-hidden relative py-12 sm:py-20 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left Image */}
        <motion.div
          ref={leftRef}
          initial={{ opacity: 0, y: 50 }}
          animate={leftControls}
          className="relative w-full md:w-1/2 flex justify-center"
        >
          <div className="relative w-[200px] sm:w-[250px] md:w-[300px] -mt-16">
            <Image
              src="/Labz/Whey.jpg"
              alt="Protein"
              width={300}
              height={300}
              className="object-contain"
            />
          </div>
        </motion.div>

        {/* Right Content */}
        <motion.div
          ref={rightRef}
          initial={{ opacity: 0, y: 50 }}
          animate={rightControls}
          className="w-full md:w-1/2 text-center md:text-left"
        >
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
        </motion.div>
      </div>
    </section>
  );
}
