import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import Room from "./Room";
import HeroLights from "./HeroLights";

export default function HeroExperience() {
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
      <HeroLights />
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
      <group
        scale={isMobile ? 0.7 : 1}
        position={[0, -3, 0]}
        rotation={[0, -Math.PI / 4, 0]}
      >
        <Room />
      </group>
    </Canvas>
  );
}
