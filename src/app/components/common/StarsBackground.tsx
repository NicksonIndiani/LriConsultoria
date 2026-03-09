import { useEffect, useRef, useCallback } from "react";
import { cn } from "../ui/utils";

interface Star {
  x: number;
  y: number;
  z: number;
  radius: number;
  opacity: number;
  speed: number;
}

interface StarsBackgroundProps extends React.ComponentProps<"div"> {
  starColor?: string;
  starCount?: number;
  speed?: number;
  factor?: number;
}

export function StarsBackground({
  starColor = "#A47552",
  starCount = 80,
  speed = 0.3,
  factor = 0.05,
  className,
  ...props
}: StarsBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const animationRef = useRef<number>(0);
  const mouseRef = useRef({ x: 0, y: 0, active: false });

  const createStars = useCallback(
    (width: number, height: number): Star[] => {
      return Array.from({ length: starCount }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        z: Math.random(),
        radius: Math.random() * 1.8 + 0.4,
        opacity: Math.random() * 0.5 + 0.2,
        speed: (Math.random() * 0.5 + 0.5) * speed,
      }));
    },
    [starCount, speed]
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const dpr = window.devicePixelRatio || 1;
      canvas.width = parent.clientWidth * dpr;
      canvas.height = parent.clientHeight * dpr;
      canvas.style.width = `${parent.clientWidth}px`;
      canvas.style.height = `${parent.clientHeight}px`;
      ctx.scale(dpr, dpr);
      starsRef.current = createStars(parent.clientWidth, parent.clientHeight);
    };

    resize();

    const handleMouse = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        active: true,
      };
    };

    const handleLeave = () => {
      mouseRef.current.active = false;
    };

    canvas.addEventListener("mousemove", handleMouse, { passive: true });
    canvas.addEventListener("mouseleave", handleLeave);
    window.addEventListener("resize", resize);

    let time = 0;

    const animate = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const w = parent.clientWidth;
      const h = parent.clientHeight;

      ctx.clearRect(0, 0, w, h);
      time += 0.01;

      for (const star of starsRef.current) {
        // Gentle floating movement
        const floatX = Math.sin(time * star.speed + star.z * 10) * 0.4;
        const floatY = Math.cos(time * star.speed * 0.7 + star.z * 8) * 0.3;

        star.x += floatX;
        star.y += floatY;

        // Parallax from mouse
        let drawX = star.x;
        let drawY = star.y;

        if (mouseRef.current.active) {
          const dx = mouseRef.current.x - w / 2;
          const dy = mouseRef.current.y - h / 2;
          drawX += dx * factor * star.z;
          drawY += dy * factor * star.z;
        }

        // Wrap around edges
        if (star.x < -10) star.x = w + 10;
        if (star.x > w + 10) star.x = -10;
        if (star.y < -10) star.y = h + 10;
        if (star.y > h + 10) star.y = -10;

        // Twinkling opacity
        const twinkle = Math.sin(time * 2 + star.z * 20) * 0.2;
        const alpha = Math.max(0.15, Math.min(1, star.opacity + twinkle));

        // Glow layer (soft halo)
        ctx.beginPath();
        ctx.arc(drawX, drawY, star.radius * 3, 0, Math.PI * 2);
        ctx.fillStyle = starColor;
        ctx.globalAlpha = alpha * 0.15;
        ctx.fill();

        // Core with shadow glow
        ctx.shadowBlur = 8 + star.radius * 4;
        ctx.shadowColor = starColor;
        ctx.beginPath();
        ctx.arc(drawX, drawY, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = starColor;
        ctx.globalAlpha = alpha;
        ctx.fill();

        // Bright center
        ctx.shadowBlur = 0;
        ctx.beginPath();
        ctx.arc(drawX, drawY, star.radius * 0.4, 0, Math.PI * 2);
        ctx.fillStyle = "#FFFFFF";
        ctx.globalAlpha = alpha * 0.6;
        ctx.fill();
      }

      ctx.globalAlpha = 1;
      ctx.shadowBlur = 0;
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationRef.current);
      canvas.removeEventListener("mousemove", handleMouse);
      canvas.removeEventListener("mouseleave", handleLeave);
      window.removeEventListener("resize", resize);
    };
  }, [starColor, factor, createStars]);

  return (
    <div className={cn("absolute inset-0 pointer-events-none", className)} {...props}>
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-auto" />
    </div>
  );
}
