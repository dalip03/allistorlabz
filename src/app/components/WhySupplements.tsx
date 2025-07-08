"use client";

import Image from "next/image";

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
        <p className="text-lg italic text-green-600 mb-2 ">Four Amazing</p>

        {/* Main Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold mb-10">Supplement In One</h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center space-y-4 px-4">
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
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
