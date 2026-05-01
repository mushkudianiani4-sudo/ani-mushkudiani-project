import { useEffect, useState } from "react";
import { useTheme } from "../contexts/ThemeContext";

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
}

const StardustCursor = () => {
  const { theme } = useTheme();
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    if (theme !== "dark") {
      setStars([]);
      return;
    }

    let starId = 0;
    let lastTime = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      if (now - lastTime < 40) return;
      lastTime = now;

      const newStar: Star = {
        id: starId++,
        x: e.clientX,
        y: e.clientY,
        size: Math.random() * 8 + 4,
      };

      setStars((prev) => [...prev, newStar]);

      setTimeout(() => {
        setStars((prev) => prev.filter((s) => s.id !== newStar.id));
      }, 1000);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [theme]);

  if (theme !== "dark") return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-orange-100 animate-stardust"
          style={{
            left: star.x,
            top: star.y,
            width: star.size,
            height: star.size,
            boxShadow: "0 0 8px 2px rgba(253, 184, 19, 0.6)",
          }}
        />
      ))}
    </div>
  );
};

export default StardustCursor;
