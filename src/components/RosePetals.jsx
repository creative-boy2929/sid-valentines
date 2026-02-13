import { useEffect, useState } from "react";

export default function RosePetals() {
  const [petals, setPetals] = useState([]);

  useEffect(() => {
    const generatePetals = () => {
      const newPetals = Array.from({ length: 25 }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        animationDuration: 8 + Math.random() * 7,
        size: 15 + Math.random() * 20,
        delay: Math.random() * 5,
      }));
      setPetals(newPetals);
    };

    generatePetals();
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
      {petals.map((petal) => (
        <span
          key={petal.id}
          className="absolute animate-fall"
          style={{
            left: `${petal.left}%`,
            width: petal.size,
            height: petal.size,
            animationDuration: `${petal.animationDuration}s`,
            animationDelay: `${petal.delay}s`,
          }}
        >
          🌹
        </span>
      ))}
    </div>
  );
}
