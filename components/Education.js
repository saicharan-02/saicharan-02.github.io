"use client";
import { motion } from "framer-motion";
import { HiAcademicCap, HiBadgeCheck } from "react-icons/hi";

const certifications = [
  { name: "MuleSoft Certified Developer – Level 1", abbr: "MCD1", color: "indigo" },
  { name: "MuleSoft Certified Integration Associate", abbr: "MCIA", color: "purple" },
  { name: "Salesforce AI Associate", abbr: "SAI", color: "cyan" },
];

const certColors = {
  indigo: "border-indigo-500/30 bg-indigo-500/10 text-indigo-300",
  purple: "border-purple-500/30 bg-purple-500/10 text-purple-300",
  cyan: "border-cyan-500/30 bg-cyan-500/10 text-cyan-300",
};

export default function Education() {
  return (
    <section id="education" className="py-24 border-t border-white/5">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Background
          </p>
          <h2 className="text-4xl font-bold text-white">
            Education & <span className="gradient-text">Certifications</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white/3 border border-white/5 rounded-2xl p-7 hover:border-indigo-500/20 transition-colors"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 bg-indigo-500/10 rounded-xl border border-indigo-500/20">
                <HiAcademicCap className="text-indigo-400" size={24} />
              </div>
              <h3 className="text-lg font-bold text-white">Education</h3>
            </div>

            <div className="space-y-1">
              <p className="text-white font-semibold text-lg">
                Institute of Aeronautical Engineering
              </p>
              <p className="text-indigo-300 text-sm">
                Bachelor of Technology — Computer Science & Engineering
              </p>
              <p className="text-slate-500 text-sm">Hyderabad, Telangana</p>
              <p className="text-slate-500 text-sm mt-2">Jul 2018 – Jul 2022</p>
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white/3 border border-white/5 rounded-2xl p-7 hover:border-indigo-500/20 transition-colors"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 bg-purple-500/10 rounded-xl border border-purple-500/20">
                <HiBadgeCheck className="text-purple-400" size={24} />
              </div>
              <h3 className="text-lg font-bold text-white">Certifications</h3>
            </div>

            <div className="space-y-4">
              {certifications.map((cert, i) => (
                <motion.div
                  key={cert.abbr}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className={`flex items-center gap-4 border rounded-xl p-4 ${certColors[cert.color]}`}
                >
                  <span className="text-xs font-bold tracking-wider opacity-70 w-10 shrink-0">
                    {cert.abbr}
                  </span>
                  <span className="text-sm font-medium">{cert.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
