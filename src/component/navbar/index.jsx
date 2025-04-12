import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [ "About", "Team", "Services", "Contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-xl shadow-xl">
      <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto font-serif">

        {/* Logo */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2 text-white text-2xl tracking-widest"
        >
          <span className="text-gold text-3xl">👑</span>
          <span className="font-bold text-gradient">WOOBLY</span>
        </motion.div>

        {/* Desktop Nav */}
        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="hidden md:flex gap-8 text-white text-lg tracking-wide"
        >
          {navLinks.map(link => (
            <Link
              key={link}
              to={`/${link.toLowerCase()}`}
              className="hover:text-gold transition-all duration-300"
            >
              {link}
            </Link>
          ))}
        </motion.nav>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="md:hidden bg-black/90 text-white text-center py-6 space-y-4 overflow-hidden"
          >
            {navLinks.map(link => (
              <Link
                key={link}
                to={`/${link.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="block text-xl hover:text-gold transition"
              >
                {link}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
