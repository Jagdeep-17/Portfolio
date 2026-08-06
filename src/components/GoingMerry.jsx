import { Canvas } from "@react-three/fiber";
import {
  Environment,
  OrbitControls,
  useGLTF,
} from "@react-three/drei";
import { Leva, useControls } from "leva";

import ship from "../assets/models/GoingMerry.glb";

function ShipModel() {
  const { scene } = useGLTF(ship);

  return (
    <primitive
      object={scene}
      rotation={[-6.1, 1.11, -0.18]}
      position={[1.0, -1.9, 0]}
      scale={1.1}
    />
  );
}

export default function GoingMerry() {
  return (
    <>
      {/* <Leva collapsed={false} /> */}

      {/* Anchor box - defines position, but overflow-visible so children can bleed out */}
      <div className="w-[30vw] h-[36vh] absolute top-0 left-1/2 -translate-x-1/2   overflow-visible pointer-events-none">

        {/* Oversized wrapper - THIS is what actually overflows the anchor above */}
        <div className="absolute -left-[40%] -top-[30%] w-[180%] h-[160%] pointer-events-auto">
          <Canvas
            camera={{
              position: [8, 0.5, 8],
              fov: 45,
            }}
          >
            {/* Lights */}
            <ambientLight intensity={1.8} />

            <directionalLight
              position={[5, 8, 5]}
              intensity={3}
            />

            <directionalLight
              position={[-5, 3, -5]}
              intensity={1}
            />

            {/* Environment */}
            <Environment preset="city" />

            {/* Model */}
            <ShipModel />

            {/* Camera Controls */}
            <OrbitControls
              enableZoom={false}
              enablePan={false}
              minPolarAngle={Math.PI / 2}
              maxPolarAngle={Math.PI / 2}
            />
          </Canvas>
        </div>
      </div>
    </>
  );
}

useGLTF.preload(ship);