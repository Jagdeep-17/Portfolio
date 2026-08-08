import { useGLTF } from "@react-three/drei";
import shelf from "../assets/models/shelf.glb";

function ShelfModel() {
  const { scene } = useGLTF(shelf);

  return (
    <primitive
      object={scene}
      position={[0, -0.4, 0]}
      rotation={[0, 0, 0]}
      scale={3.3}
    />
  );
}

export default function Shelf3D() {
  return <ShelfModel />;
}

useGLTF.preload(shelf);