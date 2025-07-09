"use client";

import Image from "next/image";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const features = [
  {
    title: "Increased Energy",
    desc: "There are many variations of passages of Lorem Ipsum that available, but the majority have suffered alteration in some form, by injected humour.",
  },
  {
    title: "Bone Builder",
    desc: "There are many variations of passages of Lorem Ipsum that available, but the majority have suffered alteration in some form, by injected humour.",
  },
  {
    title: "Weight Loss",
    desc: "There are many variations of passages of Lorem Ipsum that available, but the majority have suffered alteration in some form, by injected humour.",
  },
  {
    title: "Stress Release",
    desc: "There are many variations of passages of Lorem Ipsum that available, but the majority have suffered alteration in some form, by injected humour.",
  },
];

export default function SupplementSection() {
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  const leftControls = useAnimation();
  const rightControls = useAnimation();

  const leftInView = useInView(leftRef, { once: true, margin: "-100px" });
  const rightInView = useInView(rightRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (leftInView) {
      leftControls.start({ x: 0, opacity: 1, transition: { duration: 0.6 } });
    }
    if (rightInView) {
      rightControls.start({ x: 0, opacity: 1, transition: { duration: 0.6, delay: 0.2 } });
    }
  }, [leftInView, rightInView, leftControls, rightControls]);

  return (
    <section className="w-full bg-white py-16 px-4 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Side - Image */}
        <motion.div
          ref={leftRef}
          initial={{ x: -50, opacity: 0 }}
          animate={leftControls}
          className="flex-shrink-0"
        >
          <Image
            src="/Labz/wheyJacked.jpg"
            alt="Protein"
            width={500}
            height={500}
            className="object-contain"
          />
        </motion.div>

        {/* Right Side - Content */}
        <motion.div
          ref={rightRef}
          initial={{ x: 50, opacity: 0 }}
          animate={rightControls}
          className="flex-1"
        >
          <p className="text-green-600 italic font-semibold text-lg mb-2">Our Best</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Supplement</h2>
          <p className="text-green-600 italic font-semibold text-lg mb-1">You &apos;re Dream</p>
          <h3 className="text-xl md:text-2xl font-semibold mb-6">Body Is just Click away</h3>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            {features.map((feature, index) => (
              <div key={index} className="pl-4 border-l-4 border-green-500">
                <h4 className="font-bold text-lg mb-1 text-gray-800">{feature.title}</h4>
                <p className="text-sm text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>

          {/* Offer and Button */}
          <div className="border-t pt-6 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
            <p className="text-lg font-medium text-gray-800">
              <span className="font-bold">*** Black Friday Offer on This Month </span>
              <span className="text-green-600 font-bold">10% Off</span> on this{" "}
              <span className="text-green-600 font-semibold">Whey Protein</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
