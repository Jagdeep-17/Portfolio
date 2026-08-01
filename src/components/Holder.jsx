import { Canvas } from "@react-three/fiber";
import { Environment, useGLTF } from "@react-three/drei";
import holder from "../assets/models/pen_holder.glb"

function HolderModel() {
  const { scene } = useGLTF(holder);

  return (
    <primitive
      object={scene}
      scale={1.8}
      position={[0, -0.6, 0]}
    //   rotation={[0, Math.PI / 8, 0]} // Slightly rotate the shelf
    />
  );
}

export default function Holder() {
  return (
    <div className="w-[30vw] h-[30vh] absolute top-0 left-100 -translate-x-1/2 " >
      <Canvas
        camera={{
          position: [0, 0.5, 8],
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

        {/* HDR Environment */}
        <Environment preset="city" />

        {/* 3D Model */}
        <HolderModel />
      </Canvas>
    </div>
  );
}

useGLTF.preload(holder);