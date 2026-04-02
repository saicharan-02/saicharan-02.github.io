"use client";
import { motion } from "framer-motion";
import { HiBriefcase } from "react-icons/hi";

const experiences = [
  {
    company: "Capgemini",
    location: "Hyderabad, India",
    roles: [
      { title: "Associate Consultant", period: "Jan 2024 – Present" },
      { title: "Senior Analyst", period: "Aug 2022 – Jan 2024" },
    ],
    bullets: [
      "Designed and developed 15+ RESTful APIs using API-led connectivity (Experience, Process, System layers) in Mule 4, improving system modularity and reusability.",
      "Built complex DataWeave 2.0 transformations for JSON, XML, and CSV data mapping across multiple integration flows, handling nested payloads and conditional logic.",
      "Enforced API security policies (OAuth 2.0, Client ID Enforcement, Rate Limiting) through API Manager and API Gateway, ensuring enterprise security compliance.",
      "Managed API deployments and monitoring on CloudHub via Runtime Manager, achieving 99.5% API uptime through proactive alerting and performance tuning.",
      "Developed comprehensive MUnit test cases covering positive, negative, and edge-case scenarios, achieving 90%+ code coverage across all deployed APIs.",
      "Mentored and onboarded 4 new team members via knowledge-transfer sessions on API architecture, development standards, and support procedures.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 border-t border-white/5">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Career
          </p>
          <h2 className="text-4xl font-bold text-white">
            Professional <span className="gradient-text">Experience</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/50 via-purple-500/30 to-transparent hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="md:pl-16 relative"
              >
                {/* Timeline dot */}
                <div className="absolute left-3.5 top-1 w-5 h-5 rounded-full bg-indigo-600 border-4 border-[#0a0a0f] hidden md:flex items-center justify-center">
                  <HiBriefcase size={10} className="text-white" />
                </div>

                <div className="bg-white/3 border border-white/5 rounded-2xl p-6 hover:border-indigo-500/20 transition-colors">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white">{exp.company}</h3>
                      <p className="text-slate-500 text-sm">{exp.location}</p>
                      <div className="flex flex-wrap gap-3 mt-2">
                        {exp.roles.map((r) => (
                          <span
                            key={r.title}
                            className="inline-flex items-center gap-1 text-xs text-indigo-300 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-3 py-1"
                          >
                            <span className="font-semibold">{r.title}</span>
                            <span className="text-slate-500">· {r.period}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {exp.bullets.map((b, bi) => (
                      <li key={bi} className="flex items-start gap-3 text-slate-400 text-sm leading-relaxed">
                        <span className="text-indigo-500 mt-1.5 shrink-0">▸</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
