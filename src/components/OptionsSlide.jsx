import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function OptionsSlide() {
  const navigate = useNavigate();

  const items = [
    { title: "LETTER 💌", path: "/letter" },
    { title: "GALLERY 🖼", path: "/gallery" },
    { title: "QUIZZES 🎯", path: "/quiz" },
  ];

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">

      {/* 🖤 TOP BLACK FADE */}
      <div className="pointer-events-none absolute top-0 left-0 w-full h-32 
                      bg-gradient-to-b from-black to-transparent z-20" />

      {/* 🖤 BOTTOM BLACK FADE */}
      <div className="pointer-events-none absolute bottom-0 left-0 w-full h-32 
                      bg-gradient-to-t from-black to-transparent z-20" />

      {/* 🌑 MAIN COLUMNS */}
      <div className="h-full w-full flex flex-col md:flex-row">

        {items.map((item, index) => (
          <motion.div
            key={index}
            onClick={() => navigate(item.path)}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.4 }}
            className="flex-1 flex items-center justify-center cursor-pointer 
                       border-white/10 md:border-r last:md:border-r-0 
                       border-b md:border-b-0 border-opacity-20"
          >
            <motion.h1
              whileHover={{ scale: 1.08 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl 
                         font-extrabold text-white tracking-widest 
                         drop-shadow-[0_0_25px_rgba(255,0,100,0.5)]"
            >
              {item.title}
            </motion.h1>
          </motion.div>
        ))}

      </div>
    </section>
  );
}
