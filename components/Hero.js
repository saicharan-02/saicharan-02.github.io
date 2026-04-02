"use client";
import { motion } from "framer-motion";
import { HiArrowDown, HiDownload } from "react-icons/hi";
import { SiMulesoft } from "react-icons/si";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(99,102,241,0.3) 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="section-container relative z-10 text-center py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-sm font-medium mb-8"
        >
          <SiMulesoft size={14} />
          MuleSoft Certified Developer — Level 1
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight"
        >
          Sai Charan
          <br />
          <span className="gradient-text">Hasnabad</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Integration Developer with{" "}
          <span className="text-indigo-400 font-semibold">3.5+ years</span> of experience
          designing & deploying enterprise APIs with MuleSoft, Salesforce, Kafka, and CloudHub.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#experience"
            className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg font-semibold transition-colors shadow-lg shadow-indigo-600/30"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-slate-600 hover:border-indigo-500 text-slate-300 hover:text-white rounded-lg font-semibold transition-colors"
          >
            Get In Touch
          </a>
          <a
            href="/Sai_Charan_Resume.pdf"
            download="Sai_Charan_Resume.pdf"
            className="inline-flex items-center gap-2 px-6 py-3 border border-indigo-500/40 hover:border-indigo-400 text-indigo-300 hover:text-indigo-200 rounded-lg font-semibold transition-colors"
          >
            <HiDownload size={18} />
            Resume
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex items-center justify-center gap-5 mt-10"
        >
          <a
            href="mailto:saicharanhasnabad@gmail.com"
            className="text-slate-400 hover:text-indigo-400 transition-colors"
            aria-label="Email"
          >
            <FaEnvelope size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/sai-charan-hasnabad"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-indigo-400 transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={20} />
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500 animate-bounce"
      >
        <a href="#about">
          <HiArrowDown size={24} />
        </a>
      </motion.div>
    </section>
  );
}
