import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

// Use your real images here
import img1 from "../img1.jpg";
import img2 from "../img2.jpg";
import img3 from "../img3.jpg";
import img4 from "../img4.jpg";
import img5 from "../img5.jpg";
import img6 from "../img6.jpg";
import img7 from "../img7.jpg";
import img8 from "../img8.jpg";
import img9 from "../img9.jpg";
import img10 from "../img10.jpg";
import img11 from "../img11.jpg";
import img12 from "../img12.jpg";
import img13 from "../img13.jpg";
import img14 from "../img14.jpg";
import img15 from "../img15.jpg";



export default function Gallery() {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    img1, img2, img3, img4,
    img5, img6, img7, img8,
    img9, img10, img11, img12, img13 , img14,img15
  ];

  /* ❤️ Improved Heart Shape */
  const heartPixels = [];
  const density = 0.12; // smaller = smoother

  for (let y = -1.5; y <= 1.5; y += density) {
    for (let x = -1.5; x <= 1.5; x += density) {

      // Vertical stretch for better proportions
      const scaledY = y * 1.25;

      const formula =
        Math.pow(x * x + scaledY * scaledY - 1, 3) -
        x * x * Math.pow(scaledY, 3);

      if (formula <= 0) {
        heartPixels.push({ x, y: scaledY });
      }
    }
  }

  const sizeMultiplier = 300;
  const tileSize = 40;

  return (
    <section className="relative min-h-screen bg-black flex flex-col items-center px-6 py-20">

      {/* 🌌 Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-rose-950/40 to-black -z-10"></div>

      {/* 🔙 Back Button */}
      <button
        onClick={() => navigate("/")}
        className="absolute top-6 left-6 z-20 px-5 py-2 rounded-full 
                   bg-white/10 backdrop-blur-md border border-white/20 
                   text-white hover:bg-white/20 transition"
      >
        ← Back
      </button>

      {/* 💖 Title */}
      <h1
        className="text-6xl text-rose-300 mb-20 text-center"
        style={{ fontFamily: "'Great Vibes', cursive" }}
      >
        Our Heart 💕
      </h1>

      {/* ❤️ HEART CONTAINER */}
      <div
        className="relative mt-10"
        style={{
          width: sizeMultiplier * 2,
          height: sizeMultiplier * 2,
        }}
      >
        {heartPixels.map((point, index) => {
          const img = images[index % images.length];

          return (
            <div
              key={index}
              onClick={() => setSelectedImage(img)}
              className="absolute overflow-hidden rounded-md 
                         shadow-[0_0_15px_rgba(255,0,100,0.4)]
                         hover:scale-110 cursor-pointer
                         transition duration-300"
              style={{
                width: tileSize,
                height: tileSize,
                left:
                  sizeMultiplier +
                  point.x * sizeMultiplier -
                  tileSize / 2,
                top:
                  sizeMultiplier -
                  point.y * sizeMultiplier -
                  tileSize / 2,
              }}
            >
              <img
                src={img}
                alt="memory"
                className="w-full h-full object-cover"
              />
            </div>
          );
        })}
      </div>

      {/* 🌙 IMAGE MODAL */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-md 
                       flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            {/* Image Container */}
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-4 -right-4 bg-white text-black 
                           rounded-full w-10 h-10 text-xl 
                           shadow-lg hover:scale-110 transition"
              >
                ✕
              </button>

              <img
                src={selectedImage}
                alt="Full view"
                className="max-h-[80vh] max-w-[90vw] 
                           rounded-xl shadow-[0_0_40px_rgba(255,0,100,0.6)]"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
