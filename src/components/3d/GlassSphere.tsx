import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';
import { Color } from 'three';

interface GlassSphereProps {
  position?: [number, number, number];
  scale?: number;
  color?: string;
  speed?: number;
}

const GlassSphere: React.FC<GlassSphereProps> = ({
  position = [0, 0, 0],
  scale = 1,
  color = '#88ccff',
  speed = 1
}) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.3 * speed) * 0.2;
      meshRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.2 * speed) * 0.2;
      meshRef.current.position.y = position[1] + Math.sin(clock.getElapsedTime() * speed) * 0.1;
    }
  });

  return (
    <Sphere ref={meshRef} args={[1, 64, 64]} position={position} scale={scale}>
      <MeshDistortMaterial
        color={new Color(color)}
        attach="material"
        distort={0.3}
        speed={3}
        roughness={0}
        metalness={0.6}
        transparent
        opacity={0.7}
      />
    </Sphere>
  );
};

export default GlassSphere;