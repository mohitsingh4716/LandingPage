"use client";

import { motion } from "framer-motion";
import { Button } from "./button";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <div className="flex flex-col-reverse lg:flex-row min-h-screen">
      {/* Left Section - Text Content */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full lg:w-1/2 flex flex-col justify-center px-6 lg:px-16 py-12"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-[#0A0B0D] mb-6">
          Secure and Seamless
          <span className="text-[#0052FF] block mt-2">Payments</span>
        </h1>
        <p className="text-[#7A8EA5] text-lg md:text-xl mb-8 max-w-lg">
          Experience the future of financial transactions with our cutting-edge payment solution. Fast, secure, and designed for modern businesses.
        </p>
        <div className="flex gap-4">
          <Button size="lg" className="group">
            Sign Up Free
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button size="lg" variant="outline">
            Sign In
          </Button>
        </div>
        <div className="mt-12 grid grid-cols-3 gap-8">
          {[
            { number: "10M+", label: "Users" },
            { number: "150+", label: "Countries" },
            { number: "99.9%", label: "Uptime" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="text-center"
            >
              <div className="text-2xl font-bold text-[#0052FF]">{stat.number}</div>
              <div className="text-sm text-[#7A8EA5]">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Right Section - Image */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full lg:w-1/2 bg-[#E7EFFF] flex items-center justify-center p-8"
      >
        <img
          src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80"
          alt="Payment Illustration"
          className="rounded-lg shadow-xl max-w-full h-auto"
        />
      </motion.div>
    </div>
  );
}