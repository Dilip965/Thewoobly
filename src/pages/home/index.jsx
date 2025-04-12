import { motion } from "framer-motion";
import { Parallax } from "react-parallax";
import Tilt from "react-parallax-tilt";
import VideoBackgroundHero from "../../component/videos";


import { Slide } from "react-awesome-reveal";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Home() {
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  };

  return (
    <>
    <VideoBackgroundHero/>
      {/* Hero Section */}
      <Parallax
        bgImage="https://images.unsplash.com/photo-1611220561453-40d876cda2f0"
        strength={500}
      >
        <div className="photo-1 h-screen flex items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-white text-5xl md:text-7xl font-bold tracking-wide text-center"
          >
            Elevate Luxury with <span className="text-gold">Woobly</span>
          </motion.h1>
        </div>
      </Parallax>

      {/* Feature Tilt Cards */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 px-6">
          {["AI Concierge", "Live Dashboard", "Bespoke Service"].map((feature, i) => (
            <Tilt
              key={feature}
              options={{ max: 25, speed: 400 }}
              className="bg-neutral-900 p-6 rounded-2xl shadow-lg"
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
              >
                <h2 className="text-2xl font-semibold mb-3 text-gold">{feature}</h2>
                <p className="text-sm text-gray-300">
                  Premium intelligent support and automation to redefine your guest experience.
                </p>
              </motion.div>
            </Tilt>
          ))}
        </div>
      </section>

      {/* Testimonials Slider */}
      <section className="py-16 bg-neutral-950 text-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-center text-4xl font-bold mb-12 text-gold">Client Impressions</h2>
          <Slider {...carouselSettings}>
            {[1, 2, 3].map((id) => (
              <div key={id} className="px-4">
                <Slide direction="up">
                  <div className="bg-neutral-900 p-8 rounded-xl shadow-xl">
                    <p className="text-lg italic text-gray-300">
                      "Woobly redefined luxury service. Our 7-star resort is now smarter, faster, and more elegant."
                    </p>
                    <p className="mt-4 text-gold font-semibold">- Billionaire Client #{id}</p>
                  </div>
                </Slide>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-black text-center text-white">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="max-w-xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Experience Royalty?
          </h2>
          <p className="mb-8 text-gray-400">
            Partner with Woobly and redefine the limits of luxury hospitality.
          </p>
          <button className="bg-gold text-black px-6 py-3 rounded-full text-lg font-semibold shadow-md hover:bg-yellow-400 transition">
            Request Demo
          </button>
        </motion.div>
      </section>

    <div>

      <img src="https://static.wixstatic.com/media/a069ab_848ca06400d64ceab29f664c9bb9b3def000.jpg/v1/fill/w_1265,h_593,al_c,q_85,usm_0.33_1.00_0.00,enc_avif,quality_auto/a069ab_848ca06400d64ceab29f664c9bb9b3def000.jpg" alt="" />
    </div>
    </>
  );
}

export default Home;
