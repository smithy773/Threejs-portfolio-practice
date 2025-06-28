import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export default function HeroExperience() {
  const isTablet = false;
  return (
    <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
      <ambientLight intensity={0.7} color="1a1a40" />

      <OrbitControls
        enablePan={false}
        // dummy variable right now. enableZoom should be enabled on desktop and disabled on mobile
        enableZoom={!isTablet}
        // maxDistance / minDistance for zooming out / in
        maxDistance={20}
        minDistance={5}
        // how far you can move the point of view up and down. This is done to make sure you cannot look at the model directly from the top, down or even look downwards where the bottom would be seen
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
      />
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="teal" />
      </mesh>
    </Canvas>
  );
}
