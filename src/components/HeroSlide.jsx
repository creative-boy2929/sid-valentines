import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Snoopy from "../Snoopy.png";

function HeroSlide() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Reduce motion intensity (better for mobile performance)
  const rotateImage = useTransform(scrollYProgress, [0, 1], [0, -4]);
  const rotateText = useTransform(scrollYProgress, [0, 1], [0, 3]);
  const yShift = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 md:px-12"
    >
      {/* 🌌 BACKGROUND IMAGE */}
      <motion.div
        style={{ scale: bgScale }}
        className="absolute inset-0 -z-10"
      >
        <img
          src="valpaper (1).jpg"
          alt="Background"
          className="w-full h-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/10 to-black/100"></div>
      </motion.div>

      {/* 🌟 CONTENT */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center w-full max-w-7xl">

        {/* LEFT — TEXT */}
        <motion.div
          style={{ rotate: rotateText, y: yShift }}
          className="z-10 text-center md:text-left"
        >
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight text-white drop-shadow-[0_0_15px_rgba(255,0,100,0.4)]">
            I LOVE YOU
          </h1>

          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold text-rose-500 mt-3 md:mt-4 drop-shadow-[0_0_20px_rgba(255,0,100,0.6)]">
            SIDRA
          </h1>

          <p className="mt-5 text-gray-300 text-base sm:text-lg max-w-md mx-auto md:mx-0">
            From 19th July to forever ❤️  
            Every scroll is another memory with you.
          </p>
        </motion.div>

        {/* RIGHT — IMAGE */}
        <motion.div
          style={{ rotate: rotateImage, y: yShift }}
          className="relative flex justify-center"
        >
          <div className="relative rounded-3xl overflow-hidden w-[85%] sm:w-[70%] md:w-full max-w-md md:max-w-none">
            <img
              src={Snoopy}  // 👈 better if placed in public folder
              alt="Romantic"
              className="object-contain w-full h-[300px] sm:h-[380px] md:h-[520px]"
            />
          </div>
        </motion.div>
      </div>

      {/* ⬇ Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.8 }}
          className="flex flex-col items-center text-white opacity-70"
        >
          <span className="text-xs tracking-widest">Scroll</span>
          <div className="w-[2px] h-8 bg-white mt-2"></div>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSlide;
