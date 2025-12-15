'use client'

import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Box } from '@react-three/drei'
import * as THREE from 'three'

interface InteractiveCardProps {
  color: string
  icon?: string
}

function CardMesh({ color }: { color: string }) {
  const ref = useRef<THREE.Mesh>(null!)
  const [hovered, setHovered] = useState(false)

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.x += 0.002
      ref.current.rotation.y += 0.003
      if (hovered) {
        ref.current.scale.lerp(new THREE.Vector3(1.2, 1.2, 1.2), 0.1)
      } else {
        ref.current.scale.lerp(new THREE.Vector3(1, 1, 1), 0.1)
      }
    }
  })

  return (
    <mesh
      ref={ref}
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
    >
      <Box args={[2, 2, 2]}>
        <meshStandardMaterial
          color={color}
          wireframe={true}
          emissive={color}
          emissiveIntensity={hovered ? 1 : 0.5}
        />
      </Box>
    </mesh>
  )
}

export default function InteractiveCard({ color, icon }: InteractiveCardProps) {
  return (
    <Canvas camera={{ position: [0, 0, 3], fov: 75 }} dpr={[1, 2]}>
      <ambientLight intensity={0.5} />
      <pointLight position={[5, 5, 5]} intensity={1} />
      <CardMesh color={color} />
    </Canvas>
  )
}
