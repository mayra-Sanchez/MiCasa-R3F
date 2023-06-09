import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Piano(props) {
  const { nodes, materials } = useGLTF("/static/grand_piano.glb");
  return (
    <group {...props} dispose={null} scale={0.4}>
      <group rotation={[-Math.PI / 2, 0, 0]} >
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial.geometry}
            material={materials.chair_wood_mt}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_1.geometry}
            material={materials.chair_leather_mt}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_4.geometry}
            material={materials.piano_pedal_metal_mt}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_37.geometry}
            material={materials.piano_part04_mt}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_38.geometry}
            material={materials.piano_part04_mt}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_39.geometry}
            material={materials.piano_part04_mt}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_40.geometry}
            material={materials.piano_part04_mt}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_41.geometry}
            material={materials.piano_part04_mt}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_42.geometry}
            material={materials.piano_part04_mt}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_5.geometry}
            material={materials.piano_stand_mt}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_6.geometry}
            material={materials.piano_hinji01_mt}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_43.geometry}
            material={materials.piano_part03_mt}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_44.geometry}
            material={materials.piano_part03_mt}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_45.geometry}
            material={materials.piano_part03_mt}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_46.geometry}
            material={materials.piano_part03_mt}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_7.geometry}
            material={materials.piano_part03_mt}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_8.geometry}
            material={materials.piano_part03_mt}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_9.geometry}
            material={materials.piano_hinji01_mt}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_10.geometry}
            material={materials.piano_part08_mt}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_11.geometry}
            material={materials.piano_part08_mt}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_12.geometry}
            material={materials.piano_part08_mt}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_13.geometry}
            material={materials.piano_part08_mt}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_47.geometry}
            material={materials.piano_part07_mt}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_48.geometry}
            material={materials.piano_part07_mt}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_49.geometry}
            material={materials.piano_part07_mt}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_50.geometry}
            material={materials.piano_part07_mt}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_51.geometry}
            material={materials.piano_part07_mt}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_52.geometry}
            material={materials.piano_part07_mt}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_14.geometry}
            material={materials.piano_part07_mt}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_15.geometry}
            material={materials.piano_part07_mt}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_16.geometry}
            material={materials.piano_part06_mt}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_17.geometry}
            material={materials.piano_part06_mt}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_18.geometry}
            material={materials.piano_part06_mt}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_19.geometry}
            material={materials.piano_part06_mt}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_20.geometry}
            material={materials.piano_part05_mt}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_21.geometry}
            material={materials.piano_part05_mt}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_22.geometry}
            material={materials.piano_leg_wood01_mt}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_23.geometry}
            material={materials.piano_leg_roller01_mt}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_24.geometry}
            material={materials.piano_leg_wood01_mt}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_25.geometry}
            material={materials.piano_leg_roller01_mt}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_26.geometry}
            material={materials.piano_leg_wood01_mt}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_27.geometry}
            material={materials.piano_leg_roller01_mt}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_28.geometry}
            material={materials.piano_plate_mt}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_29.geometry}
            material={materials.piano_plate_mt}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_53.geometry}
            material={materials.piano_part02_mt}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_54.geometry}
            material={materials.piano_part02_mt}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_30.geometry}
            material={materials.piano_frame_mt}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_55.geometry}
            material={materials.piano_part01_mt}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_56.geometry}
            material={materials.piano_part01_mt}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_57.geometry}
            material={materials.piano_part01_mt}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_58.geometry}
            material={materials.piano_part01_mt}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_59.geometry}
            material={materials.piano_part01_mt}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_31.geometry}
            material={materials.piano_hinji01_mt}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_32.geometry}
            material={materials.piano_hinji02_mt}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_33.geometry}
            material={materials.piano_lid01_mt}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_34.geometry}
            material={materials.piano_lid02_mt}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_35.geometry}
            material={materials.piano_lid02_mt}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_36.geometry}
            material={materials.piano_hinji01_mt}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_3.geometry}
            material={materials.piano_key_white}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_2.geometry}
            material={materials.piano_key_black}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/static/grand_piano.glb");