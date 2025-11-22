"use client";
import { motion } from "framer-motion";
import MotionSection from "@/components/MotionSection";
import MotionDiv from "@/components/MotionDiv";
import { Award, Heart, Target, Users } from "lucide-react";

export default function Hero() {
  return (
    <section className="flex flex-col items-center text-center py-32 bg-linear-to-b from-blue-50 to-white">
        <MotionSection
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        
      >
        <div className="text-6xl font-extrabold text-gray-900 max-w-3xl">Building Modern, Scalable Software Solutions
          </div>
         <p className="mt-6 text-xl text-gray-600 max-w-2xl">
        We design and develop enterprise-grade applications that empower
        businesses to grow faster.
      </p>

      </MotionSection>

     
      <motion.a
        href="/contact"
        whileHover={{ scale: 1.05 }}
        className="mt-8 px-8 py-4 text-lg rounded-2xl bg-blue-600 text-white font-semibold shadow-lg hover:bg-blue-700 transition"
      >
        Get a Free Consultation
      </motion.a>
    </section>
  );
}
