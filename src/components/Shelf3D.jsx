import { Canvas } from "@react-three/fiber";
import { Environment, useGLTF } from "@react-three/drei";
import shelf from "../assets/models/shelf.glb";

function ShelfModel() {
  const { scene } = useGLTF(shelf);

  return (
    <primitive
      object={scene}
      scale={3}
      position={[0, -0.3, 0]}
    //   rotation={[0, Math.PI / 8, 0]} // Slightly rotate the shelf
    />
  );
}

export default function Shelf3D() {
  return (
    <div className="w-full h-full">
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
        <ShelfModel />
      </Canvas>
    </div>
  );
}

useGLTF.preload(shelf);