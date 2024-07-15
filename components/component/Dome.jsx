"use client";
import { Html } from '@react-three/drei';
import React from 'react'
import * as THREE from 'three'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

const Dome = ({ icon, name, position, texture, onClick }) => {
    return (
        <group>
            <mesh>
                <sphereGeometry args={[500, 60, 40]} />
                <meshBasicMaterial map={texture} side={THREE.BackSide} />
            </mesh>
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