import { FunctionComponent, useRef, useState } from "react";
import { useLoader } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Suspense } from "react";

import { Canvas } from "@react-three/fiber";

const Model = () => {
  const gltf = useLoader(GLTFLoader, "./wood.gltf");
  return (
    <>
      <primitive object={gltf.scene} scale={0.5} />
    </>
  );
};

export const ThreeDGLTF = (props) => {
  return (
    <div>
      <Canvas>
        <Suspense fallback={null}>
          <Model />
          <OrbitControls />
          {/* <Environment preset="sunset" background /> */}
        </Suspense>
      </Canvas>
    </div>
  );
};
