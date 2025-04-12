"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className=" text-white px-6 md:px-24 py-20 min-h-screen">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-5xl font-bold tracking-wide text-[#FFD700] mb-4">
          Get in Touch with the Visionaries
        </h2>
        <p className="text-gray-400 text-lg">
          Not your average contact page. This is where futures are shaped.
        </p>
      </motion.div>

      {/* Two Columns */}
      <div className="grid md:grid-cols-2 gap-12">
        {/* Headquarters Info */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-[#111] p-8 rounded-2xl shadow-xl"
        >
          <h3 className="text-2xl font-semibold text-[#FFD700] mb-6">
            Our Global Headquarters
          </h3>
          <p className="text-white mb-4">
            Level 108, SkyTitan Tower, Koregaon Park, Pune, Maharashtra, India – 411001
          </p>
          <p className="text-gray-400">Phone:</p>
          <p className="text-white font-medium mb-4">+91 98765 43210</p>
          <p className="text-gray-400">Email:</p>
          <p className="text-white font-medium mb-4">board@mywoobly.com</p>
          <p className="text-gray-400">Working Hours:</p>
          <p className="text-white font-medium">
            24/7 — Because luxury never sleeps
          </p>
        </motion.div>

        {/* Message Form */}
        <motion.form
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-[#111] p-8 rounded-2xl shadow-xl"
        >
          <h3 className="text-2xl font-semibold text-[#FFD700] mb-6">
            Leave Us a Message
          </h3>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full  border border-[#444] text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full  border border-[#444] text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
              required
            />
          </div>
          <div className="mb-6">
            <textarea
              rows={6}
              placeholder="Message"
              className="w-full  border border-[#444] text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-[#FFD700] hover:bg-yellow-400 text-black font-semibold px-6 py-3 rounded-lg transition duration-300 w-full"
          >
            Send Message to the Board
          </button>
        </motion.form>
      </div>
    </div>
  );
}
