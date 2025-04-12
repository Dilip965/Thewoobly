export default function Service() {
    const services = [
      {
        title: "AI Concierge",
        description: "A personalized AI assistant tailored for luxury experiences, available 24/7.",
      },
      {
        title: "Digital Luxury Branding",
        description: "Crafting exclusive digital identities for high-tier entrepreneurs and brands.",
      },
      {
        title: "Elite Dashboard Access",
        description: "Real-time insights for decision-makers managing global empires and investments.",
      },
      {
        title: "Private Network Integration",
        description: "Seamless integration with secure, ultra-private communication and data networks.",
      },
    ];
  
    return (
      <div className="bg-black text-white py-16 px-4 md:px-20">
        <h2 className="text-4xl font-bold text-center mb-12 text-white tracking-wider">Our Elite Services</h2>
  
        <div className="grid md:grid-cols-2 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#111111] p-8 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300 border border-[#222]"
            >
              <h3 className="text-2xl font-semibold mb-4 text-[#FFD700]">{service.title}</h3>
              <p className="text-gray-300 text-base leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  