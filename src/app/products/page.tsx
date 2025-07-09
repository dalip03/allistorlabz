"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const categories = [
  "All",
  "Protein",
  "Diet & Life Style",
  "Nutrition",
  "Vitamins",
];

const products = [
  { id: 1, name: "ISO Force", category: "Protein", image: "/Labz/ISO.jpg" },
  {
    id: 2,
    name: "caratine Max",
    category: "Diet & Life Style",
    image: "/Labz/caratine.jpg",
  },
  {
    id: 3,
    name: "massGainer",
    category: "Nutrition",
    image: "/Labz/massGainer.jpg",
  },
  {
    id: 4,
    name: "LabzPenta Alpha",
    category: "Vitamins",
    image: "/Labz/Penta.jpg",
  },
  { id: 5, name: "Whey", category: "Protein", image: "/Labz/Whey.jpg" },
  {
    id: 6,
    name: "wheyJacked",
    category: "Diet & Life Style",
    image: "/Labz/wheyJacked.jpg",
  },
  { id: 7, name: "ISOPRO", category: "Protein", image: "/Labz/ISOPRO.jpg" },
  { id: 8, name: "Ritual", category: "Protein", image: "/Labz/Ritual.jpg" },
  { id: 9, name: "Amino", category: "Protein", image: "/Labz/Amino.jpg" },
  {
    id: 10,
    name: "creaator",
    category: "Protein",
    image: "/Labz/creaator.jpg",
  },
  { id: 11, name: "Dungeon", category: "Protein", image: "/Labz/Dungeon.jpg" },
];

const containerVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      staggerChildren: 0.1,
      duration: 0.3,
    },
  },
  exit: { opacity: 0, scale: 0.95, transition: { duration: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

export default function ProductGallery() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter(
          (p) => p.category.toLowerCase() === activeCategory.toLowerCase()
        );

  return (
    <section className="py-26 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto ">
      {/* Header */}
      <div className="text-center mb-12">
        <p className="text-lg italic text-primary mb-2 ">Our best</p>

        <h2 className="text-3xl sm:text-4xl font-bold mb-2">Product Gallery</h2>
        <div className="w-16 h-1 mx-auto bg-primary rounded"></div>
      </div>

      {/* Category Filters */}
      <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-green-600 scrollbar-track-gray-100 mb-12 bg-white shadow rounded-md px-4 py-2 select-none">
        <div className="inline-flex space-x-6 min-w-max">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`whitespace-nowrap pb-2 transition-colors text-sm sm:text-base ${
                activeCategory === cat
                  ? "text-green-600 border-b-2 border-primary font-semibold"
                  : "text-gray-500 hover:text-hover"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Animated Product Grid */}
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={activeCategory}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProducts.map(({ id, name, category, image }) => (
            <motion.div
              key={id}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="bg-white rounded-md shadow-md hover:shadow-lg transition-shadow cursor-pointer flex flex-col"
              layout
            >
              <div className="relative w-full aspect-[4/3] rounded-t-md overflow-hidden border border-gray-200">
                <Image
                  src={image}
                  alt={name}
                  fill
                  style={{ objectFit: "contain" }}
                  placeholder="blur"
                  blurDataURL="/placeholder.png"
                  sizes="(max-width: 640px) 100vw,
                         (max-width: 1024px) 50vw,
                         33vw"
                />
              </div>

              <div className="p-4 text-center flex-grow flex flex-col justify-center">
                <h3 className="font-semibold text-gray-800 mb-1">{name}</h3>
                <p className="text-sm text-gray-500">{category}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
