"use client";

import Image from "next/image";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const features = [
  {
    title: "Calorie Build Up",
    icon: "/icons/features-icon-1.png",
  },
  {
    title: "Fit The Body",
    icon: "/icons/features-icon-2.png",
  },
  {
    title: "Energy Grow Up",
    icon: "/icons/features-icon-3.png",
  },
  {
    title: "Regular Routine",
    icon: "/icons/features-icon-4.png",
  },
];

export default function WhySupplements() {
  return (
    <section className="py-20 px-4 bg-white text-gray-800">
      <div className="max-w-7xl mx-auto text-center">
        {/* Subheading */}
        <p className="text-lg italic text-primary mb-2 ">Four Amazing</p>

        {/* Main Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold mb-10">Supplement In One</h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, index) => (
            <FeatureCard key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ item, index }: { item: typeof features[0]; index: number }) {
  const ref = useRef(null);
  const controls = useAnimation();
  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: index * 0.15, ease: "easeOut" },
      });
    }
  }, [inView, controls, index]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={controls}
      className="flex flex-col items-center text-center space-y-4 px-4"
    >
      <div className="w-20 h-20 rounded-full flex items-center justify-center">
        <Image
          src={item.icon}
          alt={item.title}
          width={70}
          height={70}
          className="object-contain"
        />
      </div>
      <h3 className="text-lg font-semibold">{item.title}</h3>
      <p className="text-sm text-gray-600">
        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
      </p>
    </motion.div>
  );
}
