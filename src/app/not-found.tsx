"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { HiHome, HiArrowLeft } from "react-icons/hi";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center pt-16 section-padding">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-lg"
      >
        <motion.div
          animate={{ rotate: [0, -10, 10, -10, 0] }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-8xl mb-6"
        >
          🤔
        </motion.div>
        <h1 className="text-7xl font-black text-gray-900 dark:text-white mb-2">
          4<span className="gradient-text">0</span>4
        </h1>
        <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-300 mb-4">
          Page Not Found
        </h2>
        <p className="text-gray-500 dark:text-gray-400 mb-8">
          Looks like this page got lost in the void. Let&apos;s get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/" className="btn-primary">
            <HiHome className="w-4 h-4" /> Go Home
          </Link>
          <button onClick={() => history.back()} className="btn-secondary">
            <HiArrowLeft className="w-4 h-4" /> Go Back
          </button>
        </div>
      </motion.div>
    </div>
  );
}
