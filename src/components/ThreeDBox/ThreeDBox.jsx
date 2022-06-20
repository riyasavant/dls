import { useRef, useState } from "react";
import { Canvas, useFrame } from "../../../node_modules/@react-three/fiber";

const Box = (props) => {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef();
  // Hold state for hovered and clicked events
  const [clicked, click] = useState(false);
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (ref.current.rotation.x += 0.02));
  // Return the view, these are regular Threejs elements expressed in JSX
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
