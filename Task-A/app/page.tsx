"use client";

import BlurText from "@/components/BlurText";
import MagnetLines from "@/components/MagnetLines";

export default function Home() {
  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center gap-20 p-10">
        <BlurText
        text="Hover over this entire sentence"
        className="text-6xl font-bold text-white"
      />
      <MagnetLines
        rows={10}
        columns={12}
        containerSize="40vmin"
        lineColor="#efefef"
        lineWidth="2px"
        lineHeight="30px"
        baseAngle={-10}
        style={{ margin: "2rem auto" }}
      />
    </main>
  );
}
