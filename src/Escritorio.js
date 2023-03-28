import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Escritorio(props) {
  const { nodes, materials } = useGLTF("/static/desk_asset.glb");
  return (
    <group {...props} dispose={null} scale={0.1}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group
            position={[78.61, 42.85, -45.48]}
            rotation={[-Math.PI / 2, 0, 0]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Can_Momster_M_Can_Momster_0.geometry}
              material={materials.M_Can_Momster}
            />
          </group>
          <group
            position={[75.13, 55.11, -74]}
            rotation={[-Math.PI / 2, 0, -0.74]}
            scale={100}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Monitor_Wide_M_Monitor_Wide_Screen_0.geometry}
              material={materials.M_Monitor_Wide_Screen}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Monitor_Wide_M_Monitor_Wide_0.geometry}
              material={materials.M_Monitor_Wide}
            />
          </group>
          <group
            position={[56.28, 37.56, -39.78]}
            rotation={[-Math.PI / 2, 0, -1.13]}
            scale={100}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Keyboard_M_Keyboard_0.geometry}
              material={materials.M_Keyboard}
            />
          </group>
          <group
            position={[10.18, 6.96, -6.35]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Desk_M_Desk_Top_0.geometry}
              material={materials.M_Desk_Top}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Desk_M_Desk_Bottom_0.geometry}
              material={materials.M_Desk_Bottom}
            />
          </group>
          <group
            position={[12.17, 48.65, -73.08]}
            rotation={[-Math.PI / 2, 0, -0.22]}
            scale={100}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["1_M_HUION_KAMVAS_GT_221_PRO_0"].geometry}
              material={materials.M_HUION_KAMVAS_GT_221_PRO}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/static/desk_asset.glb");
