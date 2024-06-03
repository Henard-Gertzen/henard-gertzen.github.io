/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: Cinnamine3D (https://sketchfab.com/LordCinn)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/pixel-plane-da5c802719844a86b9464f73c633cdd1
Title: PIXEL PLANE
*/

import React, { useRef, useEffect, useState } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import { a } from '@react-spring/three';

import planeScene from '../assets/3d/pixel_plane.glb';

const Plane = ({isRotating, ...props}) => {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF(planeScene)
  const { actions } = useAnimations(animations, group)
  //Extra functionality
  const [tiltAngle, setTiltAngle] = useState(0); // Initial tilt angle on X-axis
  useEffect(() => {
    if(isRotating) {
        actions['ArmatureAction.001'].play();
    } else {
        actions['ArmatureAction.001'].stop();
        setTiltAngle(setTiltAngle); // Reset tilt angle when not rotating
    }
  }, [actions, isRotating])

  useFrame(() => {
    if (isRotating) {
      // Update tilt angle with a sine wave function for smooth tilting effect
      setTiltAngle(Math.sin(performance.now() / 2000) * 0.4); // Adjust amplitude (0.04) and speed (2000) as needed
    }
  });

  return (
    <a.group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, tiltAngle, 0]}>
          <group name="851ef2b194494e539ad187404fbe584bfbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="Cube000" rotation={[-Math.PI / 2, 0, 0]} scale={100} />
                <group name="Armature" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                  <group name="Object_6">
                    <primitive object={nodes._rootJoint} />
                    <skinnedMesh
                      name="Object_9"
                      geometry={nodes.Object_9.geometry}
                      material={materials['Material.026']}
                      skeleton={nodes.Object_9.skeleton}
                    />
                    <group name="Object_8" rotation={[-Math.PI / 2, 0, 0]} scale={100} />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </a.group>
  )
}

export default Plane;

