import { useEffect } from "react";

export default function HeartCursor() {
  useEffect(() => {
    if (window.innerWidth < 768) return; // Disable on mobile

    const handleMouseMove = (e) => {
      const heart = document.createElement("div");
      heart.innerHTML = "❤️";
      heart.style.position = "fixed";
      heart.style.left = e.clientX + "px";
      heart.style.top = e.clientY + "px";
      heart.style.pointerEvents = "none";
      heart.style.fontSize = "14px";
      heart.style.animation = "floatUp 1s linear forwards";
      document.body.appendChild(heart);

      setTimeout(() => heart.remove(), 1000);
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () =>
      document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return null;
}
