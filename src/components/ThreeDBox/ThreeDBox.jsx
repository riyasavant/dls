import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

const Box = (props) => {
  const ref = useRef();
  const [clicked, click] = useState(false);
  useFrame((state, delta) => (ref.current.rotation.x += 0.02));

  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={(event) => click(!clicked)}
    >
      <boxGeometry args={[3, 3, 3]} />
      <meshStandardMaterial color={"pink"} />
    </mesh>
  );
};

export const ThreeDBox = (props) => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.2} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <Box number={[0, 0, 0]} />
    </Canvas>
  );
};