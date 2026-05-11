'use client';

import BlurText from '@/components/BlurText';
import MagnetLines from '@/components/MagnetLines';

export default function Home() {
  const handleAnimationComplete = () => {
    console.log('Animation completed!');
  };

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center gap-20 p-10">
      <BlurText
        text="Magnetic UI Animation"
        delay={150}
        animateBy="words"
        direction="top"
        onAnimationComplete={handleAnimationComplete}
        className="text-5xl font-bold text-center"
      />

      <MagnetLines
        rows={10}
        columns={12}
        containerSize="40vmin"
        lineColor="#efefef"
        lineWidth="2px"
        lineHeight="30px"
        baseAngle={-10}
        style={{ margin: '2rem auto' }}
      />
    </main>
  );
}