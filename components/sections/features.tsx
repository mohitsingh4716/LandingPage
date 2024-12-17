"use client";

import { motion } from "framer-motion";
import { CreditCard, Shield, Zap, Globe } from "lucide-react";

const features = [
  {
    icon: <CreditCard className="h-8 w-8" />,
    title: "Instant Payments",
    description: "Process payments in real-time with instant confirmation and settlement."
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: "Bank-Grade Security",
    description: "Enterprise-level security with end-to-end encryption and fraud protection."
  },
  {
    icon: <Zap className="h-8 w-8" />,
    title: "Lightning Fast",
    description: "Optimized payment flow with sub-second transaction processing."
  },
  {
    icon: <Globe className="h-8 w-8" />,
    title: "Global Reach",
    description: "Accept payments from customers anywhere in the world."
  }
];

export function FeaturesSection() {
  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A0B0D] mb-4">
            Built for Modern Businesses
          </h2>
          <p className="text-[#7A8EA5] text-lg max-w-2xl mx-auto">
            Everything you need to accept payments and grow your business anywhere on the planet.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-[#0052FF] mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-[#0A0B0D] mb-2">{feature.title}</h3>
              <p className="text-[#7A8EA5]">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}