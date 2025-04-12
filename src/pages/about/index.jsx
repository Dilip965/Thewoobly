import { motion } from "framer-motion";
import { Parallax } from "react-parallax";
import { Tilt } from "react-tilt";

import { Slide } from "react-awesome-reveal";

function About() {
  return (
    <>
      {/* Hero Section */}
      <Parallax
        bgImage="https://images.unsplash.com/photo-1604147706284-72ccf54679fe"
        strength={400}
      >
        <div className="h-screen flex items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="text-white text-5xl md:text-7xl font-bold text-center"
          >
            We Don't Follow Luxury<br />
            <span className="text-gold">We Define It.</span>
          </motion.h1>
        </div>
      </Parallax>

      {/* Vision */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl font-bold text-gold mb-6"
          >
            The Vision
          </motion.h2>
          <p className="text-gray-300 text-lg">
            Woobly is a revolutionary ecosystem that elevates the meaning of experience.
            We don't just create software — we design realms where exclusivity,
            artificial intelligence, and elegance converge to serve those who settle for nothing less than **perfection**.
          </p>
        </div>
      </section>

      {/* Features Tilt Cards */}
      <section className="py-24 bg-neutral-950 text-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 px-6">
          {[
            {
              title: "WooblyGENIE™",
              desc: "Our AI core that personalizes every interaction with precision and intuition.",
            },
            {
              title: "Live Intelligence",
              desc: "Real-time dashboards that adapt, learn, and evolve with your business DNA.",
            },
            {
              title: "Bespoke Integration",
              desc: "Every Woobly experience is sculpted to your exact taste, needs, and legacy.",
            },
          ].map((item, i) => (
            <Tilt key={item.title} options={{ max: 25, speed: 400 }} className="bg-neutral-900 p-6 rounded-2xl shadow-lg">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
              >
                <h2 className="text-2xl font-semibold mb-3 text-gold">{item.title}</h2>
                <p className="text-sm text-gray-300">{item.desc}</p>
              </motion.div>
            </Tilt>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-black text-white text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            This Isn't For Everyone.
          </h2>
          <p className="mb-8 text-gray-400">
            Woobly is built for visionaries, not followers.  
            For brands that choose legacy over convention.
          </p>
          <button className="bg-gold text-black px-6 py-3 rounded-full text-lg font-semibold shadow-md hover:bg-yellow-400 transition">
            Join The Circle
          </button>
        </motion.div>
      </section>
    </>
  );
}

export default About;
