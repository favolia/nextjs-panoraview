"use client";
import React, { useState } from 'react'
import store from "@/lib/store.json";
import { useLoader } from '@react-three/fiber';
import * as THREE from 'three'
import Dome from '@/components/component/Dome';

const Portals = () => {
    const [which, set] = useState(0);
    const { link, ...props } = store[which]
    const maps = useLoader(THREE.TextureLoader, store.map(entry => entry.url))
    return <Dome onClick={() => set(link)} {...props} texture={maps[which]} />
}

export default Portals