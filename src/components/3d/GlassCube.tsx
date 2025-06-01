import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Box } from '@react-three/drei';
import { Color } from 'three';

interface GlassCubeProps {
  position?: [number, number, number];
  scale?: number;
  color?: string;
  speed?: number;
  rotationFactor?: number;
}

const GlassCube: React.FC<GlassCubeProps> = ({
  position = [0, 0, 0],
  scale = 1,
  color = '#ffffff',
  speed = 1,
  rotationFactor = 0.5
}) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = clock.getElapsedTime() * speed * rotationFactor;
      meshRef.current.rotation.y = clock.getElapsedTime() * speed * rotationFactor * 0.8;
      meshRef.current.position.y = position[1] + Math.sin(clock.getElapsedTime() * 0.5) * 0.1;
    }
  });

  return (
    <Box ref={meshRef} args={[1, 1, 1]} position={position} scale={scale}>
      <meshPhysicalMaterial
        color={new Color(color)}
        roughness={0.1}
        metalness={0.1}
        transparent
        opacity={0.6}
        clearcoat={1}
        clearcoatRoughness={0.1}
      />
    </Box>
  );
};

export default GlassCube;