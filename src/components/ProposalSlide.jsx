import { motion } from "framer-motion";
import { useState } from "react";

export default function ProposalSlide() {
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });
  const [accepted, setAccepted] = useState(false);

  const moveNoButton = () => {
    const randomX = Math.random() * 300 - 150;
    const randomY = Math.random() * 200 - 100;

    setNoPosition({
      x: randomX,
      y: randomY,
    });
  };

  const hearts = Array.from({ length: 25 });

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden px-6">
      {/* 🌌 Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-rose-950/40 to-black"></div>

      {/* 💕 Floating Twinkling Hearts */}
      <div className="absolute inset-0 pointer-events-none">
        {hearts.map((_, i) => (
          <span
            key={i}
            className="absolute text-rose-400 opacity-70 animate-twinkle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 12 + 8}px`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          >
            ♥
          </span>
        ))}
      </div>

      {/* 💎 Content */}
      <div className="relative z-10 text-center max-w-3xl">
        {!accepted ? (
          <>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-5xl sm:text-6xl md:text-7xl 
             text-rose-300 leading-tight"
              style={{
                fontFamily: "'Playfair Display', cursive",
              }}
            >
              Sidra… My Loveeeeee....
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="mt-6 text-lg sm:text-xl text-gray-300"
            >
              From 19th July to 4th February… every moment with you has been
              magical.
              <br />
              Will you be my Valentine? 💖
            </motion.p>

            <div className="relative mt-12 flex items-center justify-center gap-10">
              {/* YES BUTTON */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setAccepted(true)}
                className="px-10 py-4 rounded-full text-lg font-bold 
                           bg-rose-600 text-white 
                           shadow-[0_0_25px_rgba(255,0,120,0.7)]
                           hover:bg-rose-500 transition duration-300"
              >
                YES 💖
              </motion.button>

              {/* NO BUTTON */}
              <motion.button
                animate={{ x: noPosition.x, y: noPosition.y }}
                onMouseEnter={moveNoButton}
                onClick={moveNoButton}
                className="px-10 py-4 rounded-full text-lg font-bold 
                           bg-gray-800 text-white 
                           border border-white/20
                           absolute sm:static"
              >
                NO 😏
              </motion.button>
            </div>
          </>
        ) : (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 120 }}
          >
            <h1 className="text-5xl md:text-6xl font-extrabold text-rose-500 drop-shadow-[0_0_30px_rgba(255,0,100,0.8)]">
              YOU SAID YES 💍💖
            </h1>

            <p className="mt-6 text-gray-300 text-lg">
              Officially the happiest person alive. I LOVE YOU 💖
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
