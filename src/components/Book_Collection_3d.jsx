import { Canvas } from "@react-three/fiber";
import {
  Environment,
  OrbitControls,
  useGLTF,
} from "@react-three/drei";
import { Leva, useControls } from "leva";

import books from "../assets/models/books_collection.glb";

function BooksModel() {
  const { scene } = useGLTF(books);



  return (
    <primitive
     object={scene}
    rotation={[0.24, -0.50, -0.10]}
    position={[4, 0.4, -6.4]}
    scale={0.14}
    />
  );
}

export default function Book_Collection_3d() {
  return (
    <>

      <div className="w-[50vw] h-[50vh] absolute top-5 right-0 translate-x-2 overflow-hidden">
        <Canvas
          camera={{
            position: [2, 0, 8],
            fov: 45,
          }}
        >
          <ambientLight intensity={1.8} />

          <directionalLight
            position={[5, 8, 5]}
            intensity={3}
          />

          <directionalLight
            position={[-5, 3, -5]}
            intensity={1}
          />

          <Environment preset="city" />

          <BooksModel />

        </Canvas>
      </div>
    </>
  );
}

useGLTF.preload(books);