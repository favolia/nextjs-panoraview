"use client";
import { Html, Text } from '@react-three/drei';
import React, { Suspense, useState } from 'react'
import * as THREE from 'three'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

const Dome = ({ icon, name, position, texture, onClick }) => {
    const [hovered, setHovered] = useState(null);

    return (
        <group>
            <mesh>
                <sphereGeometry args={[500, 60, 40]} />
                <meshBasicMaterial map={texture} side={THREE.BackSide} />
            </mesh>
            <Suspense fallback={null}>
                <Text
                    font={'/fonts/GODOFWAR.TTF'}
                    position={[0, 3, -20]}
                    onPointerOver={() => setHovered('favolia')}
                    onPointerOut={() => setHovered(null)}
                    onClick={() => window.open("https://github.com/favolia", "_blank")}
                    color={hovered === 'favolia' ? 'maroon' : 'white'}
                >
                    Project by favolia
                </Text>

                <Text
                    font={'/fonts/GODOFWAR.TTF'}
                    position={[0, 0, -20]}
                    onPointerOver={() => setHovered('aaron3dart')}
                    onPointerOut={() => setHovered(null)}
                    onClick={() => window.open("https://www.artstation.com/aaron3dart", "_blank")}
                    color={hovered === 'aaron3dart' ? 'maroon' : 'white'}
                >
                    Assets by aaron3dart
                </Text>
            </Suspense>
            <mesh position={position}>
                {/* <sphereGeometry args={[1.25, 32, 32]} />
                <meshBasicMaterial color={"white"} /> */}
                <Html center>
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <button className='w-12 h-12 grid place-items-center text-center rounded-full backdrop-blur-sm text-white bg-black/5 border border-white/25' onClick={onClick}>
                                    {icon}
                                </button>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>{name}</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>

                </Html>
            </mesh>
        </group>
    )
}

export default Dome