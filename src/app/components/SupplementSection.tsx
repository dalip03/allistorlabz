"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Bone, Scale, Smile, Tag, Zap } from "lucide-react";

const features = [
  {
    title: "Increased Energy",
    desc: "Power through workouts and busy days with steady, lasting energy.",
    icon: Zap,
  },
  {
    title: "Bone Builder",
    desc: "Key nutrients that help support strong bones and joints.",
    icon: Bone,
  },
  {
    title: "Weight Loss",
    desc: "Helps you stay on track with your goals alongside diet and exercise.",
    icon: Scale,
  },
  {
    title: "Stress Release",
    desc: "Support your body's recovery so you feel balanced and ready.",
    icon: Smile,
  },
];

export default function SupplementSection() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-white to-red-50/60 py-20 sm:py-24 px-4">
      <div className="pointer-events-none absolute top-1/3 -left-40 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-14">
        {/* Left Side - Image */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-[2rem] bg-primary/15" />
          <div className="relative aspect-square overflow-hidden rounded-[2rem] bg-white shadow-2xl ring-1 ring-gray-100">
            <Image
              src="/Labz/wheyJacked.jpg"
              alt="Whey Jacked Protein"
              fill
              sizes="(max-width: 1024px) 90vw, 448px"
              className="object-contain p-6"
            />
          </div>
          {/* Discount badge */}
          <motion.div
            initial={{ scale: 0, rotate: -20 }}
            whileInView={{ scale: 1, rotate: -12 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, delay: 0.5 }}
            className="absolute -top-5 -right-3 sm:-right-6 flex h-24 w-24 flex-col items-center justify-center rounded-full bg-primary text-white shadow-xl shadow-primary/40 ring-4 ring-white"
          >
            <span className="text-2xl font-extrabold leading-none">10%</span>
            <span className="text-xs font-semibold uppercase tracking-wider">Off</span>
          </motion.div>
        </motion.div>

        {/* Right Side - Content */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="inline-block rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
            Our Best Supplement
          </span>
          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight text-gray-900">
            Your Dream Body Is Just a{" "}
            <span className="text-primary">Click Away</span>
          </h2>

          {/* Features Grid */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map(({ title, desc, icon: Icon }) => (
              <div
                key={title}
                className="group flex gap-4 rounded-2xl bg-white p-5 ring-1 ring-gray-100 transition hover:shadow-lg hover:shadow-primary/10 hover:ring-primary/20"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-white">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <h4 className="font-bold text-gray-900">{title}</h4>
                  <p className="mt-1 text-sm leading-relaxed text-gray-500">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Offer */}
          <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-2xl border-2 border-dashed border-primary/30 bg-white p-5">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Tag className="h-5 w-5" />
              </span>
              <p className="text-sm sm:text-base text-gray-700">
                <span className="font-bold text-gray-900">Black Friday Offer this month:</span>{" "}
                <span className="font-bold text-primary">10% Off</span> on{" "}
                <span className="font-semibold text-primary">Whey Protein</span>
              </p>
            </div>
            <Link
              href="/products"
              className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-hover"
            >
              Shop Now
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
