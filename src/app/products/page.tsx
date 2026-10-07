"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import ProductModal from "../components/ProductModal";

const categories = [
  "All",
  "Protein",
  "Diet & Life Style",
  "Nutrition",
  "Vitamins",
];

const products = [
  {
    id: 12,
    name: "Premium Whey",
    category: "Protein",
    description:
      "Premium Whey delivers high-quality protein to support muscle recovery and lean muscle growth after every workout.",
    image: "/Labz/PremiumWhey.png",
    images: ["/Labz/PremiumWhey.png"],
  },
  {
    id: 13,
    name: "Jacked Whey",
    category: "Protein",
    description:
      "Jacked Whey is a protein blend built to fuel your training, help you recover faster and build strength.",
    image: "/Labz/JackedWhey.png",
    images: ["/Labz/JackedWhey.png"],
  },
  {
    id: 1,
    name: "ISO Force",
    category: "Protein",
    description:
      "Caratine Max helps with fat metabolism and boosts energy levels during workouts.",
    image: "/Labz/ISO.jpg",
    images: ["/Labz/ISO.jpg", "/Labz/ISO.jpg", "/Labz/ISO.jpg"],
  },
  {
    id: 2,
    name: "caratine Max",
    category: "Diet & Life Style",
    description:
      "Caratine Max helps with fat metabolism and boosts energy levels during workouts.",
    image: "/Labz/caratine.jpg",
    images: ["/Labz/ISO.jpg", "/Labz/ISO.jpg", "/Labz/ISO.jpg"],
  },
  {
    id: 3,
    name: "massGainer",
    category: "Nutrition",
    description:
      "Caratine Max helps with fat metabolism and boosts energy levels during workouts.",
    image: "/Labz/massGainer.jpg",
    images: ["/Labz/ISO.jpg", "/Labz/ISO.jpg", "/Labz/ISO.jpg"],
  },
  {
    id: 4,
    name: "LabzPenta Alpha",
    category: "Vitamins",
    description:
      "Caratine Max helps with fat metabolism and boosts energy levels during workouts.",
    image: "/Labz/Penta.jpg",
    images: ["/Labz/ISO.jpg", "/Labz/ISO.jpg", "/Labz/ISO.jpg"],
  },
  {
    id: 5,
    name: "Whey",
    category: "Protein",
    description:
      "Caratine Max helps with fat metabolism and boosts energy levels during workouts.",
    image: "/Labz/Whey.jpg",
    images: ["/Labz/ISO.jpg", "/Labz/ISO.jpg", "/Labz/ISO.jpg"],
  },
  {
    id: 6,
    name: "wheyJacked",
    category: "Diet & Life Style",
    description:
      "Caratine Max helps with fat metabolism and boosts energy levels during workouts.",
    image: "/Labz/wheyJacked.jpg",
    images: ["/Labz/ISO.jpg", "/Labz/ISO.jpg", "/Labz/ISO.jpg"],
  },
  {
    id: 7,
    name: "ISOPRO",
    category: "Protein",
    description:
      "Caratine Max helps with fat metabolism and boosts energy levels during workouts.",
    image: "/Labz/ISOPRO.jpg",
    images: ["/Labz/ISO.jpg", "/Labz/ISO.jpg", "/Labz/ISO.jpg"],
  },
  {
    id: 8,
    name: "Ritual",
    category: "Protein",
    description:
      "Caratine Max helps with fat metabolism and boosts energy levels during workouts.",
    image: "/Labz/Ritual.jpg",
    images: ["/Labz/ISO.jpg", "/Labz/ISO.jpg", "/Labz/ISO.jpg"],
  },
  {
    id: 9,
    name: "Amino",
    category: "Protein",
    description:
      "Caratine Max helps with fat metabolism and boosts energy levels during workouts.",
    image: "/Labz/Amino.jpg",
    images: ["/Labz/ISO.jpg", "/Labz/ISO.jpg", "/Labz/ISO.jpg"],
  },
  {
    id: 10,
    name: "creaator",
    category: "Protein",
    description:
      "Caratine Max helps with fat metabolism and boosts energy levels during workouts.",
    image: "/Labz/creaator.jpg",
    images: ["/Labz/ISO.jpg", "/Labz/ISO.jpg", "/Labz/ISO.jpg"],
  },
  {
    id: 11,
    name: "Dungeon",
    category: "Protein",
    description:
      "Caratine Max helps with fat metabolism and boosts energy levels during workouts.",
    image: "/Labz/Dungeon.jpg",
    images: ["/Labz/ISO.jpg", "/Labz/ISO.jpg", "/Labz/ISO.jpg"],
  },
];

export default function ProductGallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState<{
    name: string;
    category: string;
    description: string;
    images: string[];
  } | null>(null);

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter(
          (p) => p.category.toLowerCase() === activeCategory.toLowerCase()
        );

  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-white to-red-50 pt-32 pb-14 px-4">
        <div className="pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle, var(--primary) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative max-w-3xl mx-auto text-center"
        >
          <span className="inline-block rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
            Our Best
          </span>
          <h1 className="mt-5 text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
            Product <span className="text-primary">Gallery</span>
          </h1>
          <p className="mt-4 text-gray-500">
            Explore our full range of supplements and find the right fit for
            your goals.
          </p>
        </motion.div>
      </section>

      <section className="px-4 sm:px-8 lg:px-16 pb-24 max-w-7xl mx-auto">
        {/* Category Filters */}
        <div className="sticky top-24 z-30 -mt-7 mb-12 flex justify-center">
          <div className="max-w-full overflow-x-auto rounded-full bg-white/90 p-1.5 shadow-lg shadow-gray-200/60 ring-1 ring-gray-100 backdrop-blur select-none [scrollbar-width:none]">
            <div className="inline-flex gap-1 min-w-max">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`relative whitespace-nowrap rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                    activeCategory === cat
                      ? "text-white"
                      : "text-gray-600 hover:text-primary"
                  }`}
                >
                  {activeCategory === cat && (
                    <motion.span
                      layoutId="category-pill"
                      className="absolute inset-0 rounded-full bg-primary shadow-md shadow-primary/30"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative">{cat}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <p className="mb-6 text-sm text-gray-500">
          Showing{" "}
          <span className="font-semibold text-gray-900">{filteredProducts.length}</span>{" "}
          {filteredProducts.length === 1 ? "product" : "products"}
        </p>

        {/* Product Grid with Animation */}
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {filteredProducts.map(
              ({ id, name, category, image, images, description }, i) => (
                <motion.button
                  type="button"
                  key={id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.4, delay: (i % 3) * 0.08 }}
                  className="group text-left rounded-3xl bg-white ring-1 ring-gray-100 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-primary/10 hover:ring-primary/20 flex flex-col overflow-hidden"
                  onClick={() =>
                    setSelectedProduct({
                      name,
                      category,
                      description,
                      images,
                    })
                  }
                >
                  <div className="relative w-full aspect-[4/3] overflow-hidden bg-gradient-to-br from-gray-50 to-red-50/40">
                    <span className="absolute top-4 left-4 z-10 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-primary shadow-sm backdrop-blur">
                      {category}
                    </span>
                    <Image
                      src={image}
                      alt={name}
                      fill
                      className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw,
                         (max-width: 1024px) 50vw,
                         33vw"
                    />
                  </div>

                  <div className="p-5 flex items-center justify-between gap-4">
                    <h3 className="font-bold text-gray-900 capitalize">{name}</h3>
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-50 text-gray-500 ring-1 ring-gray-100 transition group-hover:bg-primary group-hover:text-white group-hover:ring-primary">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                </motion.button>
              )
            )}
          </motion.div>
        </AnimatePresence>
      </section>

      <ProductModal
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
        product={selectedProduct}
      />
    </div>
  );
}
