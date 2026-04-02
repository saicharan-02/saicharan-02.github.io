"use client";
import { motion } from "framer-motion";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";
import { HiPhone } from "react-icons/hi";

const contactItems = [
  {
    icon: FaEnvelope,
    label: "Email",
    value: "saicharanhasnabad@gmail.com",
    href: "mailto:saicharanhasnabad@gmail.com",
  },
  {
    icon: HiPhone,
    label: "Phone",
    value: "+91 90590 43855",
    href: "tel:+919059043855",
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/sai-charan-hasnabad",
    href: "https://www.linkedin.com/in/sai-charan-hasnabad",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 border-t border-white/5">
      <div className="max-w-[1100px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Contact
          </p>
          <h2 className="text-4xl font-bold text-white mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-slate-400 max-w-lg mx-auto">
            Open to new opportunities, collaborations, or just a conversation about integration
            architecture. Feel free to reach out.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {contactItems.map((item, i) => (
            <motion.a
              key={item.label}
              href={item.href}
              target={item.label === "LinkedIn" ? "_blank" : undefined}
              rel={item.label === "LinkedIn" ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="flex flex-col items-center gap-4 p-7 bg-white/3 border border-white/5 rounded-2xl hover:border-indigo-500/30 hover:bg-white/5 transition-all group"
            >
              <div className="p-3 bg-indigo-500/10 border border-indigo-500/20 rounded-xl group-hover:bg-indigo-500/20 transition-colors">
                <item.icon className="text-indigo-400" size={22} />
              </div>
              <div className="text-center">
                <p className="text-slate-500 text-xs uppercase tracking-wider mb-1">{item.label}</p>
                <p className="text-slate-300 text-sm font-medium break-all">{item.value}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="max-w-[1100px] mx-auto px-6 mt-20 pt-8 border-t border-white/5 text-center">
        <p className="text-slate-600 text-sm">
          © {new Date().getFullYear()} Sai Charan Hasnabad. Built with Next.js & Tailwind CSS.
        </p>
      </div>
    </section>
  );
}
