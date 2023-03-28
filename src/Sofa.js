import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Sofa(props) {
  const { nodes, materials } = useGLTF("/static/large_corner_sectional_sofa.glb");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.12}>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={50}>
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes.large_sectional_couch_Low_Poly_Material002_0.geometry
              }
              material={materials["Material.002"]}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/static/large_corner_sectional_sofa.glb");
