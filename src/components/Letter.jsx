import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Letter() {
  const [opened, setOpened] = useState(false);
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen bg-black flex items-center justify-center px-6 py-20 overflow-hidden">

      {/* 🌌 Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-rose-950/40 to-black"></div>

      {/* 🔙 Back Button */}
      <button
        onClick={() => navigate("/")}
        className="absolute top-6 left-6 z-20 px-5 py-2 rounded-full 
                   bg-white/10 backdrop-blur-md border border-white/20 
                   text-white hover:bg-white/20 transition"
      >
        ← Back
      </button>

      {!opened ? (
        /* ===================== ENVELOPE ===================== */
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative z-10 cursor-pointer"
          onClick={() => setOpened(true)}
        >
          <div className="relative w-80 h-56 bg-rose-900 rounded-lg shadow-[0_0_40px_rgba(255,0,100,0.4)] flex items-center justify-center">
            
            <motion.div
              initial={{ rotateX: 0 }}
              animate={{ rotateX: opened ? -180 : 0 }}
              transition={{ duration: 1 }}
              className="absolute top-0 left-0 w-full h-28 bg-rose-700 origin-top rounded-t-lg"
              style={{ transformOrigin: "top" }}
            />

            <span className="text-white text-lg tracking-widest z-10">
              Open Me 💌
            </span>
          </div>
        </motion.div>
      ) : (
        /* ===================== LETTER ===================== */
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative z-10 
                     w-[95%] sm:w-[80%] md:w-[60%] lg:w-[450px]
                     min-h-[85vh]
                     bg-[#f5efe6]
                     rounded-xl
                     shadow-[0_0_120px_rgba(255,0,100,0.25)]
                     border border-[#e8dfd4]
                     overflow-hidden"
        >

          {/* 🌸 Top Right Floral Decoration */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-rose-700 rounded-full blur-2xl opacity-40 translate-x-10 -translate-y-10"></div>
          <div className="absolute top-6 right-6 w-20 h-20 bg-rose-800 rounded-full blur-xl opacity-60"></div>

          {/* 🌹 Bottom Floral Decoration */}
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-rose-900 rounded-full blur-3xl opacity-40 -translate-x-10 translate-y-10"></div>
          <div className="absolute bottom-6 left-6 w-24 h-24 bg-rose-800 rounded-full blur-xl opacity-60"></div>

          {/* ✍ Letter Content */}
          <div className="relative z-10 px-12 pt-20 pb-16">

            <h1
              className="text-center text-3xl sm:text-4xl font-bold mb-8 text-rose-700"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              My Dearest Sidra 💌
            </h1>

            <div
              className="text-base sm:text-lg leading-relaxed space-y-6 text-gray-800"
              style={{ fontFamily: "'Dancing Script', cursive" }}
            >
              <p>
                From the very first time we met on{" "}
                <span className="text-rose-600">19th July</span>, something felt
                different.
              </p>

              <p>
                And when we finally met in person on{" "}
                <span className="text-rose-600">4th February</span>, it felt like
                the world paused just for us.
              </p>

              <p>
                You once said,
                <br />
                <span className="italic text-rose-600">
                  “Mujhe tumhe rose dena hai.”
                </span>
              </p>

              <p>
                And I replied,
                <br />
                <span className="italic text-rose-600">
                  “Mai toh roj lunga 😂”
                </span>
              </p>

              <p>
                But truth is… I don’t just want roses.
                <br />
                I want your laughter.
                <br />
                Your madness.
                <br />
                Your love.
              </p>

              <p>
                You’ve made my world brighter, calmer, and infinitely beautiful.
              </p>

              <p className="text-rose-700 text-xl mt-6">
                I love you, Sidra.
              </p>

              <p className="text-right mt-10 text-lg">
                Forever yours, <br />
                <span className="text-rose-700 font-bold">
                  Vaibhav ❤️
                </span>
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </section>
  );
}
