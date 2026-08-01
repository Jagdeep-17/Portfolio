

import { OrbitControls } from "@react-three/drei";

import { Canvas } from "@react-three/fiber";
import { Environment, useGLTF } from "@react-three/drei";
import plant from "../assets/models/plant.glb"

function PlantModel() {
  const { scene } = useGLTF(plant);

  return (
    <primitive
      object={scene}
      scale={11}
      position={[2,0.3, 0]}
      rotation={[0, Math.PI /2.5, 0]} // Slightly rotate the shelf
    />
  );
}

export default function Mug() {
  return (
    <div className="w-[40vw] h-[50vh] absolute top-5 right-2 translate-x-2 overflow-visible " >
      <Canvas
        camera={{
          position: [2, 0, 8],
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
        <PlantModel />
      </Canvas>
    </div>
  );
}

useGLTF.preload(plant);