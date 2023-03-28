import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Silla(props) {
  const { nodes, materials } = useGLTF("/static/office_chair.glb");
  return (
    <group {...props} dispose={null} scale={0.1}>
      <group rotation={[-Math.PI / 2, 0, 0]} >
        <group rotation={[Math.PI / 2, 0, 0]} >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.officeChair_phong1_0.geometry}
            material={materials.phong1}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/static/office_chair.glb");
