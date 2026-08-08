import { useGLTF } from "@react-three/drei";
import mug from "../assets/models/mug.glb";

function MugModel() {
  const { scene } = useGLTF(mug);

  return (
    <primitive
      object={scene}
      position={[-5.8, 1.0, -2.1]}
      rotation={[0.14, 1.87, 0.09]}
      scale={10.2}
    />
  );
}

export default function Mug() {
  return <MugModel />;
}

useGLTF.preload(mug);