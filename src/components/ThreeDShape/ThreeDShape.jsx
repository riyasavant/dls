import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

const IcosahedronShape = (props) => {
  const ref = useRef();
  const [clicked, click] = useState(false);
  useFrame((state, delta) => (ref.current.rotation.y += 0.01));

  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={(event) => click(!clicked)}
    >
      <icosahedronGeometry args={[3, 0]} />
      <meshStandardMaterial color={"purple"} />
    </mesh>
  );
};

export const ThreeDShape = (props) => {
  return (
    <Canvas>
      <ambientLight intensity={0.1} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={0} />
      <pointLight position={[-10, -10, -10]} />
      <IcosahedronShape />
    </Canvas>
  );
};