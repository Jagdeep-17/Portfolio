import { useGLTF } from "@react-three/drei";
import books from "../assets/models/books_collection.glb";

function BooksModel() {
  const { scene } = useGLTF(books);

  return (
    <primitive
      object={scene}
      position={[14.6, 3.3, -7.3]}
      rotation={[0.38, -1.33, 0]}
      scale={0.13}
    />
  );
}

export default function Book_Collection_3d() {
  return <BooksModel />;
}

useGLTF.preload(books);