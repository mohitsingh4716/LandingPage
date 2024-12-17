"use client";

import { motion } from "framer-motion";

const stats = [
  { number: "10M+", label: "Users" },
  { number: "150+", label: "Countries" },
  { number: "99.9%", label: "Uptime" },
  { number: "$50B+", label: "Processed" }
];

export function StatsSection() {
  return (
    <section className="py-16 bg-[#0052FF]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-[#E7EFFF]">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}