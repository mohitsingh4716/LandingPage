"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "Switching to this payment solution has transformed our business. The integration was seamless, and our customers love the smooth checkout experience.",
    author: "Sarah Johnson",
    role: "CEO, TechStart",
    rating: 5
  },
  {
    quote: "The security features and real-time fraud detection have given us peace of mind. Our transaction volume has increased by 200% since we started using it.",
    author: "Michael Chen",
    role: "CTO, GlobalPay",
    rating: 5
  }
];

export function TestimonialsSection() {
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
            Trusted by Businesses Worldwide
          </h2>
          <p className="text-[#7A8EA5] text-lg max-w-2xl mx-auto">
            Join thousands of businesses that rely on our payment solution.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#F8FAFC] p-8 rounded-xl"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-[#0052FF] text-[#0052FF]" />
                ))}
              </div>
              <blockquote className="text-lg text-[#0A0B0D] mb-6">
                "{testimonial.quote}"
              </blockquote>
              <div>
                <div className="font-semibold text-[#0A0B0D]">{testimonial.author}</div>
                <div className="text-[#7A8EA5]">{testimonial.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}