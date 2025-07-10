"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X } from "lucide-react";
import { Dialog } from "@headlessui/react";

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: {
    name: string;
    description: string;
    images: string[];
  } | null;
}

const ProductModal: React.FC<ProductModalProps> = ({ isOpen, onClose, product }) => {
  return (
    <AnimatePresence>
      {isOpen && product && (
        <Dialog
          open={isOpen}
          onClose={onClose}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-sm"
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            className="relative w-full max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden scrollbar-hidden p-6 md:p-10 mx-4"
          >
            <button
              onClick={onClose}
              className="absolute top-3 right-3 text-gray-500 hover:text-black"
            >
              <X size={22} />
            </button>

            <div className="flex flex-col md:flex-row gap-6">
              {/* Image Gallery */}
              <div className="w-full md:w-1/2 space-y-4 max-h-[400px] overflow-y-auto scrollbar-hidden pr-2">
                {product.images.map((img, idx) => (
                  <div
                    key={idx}
                    className="relative aspect-[4/3] w-full rounded-md border overflow-hidden scrollbar-hidden"
                  >
                    <Image
                      src={img}
                      alt={`${product.name} ${idx}`}
                      fill
                      className="object-contain"
                    />
                  </div>
                ))}
              </div>

              {/* Details */}
              <div className="w-full md:w-1/2">
                <h2 className="text-2xl font-bold mb-4 text-primary">
                  {product.name}
                </h2>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {product.description}
                </p>
              </div>
            </div>
          </motion.div>
        </Dialog>
      )}
    </AnimatePresence>
  );
};

export default ProductModal;
