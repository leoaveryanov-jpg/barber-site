"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function BarberHome() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      {/* HERO */}
      <section className="relative h-[90vh] flex items-center justify-center text-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1621605815971-fbc98d665033"
          alt="barbershop"
          fill
          className="object-cover opacity-40"
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Classic Cuts & Modern Style
          </h1>
          <p className="mt-4 text-lg text-neutral-300">
            Premium barber experience in your neighborhood
          </p>
          <button className="mt-6 px-6 py-3 bg-white text-black font-semibold rounded-full hover:scale-105 transition">
            Book Appointment
          </button>
        </motion.div>
      </section>

      {/* SERVICES */}
      <section className="py-20 px-6 md:px-20">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl font-bold text-center mb-12"
        >
          Our Services
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {["Haircut", "Beard Trim", "Hot Towel Shave"].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-neutral-900 rounded-2xl text-center"
            >
              <h3 className="text-xl font-semibold">{item}</h3>
              <p className="text-neutral-400 mt-2">
                Premium service with attention to detail
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* GALLERY */}
      <section className="px-6 md:px-20 pb-20">
        <h2 className="text-3xl font-bold text-center mb-10">Our Work</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            "https://images.unsplash.com/photo-1503951914875-452162b0f3f1",
            "https://images.unsplash.com/photo-1599351431202-1e0f0137899a",
            "https://images.unsplash.com/photo-1622286342621-4bd786c2447c",
          ].map((img, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="relative h-64 rounded-xl overflow-hidden"
            >
              <Image src={img} alt="cut" fill className="object-cover" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-20 bg-neutral-900 px-6 md:px-20">
        <h2 className="text-3xl font-bold text-center mb-10">Reviews</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {["Best haircut I’ve ever had", "Super clean fade", "Professional and fast service"].map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="p-6 bg-neutral-800 rounded-xl"
            >
              "{r}"
              <p className="mt-3 text-sm text-neutral-400">- Happy client</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="py-20 text-center px-6">
        <h2 className="text-3xl font-bold">Visit Us</h2>
        <p className="text-neutral-400 mt-2">Open Mon-Sat • Walk-ins welcome</p>
        <button className="mt-6 px-6 py-3 bg-white text-black rounded-full hover:scale-105 transition">
          Get Directions
        </button>
      </section>
    </div>
  );
}

