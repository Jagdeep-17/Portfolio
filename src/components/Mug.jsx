


import { Canvas } from "@react-three/fiber";
import { Environment, useGLTF } from "@react-three/drei";
import mug from "../assets/models/mug.glb"

function MugModel() {
  const { scene } = useGLTF(mug);

  return (
    <primitive
      object={scene}
      scale={13}
      position={[0,0, 0]}
      rotation={[0, Math.PI /2.5, 0]} // Slightly rotate the shelf
    />
  );
}

export default function Mug() {
  return (
    <div className="w-[50vw] h-[50vh] absolute  top-30 -rotate-6" >
      <Canvas
        camera={{
          position: [0, 0.5, 8],
          fov: 45,
        }}
      >
       
         {/* <axesHelper args={[5]} /> */}
  {/* <gridHelper args={[20, 20]} /> */}
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
        <MugModel />
      </Canvas>
    </div>
  );
}

useGLTF.preload(mug);