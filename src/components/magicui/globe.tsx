"use client";
import createGlobe from "cobe";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface GlobeProps { className?: string; }

export function Globe({ className }: GlobeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    let phi = 0;
    if (!canvasRef.current) return;
    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 1200, height: 1200,
      phi: 0, theta: 0,
      dark: 1, diffuse: 1.2, mapSamples: 16000, mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3], markerColor: [0.1, 0.8, 1], glowColor: [1, 1, 1],
      markers: [{ location: [14.0723, -87.1921], size: 0.1 }], // Honduras
      onRender: (state) => { state.phi = phi; phi += 0.005; },
    });
    return () => globe.destroy();
  }, []);
  return (
    <div className={cn("flex items-center justify-center z-[10] w-full max-w-[600px] aspect-square mx-auto", className)}>
      <canvas ref={canvasRef} style={{ width: 600, height: 600, maxWidth: "100%", aspectRatio: 1 }} />
    </div>
  );
}
