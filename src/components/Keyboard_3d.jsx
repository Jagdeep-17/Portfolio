import { Canvas } from "@react-three/fiber";
import {
  Environment,
  OrbitControls,
  useGLTF,
} from "@react-three/drei";
import { Leva, useControls } from "leva";
import keyboard from "../assets/models/keyboard.glb";

function KeyModel() {
  const { scene } = useGLTF(keyboard);

  

  return (
   <primitive
      object={scene}
      rotation={[1.27, 0, 0]}
      scale={0.035}
      position={[-11.2, -3, 0]}
    />
  );
}

export default function Keyboard3D() {
  return (
    <>
      {/* Debug Panel */}

      <div className="absolute bottom-2 left-1/2 h-[50vh] w-[60vw] -translate-x-1/2">
        <Canvas
          camera={{
            position: [0, 1, 30],
            fov: 45,
          }}
        >
          {/* Lights */}
          <ambientLight intensity={2} />

          <directionalLight
            position={[5, 8, 5]}
            intensity={3}
          />

          <directionalLight
            position={[-5, 5, -5]}
            intensity={1}
          />

          {/* Environment */}
          <Environment preset="city" />

          

          {/* Model */}
          <KeyModel />

          {/* Camera Controls */}
          {/* <OrbitControls
            enableDamping
            dampingFactor={0.08}
          /> */}
        </Canvas>
      </div>
    </>
  );
}

useGLTF.preload(keyboard);