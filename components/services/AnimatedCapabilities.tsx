"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "@phosphor-icons/react";

interface AnimatedCapabilitiesProps {
  capabilities: string[];
}

export default function AnimatedCapabilities({ capabilities }: AnimatedCapabilitiesProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className="grid md:grid-cols-2 gap-4"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      {capabilities.map((capability, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          className="group"
        >
          <div className="flex items-start space-x-4 p-5 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-primary-orange/30 transition-all duration-300 h-full">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-primary-orange/10 rounded-lg flex items-center justify-center group-hover:bg-primary-orange/20 transition-colors">
                <CheckCircle
                  size={24}
                  weight="duotone"
                  className="text-primary-orange"
                />
              </div>
            </div>
            <div className="flex-1">
              <p className="text-gray-700 leading-relaxed font-medium">
                {capability}
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
