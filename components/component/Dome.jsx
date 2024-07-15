"use client";
import { Html } from '@react-three/drei';
import React from 'react'
import * as THREE from 'three'

const Dome = ({ name, position, texture, onClick }) => {
    return (
        <group>
            <mesh>
                <sphereGeometry args={[500, 60, 40]} />
                <meshBasicMaterial map={texture} side={THREE.BackSide} />
            </mesh>
            <mesh position={position}>
                <sphereGeometry args={[1.25, 32, 32]} />
                <meshBasicMaterial color={"white"} />
                <Html center>
                    <button onClick={onClick}>
                        {name}
                    </button>
                </Html>
            </mesh>
        </group>
    )
}

export default Dome