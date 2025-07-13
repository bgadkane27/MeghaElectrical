import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

const ThreeModel = () => {
  const { scene } = useGLTF('/model/electric.glb');
  const meshRef = useRef()

  useFrame(() => {
    
  })
  return <primitive 
      ref={meshRef} 
      object={scene} 
      scale={1} 
      position={[0, -2, 0]} 
    />
};

export default ThreeModel;