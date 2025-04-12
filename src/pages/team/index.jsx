import { motion } from "framer-motion";
import { Parallax } from "react-parallax";

const teamMembers = [
  {
    name: "Isan joshi",
    role: "Creative Director",
    image: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126",
  },
  {
    name: "Isha Vardhan",
    role: "Creative Director",
    image: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126",
  },
  {
    name: "Rafael Moretti",
    role: "Technology Strategist",
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
  },
  {
    name: "Chanel DuPont",
    role: "Luxury UX Lead",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
  },
];

export default function Team() {
  return (
    <section className="bg-black text-white py-24 px-6">
      <Parallax strength={200} bgImage="">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-7xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-6xl font-playfair text-gold tracking-wide mb-16 uppercase">
            Meet the Minds Behind Woobly
          </h2>
          <div className="grid md:grid-cols-4 gap-10">
            {teamMembers.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.3, duration: 0.8 }}
                className="bg-neutral-900 rounded-2xl shadow-[0_10px_40px_-10px_rgba(212,175,55,0.3)] p-6 hover:scale-105 transition-transform duration-700 ease-out"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover rounded-xl mb-5"
                />
                <h3 className="text-xl font-semibold text-gold font-playfair">
                  {member.name}
                </h3>
                <p className="text-gray-400 mt-2 text-sm">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Parallax>
    </section>
  );
}
