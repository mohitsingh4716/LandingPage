"use client";

import { motion } from "framer-motion";
import { Shield, Zap, CreditCard } from "lucide-react";

const features = [
  {
    title: "Secure Transactions",
    description: "Bank-grade security with end-to-end encryption and real-time fraud detection to keep your money safe.",
    icon: Shield,
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80",
    color: "from-blue-500/20 to-transparent"
  },
  {
    title: "Lightning Fast Payments",
    description: "Process payments instantly with our optimized payment infrastructure and real-time settlement.",
    icon: Zap,
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
    color: "from-purple-500/20 to-transparent"
  },
  {
    title: "Smart Analytics",
    description: "Get detailed insights into your payment flows with our advanced analytics dashboard.",
    icon: CreditCard,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    color: "from-green-500/20 to-transparent"
  }
];

export function FeatureCards() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A0B0D] mb-4">
            Why Choose InstantPay
          </h2>
          <p className="text-[#7A8EA5] text-lg max-w-2xl mx-auto">
            Experience the next generation of payment processing with our cutting-edge features.
          </p>
        </motion.div>
        <div className="grid lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-r ${feature.color}`} />
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <feature.icon className="h-6 w-6 text-[#0052FF] mr-2" />
                  <h3 className="text-xl font-semibold text-[#0A0B0D]">{feature.title}</h3>
                </div>
                <p className="text-[#7A8EA5]">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}