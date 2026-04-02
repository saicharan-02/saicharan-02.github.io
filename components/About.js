"use client";
import { motion } from "framer-motion";
import { HiCheckCircle } from "react-icons/hi";

const highlights = [
  "15+ RESTful APIs built using API-led connectivity",
  "99.5% API uptime achieved on CloudHub deployments",
  "90%+ MUnit test coverage across all deployed APIs",
  "Mentored 4 engineers on API architecture & standards",
];

export default function About() {
  return (
    <section id="about" className="py-24 border-t border-white/5">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          {/* Left */}
          <div>
            <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-3">
              About Me
            </p>
            <h2 className="text-4xl font-bold text-white mb-6 leading-snug">
              Building the bridges between{" "}
              <span className="gradient-text">systems & data</span>
            </h2>
            <p className="text-slate-400 leading-relaxed mb-5">
              I'm a MuleSoft Integration Developer currently working as an{" "}
              <span className="text-white font-medium">Associate Consultant at Capgemini</span>,
              Hyderabad. I specialize in designing and deploying enterprise-grade APIs using
              Anypoint Platform, with deep expertise in API-led connectivity across Experience,
              Process, and System API layers.
            </p>
            <p className="text-slate-400 leading-relaxed">
              My work spans clients like Charter Communications and Mercedes-Benz, where I've built
              real-time event-driven systems, data migration pipelines, and Salesforce integrations
              that power business-critical operations at scale.
            </p>
          </div>

          {/* Right */}
          <div className="space-y-4">
            {highlights.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex items-start gap-3 bg-white/3 border border-white/5 rounded-xl p-4 hover:border-indigo-500/30 transition-colors"
              >
                <HiCheckCircle className="text-indigo-400 mt-0.5 shrink-0" size={20} />
                <span className="text-slate-300 text-sm">{item}</span>
              </motion.div>
            ))}

            <div className="grid grid-cols-3 gap-4 mt-6">
              {[
                { value: "3.5+", label: "Years Exp." },
                { value: "15+", label: "APIs Built" },
                { value: "4", label: "Clients" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white/3 border border-white/5 rounded-xl p-4 text-center"
                >
                  <p className="gradient-text text-3xl font-extrabold">{stat.value}</p>
                  <p className="text-slate-500 text-xs mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
