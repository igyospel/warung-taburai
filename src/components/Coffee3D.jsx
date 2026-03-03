import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float, ContactShadows, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

function CustomCoffeeModel() {
    const group = useRef();
    const { nodes, materials } = useGLTF('/coffee.glb');

    useFrame((state) => {
        // Gentle rotation inside the 3D scene
        const t = state.clock.elapsedTime;
        group.current.rotation.y = Math.sin(t * 0.5) * 0.15;
        group.current.rotation.x = Math.sin(t * 0.3) * 0.05;
    });

    return (
        <group ref={group} position={[0, -1.5, 0]} scale={12} dispose={null}>
            <mesh
                geometry={nodes.tmpa_oire0gobj.geometry}
                material={materials.pbr_material}
                position={[0.023, 0.022, 0.015]}
                scale={0.548}
            />
        </group>
    );
}

useGLTF.preload('/coffee.glb');

export default function Coffee3D() {
    return (
        <div style={{ width: '100%', height: '100%', pointerEvents: 'none' }}>
            <Canvas camera={{ position: [0, 1, 8], fov: 45 }} gl={{ alpha: true }}>
                <ambientLight intensity={0.8} />
                <spotLight position={[10, 15, 10]} angle={0.3} penumbra={1} intensity={1.5} />
                <pointLight position={[-10, -10, -10]} intensity={0.5} />
                <directionalLight position={[0, 5, -5]} intensity={1} />
                <Float speed={2} rotationIntensity={0.5} floatIntensity={1.5} floatingRange={[-0.2, 0.2]}>
                    <CustomCoffeeModel />
                </Float>

                {/* Adds realistic reflections to the glass */}
                <Environment preset="city" />

                {/* Soft shadow below the floating cup */}
                <ContactShadows position={[0, -2.5, 0]} opacity={0.6} scale={10} blur={2.5} far={4} color="#000000" />
            </Canvas>
        </div>
    );
}
