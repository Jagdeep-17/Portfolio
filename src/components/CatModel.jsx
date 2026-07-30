import { Canvas } from "@react-three/fiber";
import { Environment, useGLTF } from "@react-three/drei";
import Cat from "../assets/models/cat.glb";

function CatModel() {
  const { scene } = useGLTF(Cat);

  return (
    <primitive
      object={scene}
      scale={0.4}
      position={[0, -3, 0]}
    />
  );
}

export default function Cat3D() {
  return (
    <div className="w-[50vw] h-[50vh] absolute top-30 right-6">
      <Canvas
        camera={{
          position: [0, 0.5, 8],
          fov: 45,
        }}
      >
        <axesHelper args={[5]} />

        <ambientLight intensity={1.8} />

        <directionalLight
          position={[5, 8, 5]}
          intensity={3}
        />
<gridHelper args={[20, 20]} />
        <directionalLight
          position={[-5, 3, -5]}
          intensity={1}
        />

        <Environment preset="city" />

        <CatModel />
      </Canvas>
    </div>
  );
}

useGLTF.preload(Cat);