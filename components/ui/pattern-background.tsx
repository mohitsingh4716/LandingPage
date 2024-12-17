"use client";

import { motion } from "framer-motion";

export function PatternBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="absolute -left-1/2 top-0 w-[200%] h-full">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-[300px] w-[300px] bg-[#0052FF]/10 rounded-full filter blur-[80px]"
            animate={{
              x: [Math.random() * 100, Math.random() * -100],
              y: [Math.random() * 100, Math.random() * -100],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              repeatType: "reverse",
              delay: i * 2,
            }}
            style={{
              left: `${25 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
          />
        ))}
      </div>
    </div>
  );
}