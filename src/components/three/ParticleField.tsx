'use client'

import { useRef, useEffect, useMemo, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'

interface ParticleFieldProps {
  count?: number
}

function ParticlesComponent({ count = 5000 }: ParticleFieldProps) {
  const ref = useRef<THREE.Points>(null!)
  const materialRef = useRef<THREE.PointsMaterial>(null!)
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

  // Cleanup on unmount to prevent memory leaks
  useEffect(() => {
    return () => {
      if (ref.current) {
        // Dispose geometry
        if (ref.current.geometry) {
          ref.current.geometry.dispose()
        }
        // Dispose material
        if (materialRef.current) {
          materialRef.current.dispose()
        }
      }
    }
  }, [])

  return (
    <Points ref={ref} positions={particlesPosition} stride={3} frustumCulled={false}>
      <PointMaterial
        ref={materialRef}
        transparent
        color="#00ff88"
        size={10}
        sizeAttenuation={true}
      />
    </Points>
  )
}

export default function ParticleField({ count = 5000 }: ParticleFieldProps) {
  const [particleCount, setParticleCount] = useState(count)

  useEffect(() => {
    // Device detection for performance optimization
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768
    const isLowBattery =
      typeof window !== 'undefined' &&
      'getBattery' in navigator &&
      ('connection' in navigator ? (navigator as any).connection?.saveData : false)

    // Reduce particle count on mobile or low battery
    if (isMobile || isLowBattery) {
      setParticleCount(Math.min(1000, count))
    } else if (window.innerWidth < 1024) {
      setParticleCount(Math.min(2000, count))
    }

    // Handle window resize
    const handleResize = () => {
      const newCount = window.innerWidth < 768 ? Math.min(1000, count) : count
      setParticleCount(newCount)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [count])

  return (
    <Canvas
      camera={{ position: [0, 0, 300], fov: 75 }}
      className="w-full h-full"
      dpr={[1, 2]}
    >
      <ParticlesComponent count={particleCount} />
    </Canvas>
  )
}
