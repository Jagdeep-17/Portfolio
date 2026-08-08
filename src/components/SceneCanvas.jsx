import { Canvas } from "@react-three/fiber";

import Keyboard_3d from "./Keyboard_3d";
import Mug from "./Mug";
import Book_Collection_3d from "./Book_Collection_3d";
import GoingMerry from "./GoingMerry";
import Shelf3D from "./Shelf3D";

function Scene() {
  return (
    <>
      <perspectiveCamera
        makeDefault
        position={[0, 0, 5]}
        fov={50}
      />

      <ambientLight intensity={2} />

      <Keyboard_3d />
      <Mug />
      <Book_Collection_3d />
      <GoingMerry />
      <Shelf3D />
    </>
  );
}

export default function SceneCanvas() {
  return (
    <Canvas className="absolute inset-0 z-50">
      <Scene />
    </Canvas>
  );
}