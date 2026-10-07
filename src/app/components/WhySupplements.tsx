"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const features = [
  {
    title: "Calorie Build Up",
    icon: "/icons/features-icon-1.png",
    desc: "Quality calories and macros to help you hit your daily intake goals with ease.",
  },
  {
    title: "Fit The Body",
    icon: "/icons/features-icon-2.png",
    desc: "Supports lean muscle when paired with regular training and a balanced diet.",
  },
  {
    title: "Energy Grow Up",
    icon: "/icons/features-icon-3.png",
    desc: "Fuel your workouts and stay active and focused through the day.",
  },
  {
    title: "Regular Routine",
    icon: "/icons/features-icon-4.png",
    desc: "Easy to mix and easy to stick with, built to fit into your daily routine.",
  },
];

export default function WhySupplements() {
  return (
    <section className="py-20 sm:py-24 px-4 bg-white text-gray-800">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
            Four Amazing
          </span>
          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900">
            Supplements <span className="text-primary">In One</span>
          </h2>
          <p className="mt-4 text-gray-500">
            Everything your body needs to train harder, recover better and
            stay consistent.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.12, ease: "easeOut" }}
              className="group relative overflow-hidden rounded-3xl bg-gray-50 p-8 ring-1 ring-gray-100 transition-all duration-300 hover:-translate-y-2 hover:bg-white hover:shadow-2xl hover:shadow-primary/10"
            >
              <span className="absolute top-6 right-6 text-5xl font-extrabold text-gray-200/80 transition-colors group-hover:text-primary/15">
                0{index + 1}
              </span>
              <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl bg-white shadow-sm ring-1 ring-gray-100 transition group-hover:ring-primary/20">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={52}
                  height={52}
                  className="object-contain"
                />
              </div>
              <h3 className="mt-6 text-lg font-bold text-gray-900">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-500">{item.desc}</p>
              <span className="absolute bottom-0 left-0 h-1 w-0 bg-primary transition-all duration-500 group-hover:w-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
