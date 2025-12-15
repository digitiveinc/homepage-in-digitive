'use client'

import { useRef, useEffect, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'

interface ParticleFieldProps {
  count?: number
}

function ParticlesComponent({ count = 5000 }: ParticleFieldProps) {
  const ref = useRef<THREE.Points>(null!)
  const particlesCount = count
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(particlesCount * 3)
    for (let i = 0; i < particlesCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 2000
      positions[i + 1] = (Math.random() - 0.5) * 2000
      positions[i + 2] = (Math.random() - 0.5) * 2000
    }
    return positions
  }, [particlesCount])

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x -= 0.0001
      ref.current.rotation.y -= 0.00015
    }
  })

  return (
    <Points ref={ref} positions={particlesPosition} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#00ff88"
        size={10}
        sizeAttenuation={true}
      />
    </Points>
  )
}

export default function ParticleField({ count = 5000 }: ParticleFieldProps) {
  return (
    <Canvas
      camera={{ position: [0, 0, 300], fov: 75 }}
      className="w-full h-full"
      dpr={[1, 2]}
    >
      <ParticlesComponent count={count} />
    </Canvas>
  )
}
