"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const points = ["All-in-one formula", "Easy to mix", "Made for daily use"];

export default function BannerSection() {
  return (
    <section className="w-full bg-white px-4 sm:px-6 py-12 sm:py-16">
      <div className="relative max-w-7xl mx-auto overflow-hidden rounded-[2rem] bg-gradient-to-br from-primary to-[#9e1b1c] text-white shadow-2xl shadow-primary/25">
        {/* Decorative shapes */}
        <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-white/10" />
        <div className="pointer-events-none absolute -bottom-32 right-1/3 h-80 w-80 rounded-full border-[40px] border-white/5" />
        <div
          className="pointer-events-none absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle, #fff 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        <div className="relative grid grid-cols-1 md:grid-cols-2 items-center gap-10 px-6 py-12 sm:px-12 sm:py-16">
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex justify-center"
          >
            <div className="relative flex h-[240px] w-[240px] sm:h-[320px] sm:w-[320px] items-center justify-center rounded-full bg-white shadow-2xl ring-8 ring-white/20">
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative h-[70%] w-[70%]"
              >
                <Image
                  src="/Labz/Whey.jpg"
                  alt="Whey Protein"
                  fill
                  sizes="(max-width: 640px) 170px, 225px"
                  className="object-contain"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="text-center md:text-left"
          >
            <span className="inline-block rounded-full bg-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest backdrop-blur">
              Get Your Natural
            </span>

            <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight">
              Supplement with the Most Powerful All-in-One Formula
            </h2>

            <ul className="mt-6 flex flex-col sm:flex-row sm:flex-wrap gap-3 items-center md:items-start">
              {points.map((p) => (
                <li
                  key={p}
                  className="inline-flex items-center gap-2 text-sm text-white/90"
                >
                  <CheckCircle2 className="h-4 w-4" />
                  {p}
                </li>
              ))}
            </ul>

            <Link
              href="/products"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 font-semibold text-primary shadow-lg transition hover:bg-gray-100"
            >
              View Products
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
