"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    title: "Choose Your Goal",
    desc: "Pick the supplement that matches what you want, whether that is muscle gain, energy or overall wellness.",
  },
  {
    title: "Mix & Consume",
    desc: "Follow the serving guide on the pack. Just mix with water or milk and you are ready to go.",
  },
  {
    title: "Stay Consistent",
    desc: "Pair it with regular training and a balanced diet, and let consistency do the rest.",
  },
];

export default function SupplimentWorks() {
  return (
    <section className="relative w-full overflow-hidden py-20 sm:py-28 px-4">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/bg/vitamins.jpg"
          alt=""
          fill
          sizes="100vw"
          quality={80}
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950/95 via-[#5c0f10]/90 to-primary/85" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-14">
        {/* Left - Image */}
        <motion.div
          initial={{ x: -40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.4 }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="absolute -inset-4 rounded-[2.5rem] border border-white/15" />
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-white p-6 shadow-2xl">
            <div className="relative h-full w-full">
              <Image
                src="/Labz/massGainer.jpg"
                alt="How Supplement Works"
                fill
                sizes="(max-width: 1024px) 90vw, 448px"
                className="object-contain"
              />
            </div>
          </div>
        </motion.div>

        {/* Right - Text */}
        <motion.div
          initial={{ x: 40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true, amount: 0.4 }}
          className="text-white"
        >
          <span className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest ring-1 ring-white/20 backdrop-blur">
            Simple Process
          </span>
          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight">
            How Our Supplement Works
          </h2>

          <ol className="mt-10 space-y-6">
            {steps.map((step, i) => (
              <motion.li
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }}
                className="flex gap-5"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-lg font-extrabold text-primary shadow-lg">
                  {i + 1}
                </span>
                <div>
                  <h3 className="text-lg font-bold">{step.title}</h3>
                  <p className="mt-1 text-sm sm:text-base leading-relaxed text-white/75">
                    {step.desc}
                  </p>
                </div>
              </motion.li>
            ))}
          </ol>

          <Link
            href="/products"
            className="group mt-10 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 font-semibold text-primary shadow-lg transition hover:bg-gray-100"
          >
            Discover More
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
