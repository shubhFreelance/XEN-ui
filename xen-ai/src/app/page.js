'use client'

import Image from "next/image";
import Styles from "./page.module.css"
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useSpring } from '@react-spring/core';
import { a } from '@react-spring/web';
import Overlay from './Overlay';
import Scene from './Scene';

export default function Home() {
  const [{ background, fill }, set] = useSpring({ background: 'rgb(18, 17, 17)', fill: '#202020' }, [])
  return (
    <>
    <a.main style={{ background }}>
      <Canvas className="canvas" dpr={[1, 2]}>
        <Scene setBg={set} />
        <OrbitControls enablePan={false} enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
      </Canvas>
      <Overlay fill={fill} />
    </a.main>
    </>
  );
}
