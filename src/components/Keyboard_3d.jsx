import { useGLTF } from "@react-three/drei";
import keyboard from "../assets/models/keyboard.glb";

export default function Keyboard_3d() {
  const { scene } = useGLTF(keyboard);

  return (
    <primitive
      object={scene}
      position={[-1.9, -2.4, -0.5]}
      rotation={[1.14, 0, 0]}
      scale={0.006}
    />
  );
}

useGLTF.preload(keyboard);