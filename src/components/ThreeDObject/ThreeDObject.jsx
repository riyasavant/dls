import { Environment, OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { useLoader } from "@react-three/fiber";

import { Canvas } from "@react-three/fiber";

const Model = () => {
  const obj = useLoader(OBJLoader, "/FinalBaseMesh.obj");
  return <primitive object={obj} scale={0.1} />;
};

export const ThreeDObject = (props) => {
  return (
    <div style={{ height: 300, width: 300 }}>
      <Canvas>
        <Suspense fallback={null}>
          <ambientLight intensity={0.1} />
          <spotLight position={[10, 10, 10]} angle={0.2} penumbra={1} />
          <pointLight position={[-10, -10, -10]} />
          <Model />
          <OrbitControls />
          {/* <Environment preset="sunset" background /> */}
        </Suspense>
      </Canvas>
    </div>
  );
};
