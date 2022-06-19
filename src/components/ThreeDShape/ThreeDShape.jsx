import { FunctionComponent, useRef, useState } from "react";
import { Canvas, useFrame, OrbitControls } from "@react-three/fiber";
import { Icosahedron } from "@react-three/drei";

const IcosahedronShape = (props) => {
  // This reference gives us direct access to the THREE.Mesh object
  // Hold state for hovered and clicked events
  const ref = useRef();
  const [clicked, click] = useState(false);
  useFrame((state, delta) => (ref.current.rotation.y += 0.01));
  // Subscribe this component to the render-loop, rotate the mesh every frame
  // Return the view, these are regular Threejs elements expressed in JSX
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
