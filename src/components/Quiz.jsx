import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import RosePetals from "./RosePetals";

export default function Quiz() {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const questions = [
    {
      question: "When did we first meet online? 💬",
      options: ["19th July", "4th February", "14th Feb", "1st Jan"],
      answer: "19th July",
    },
    {
      question: "When did we meet in person? 🌹",
      options: ["25th Dec", "4th February", "10th March", "2nd Aug"],
      answer: "4th February",
    },
    {
      question: "What did you once say? 😏",
      options: [
        "I want chocolate",
        "Mujhe tumhe rose dena hai",
        "Let's travel",
        "Buy me food",
      ],
      answer: "Mujhe tumhe rose dena hai",
    },
    {
      question: "What do I want forever? ❤️",
      options: [
        "Just roses",
        "Your laughter & love",
        "Nothing",
        "Silence",
      ],
      answer: "Your laughter & love",
    },
  ];

  const handleAnswer = (option) => {
    if (option === questions[current].answer) {
      setScore((prev) => prev + 1);
    }

    if (current + 1 < questions.length) {
      setCurrent((prev) => prev + 1);
    } else {
      setFinished(true);
    }
  };

  return (
    <section className="relative min-h-screen bg-black flex flex-col items-center justify-center px-6 py-20 overflow-hidden">

      {/* 🌌 Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-rose-950/40 to-black -z-10"></div>

      {/* 🌹 Falling Petals */}
      <RosePetals />

      {/* 🔙 Back Button */}
      <button
        onClick={() => navigate("/")}
        className="absolute top-6 left-6 z-20 px-5 py-2 rounded-full 
                   bg-white/10 backdrop-blur-md border border-white/20 
                   text-white hover:bg-white/20 transition"
      >
        ← Back
      </button>

      <AnimatePresence mode="wait">
        {!finished ? (
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.6 }}
            className="relative z-10 w-full max-w-2xl text-center"
          >
            <h1
              className="text-3xl sm:text-4xl md:text-5xl text-rose-300 mb-12"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {questions[current].question}
            </h1>

            <div className="grid gap-6">
              {questions[current].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(option)}
                  className="py-4 px-6 rounded-xl 
                             bg-white/10 backdrop-blur-md
                             border border-white/20
                             text-white text-lg
                             hover:bg-rose-800/40
                             hover:scale-105
                             transition duration-300
                             shadow-[0_0_20px_rgba(255,0,100,0.3)]"
                >
                  {option}
                </button>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="result"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 text-center max-w-xl"
          >
            {score === questions.length ? (
              <>
                <h1 className="text-5xl text-rose-400 mb-6">
                  Perfect Score ❤️
                </h1>
                <p className="text-white text-lg">
                  You know our love story perfectly.
                  This is why I love you so much SIDRA. 💕
                </p>
              </>
            ) : (
              <>
                <h1 className="text-4xl text-rose-400 mb-6">
                  Almost There 😌
                </h1>
                <p className="text-white text-lg">
                  Even if you forgot something…
                  I’ll remind you every single day. ❤️
                </p>
              </>
            )}

            <button
              onClick={() => navigate("/")}
              className="mt-10 px-6 py-3 rounded-full
                         bg-rose-700 text-white
                         hover:bg-rose-600
                         transition shadow-lg"
            >
              Back Home 💌
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
