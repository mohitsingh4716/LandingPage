"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { PatternBackground } from "@/components/ui/pattern-background";

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-white to-[#f8fafc]">
      <PatternBackground />
      <div className="relative flex flex-col-reverse lg:flex-row max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 flex flex-col justify-center px-6 lg:px-16 py-12"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center px-4 py-2 bg-[#E7EFFF] text-[#0052FF] rounded-full text-sm font-medium mb-6"
          >
            Welcome to InstantPay
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-bold text-[#0A0B0D] mb-6 leading-tight">
            The Future of
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0052FF] to-[#90B1F3] block">
              Digital Payments
            </span>
          </h1>
          <p className="text-[#7A8EA5] text-lg md:text-xl mb-8 max-w-lg">
            Transform your business with lightning-fast, secure payment solutions.
          </p>
          <div className="flex gap-4">
            <Button size="lg" className="group bg-[#0052FF] hover:bg-[#0043CC]">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline" className="border-[#0052FF] text-[#0052FF]">
              See How It Works
            </Button>
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 flex items-center justify-center p-8"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#0052FF]/20 to-transparent rounded-2xl transform rotate-3" />
            <img
              src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80"
              alt="Payment Dashboard"
              className="relative rounded-2xl shadow-2xl transform transition-transform hover:scale-105 duration-500"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}