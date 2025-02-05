import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const HomegrownSection = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("upstart-market");
      if (section) {
        const rect = section.getBoundingClientRect();
        setVisible(rect.top < window.innerHeight * 0.8);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="upstart-market" className="py-16 px-6 text-center bg-white">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 20 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold mb-6"
      >
        Homegrown, Handcrafted, and Hyper-Local
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: visible ? 1 : 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="text-lg max-w-2xl mx-auto mb-10"
      >
        Upstart Market is a community-driven platform that connects home growers, urban farmers, and small-scale artisans with distributors and consumers. By cutting out the middleman, we ensure fresh, high-quality, local food gets to the people who need it most.
      </motion.p>

      <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {[
          { title: "Home Growers & Farmers", description: "Providing fresh, locally sourced ingredients from backyard gardens to urban farms.", emoji: "🌱" },
          { title: "Transformers & Artisans", description: "Turning ingredients into unique, handcrafted food products.", emoji: "🎨" },
          { title: "Distributors & Markets", description: "Helping deliver and connect products with local businesses and consumers.", emoji: "🚛" }
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="bg-gray-100 p-6 rounded-2xl shadow-md text-center"
          >
            <span className="text-5xl mb-4 block">{item.emoji}</span>
            <h3 className="text-2xl font-semibold">{item.title}</h3>
            <p className="mt-2 text-gray-600">{item.description}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 20 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mt-12"
      >
        <a
          href="/join"
          className="bg-blue-600 text-white py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 transition text-lg font-semibold"
        >
          🚀 Join the Upstart Market Movement
        </a>
      </motion.div>
    </section>
  );
};

export default HomegrownSection;
