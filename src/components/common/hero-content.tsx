"use client";
import { motion } from "framer-motion";

interface ContentSectionProps {
  highlightText?: string; // Text to be highlighted
  mainText: string;       // Main paragraph text
  paragraphs: string[];   // Array of content paragraphs
  highlightColor?: string; // Optional color class (default: red)
}

export default function ContentSection({
  mainText,
  highlightText,
  paragraphs,
  highlightColor = "text-red-600",
}: ContentSectionProps) {
  return (
    <section className="relative w-full py-16 sm:py-20 md:py-28">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          {/* Top decorative line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center justify-center gap-4 mb-12"
          >
            <div className="h-px bg-gradient-to-r from-transparent via-red-600 to-transparent w-full max-w-md" />
          </motion.div>

          {/* Main content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center space-y-8"
          >
            <p className="text-lg sm:text-xl md:text-3xl font-semibold leading-relaxed px-4">
              {mainText}{" "}
              {highlightText && (
                <span className={`font-medium ${highlightColor}`}>
                  {highlightText}
                </span>
              )}
            </p>

            <div className="relative py-8 px-6 sm:px-12 space-y-6">
              {paragraphs.map((para, index) => (
                <p
                  key={index}
                  className="text-base sm:text-lg md:text-xl text-center leading-relaxed"
                >
                  {para}
                </p>
              ))}
            </div>
          </motion.div>

          {/* Bottom decorative line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex items-center justify-center gap-4 mt-12"
          >
            <div className="h-px bg-gradient-to-r from-transparent via-red-600 to-transparent w-full max-w-md" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
