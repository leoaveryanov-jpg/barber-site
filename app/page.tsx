"use client";

import { motion } from "framer-motion";

export default function BarberHome() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-lg font-bold tracking-wide">
            Elite Cuts Barber Shop
          </div>

          <nav className="flex gap-4 text-sm text-neutral-300">
            <a href="#" className="hover:text-white transition">Home</a>
            <a href="#services" className="hover:text-white transition">Services</a>
            <a href="#work" className="hover:text-white transition">Work</a>
            <a href="#reviews" className="hover:text-white transition">Reviews</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </nav>

          <button className="px-4 py-2 bg-white text-black rounded-full hover:scale-105 transition">
            Book Now
          </button>
        </div>
      </header>

      {/* HERO */}
      <section className="relative h-[90vh] flex items-center justify-center text-center overflow-hidden pt-24">
        <img
          src="https://via.placeholder.com/1920x1080"
          alt="barbershop"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50" />

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
      <section id="services" className="py-20 px-6 md:px-20">
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

      {/* WORK */}
      <section id="work" className="px-6 md:px-20 pb-20">
        <h2 className="text-3xl font-bold text-center mb-10">Our Work</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="h-64 rounded-xl overflow-hidden bg-neutral-800"
            >
              <img
                src={`https://via.placeholder.com/800x600?text=Work+${i}`}
                alt="barber work"
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="py-20 bg-neutral-900 px-6 md:px-20">
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
      <section id="contact" className="py-20 text-center px-6">
        <h2 className="text-3xl font-bold">Visit Us</h2>
        <p className="text-neutral-400 mt-2">Open Mon-Sat • Walk-ins welcome</p>
        <button className="mt-6 px-6 py-3 bg-white text-black rounded-full hover:scale-105 transition">
          Get Directions
        </button>
      </section>
    </div>
  );
}