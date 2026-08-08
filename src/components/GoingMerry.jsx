import { useGLTF } from "@react-three/drei";
import ship from "../assets/models/GoingMerry.glb";

function ShipModel() {
  const { scene } = useGLTF(ship);

  return (
    <primitive
      object={scene}
      position={[0, 1.7, -1.5]}
      rotation={[-5.65, 0.83, -0.18]}
      scale={0.56}
    />
  );
}

export default function GoingMerry() {
  return <ShipModel />;
}

useGLTF.preload(ship);