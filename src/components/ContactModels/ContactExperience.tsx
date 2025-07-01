import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Computer from "./Computer";

export default function ContactExperience() {
  return (
    <Canvas camera={{ position: [0, 3, 7], fov: 45 }} shadows>
      <ambientLight intensity={0.5} color="#fff436" />
      <directionalLight position={[5, 5, 3]} intensity={2.5} color="#ffd9b3" />
      <spotLight
        position={[-5, 5, 5]}
        angle={0.15}
        penumbra={1}
        intensity={1}
        castShadow
      />

      <OrbitControls
        enableZoom={false}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
      />

      <group scale={0.03} position={[0, -1.5, -2]} castShadow>
        <Computer />
      </group>
    </Canvas>
  );
}
