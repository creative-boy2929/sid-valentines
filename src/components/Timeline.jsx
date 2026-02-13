import { motion } from "framer-motion";

const events = [
  { date: "19 July", text: "The first time we met 💫" },
  { date: "4 February", text: "The first time we met in real life ❤️" },
  { date: "Today", text: "Still falling for you every day 🌹" },
];

export default function Timeline() {
  return (
    <section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="min-h-screen px-6 py-20"
    >
      <h2 className="text-4xl font-romantic text-center text-roseGold mb-16">
        Our Timeline
      </h2>

      <div className="max-w-3xl mx-auto space-y-12">
        {events.map((event, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="border-l-2 border-roseGold pl-6"
          >
            <h3 className="text-xl text-roseGold">{event.date}</h3>
            <p className="text-gray-400">{event.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
