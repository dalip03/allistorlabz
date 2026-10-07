"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { MessageCircle, ShieldCheck, FlaskConical, X } from "lucide-react";
import { Dialog, DialogPanel } from "@headlessui/react";

interface Product {
  name: string;
  category?: string;
  description: string;
  images: string[];
}

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product | null;
}

const ProductModal: React.FC<ProductModalProps> = ({ isOpen, onClose, product }) => {
  return (
    <AnimatePresence>
      {isOpen && product && (
        <Dialog static open={isOpen} onClose={onClose} className="relative z-[60]">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            aria-hidden="true"
          />
          <div className="fixed inset-0 flex items-center justify-center p-4">
            <DialogPanel className="w-full max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 40, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 40, scale: 0.97 }}
                transition={{ duration: 0.25 }}
                className="relative max-h-[90vh] overflow-y-auto scrollbar-hidden rounded-3xl bg-white shadow-2xl"
              >
                <ProductDetails key={product.name} product={product} onClose={onClose} />
              </motion.div>
            </DialogPanel>
          </div>
        </Dialog>
      )}
    </AnimatePresence>
  );
};

function ProductDetails({ product, onClose }: { product: Product; onClose: () => void }) {
  const [active, setActive] = useState(0);

  const contactUs = () => {
    onClose();
    setTimeout(() => {
      document.getElementById("footer")?.scrollIntoView({ behavior: "smooth" });
    }, 250);
  };

  return (
    <>
      <button
        onClick={onClose}
        aria-label="Close"
        className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-gray-500 shadow ring-1 ring-gray-100 transition hover:text-primary"
      >
        <X size={20} />
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Image Gallery */}
        <div className="bg-gradient-to-br from-gray-50 to-red-50/50 p-6 md:p-8">
          <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-white ring-1 ring-gray-100">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0"
              >
                <Image
                  src={product.images[active]}
                  alt={`${product.name} ${active + 1}`}
                  fill
                  sizes="(max-width: 768px) 90vw, 400px"
                  className="object-contain p-4"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {product.images.length > 1 && (
            <div className="mt-4 grid grid-cols-4 gap-3">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActive(idx)}
                  aria-label={`Show image ${idx + 1}`}
                  className={`relative aspect-square overflow-hidden rounded-xl bg-white transition ${
                    idx === active
                      ? "ring-2 ring-primary"
                      : "ring-1 ring-gray-200 opacity-70 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={img}
                    alt={`${product.name} thumbnail ${idx + 1}`}
                    fill
                    sizes="80px"
                    className="object-contain p-1"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Details */}
        <div className="flex flex-col p-6 md:p-10">
          {product.category && (
            <span className="self-start rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
              {product.category}
            </span>
          )}
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900 capitalize">
            {product.name}
          </h2>
          <div className="mt-4 h-1 w-12 rounded-full bg-primary" />
          <p className="mt-6 text-gray-600 leading-relaxed">{product.description}</p>

          <div className="mt-8 grid grid-cols-2 gap-3">
            <div className="flex items-center gap-2 rounded-xl bg-gray-50 px-3 py-3 text-sm font-medium text-gray-700">
              <ShieldCheck className="h-4 w-4 text-primary" />
              Authentic
            </div>
            <div className="flex items-center gap-2 rounded-xl bg-gray-50 px-3 py-3 text-sm font-medium text-gray-700">
              <FlaskConical className="h-4 w-4 text-primary" />
              Lab Tested
            </div>
          </div>

          <button
            onClick={contactUs}
            className="mt-8 md:mt-auto inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 font-semibold text-white shadow-lg shadow-primary/30 transition hover:bg-hover"
          >
            <MessageCircle className="h-4 w-4" />
            Contact to Order
          </button>
        </div>
      </div>
    </>
  );
}

export default ProductModal;
