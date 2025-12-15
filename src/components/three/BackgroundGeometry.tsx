'use client'

import { useRef, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Icosahedron, Octahedron, Tetrahedron } from '@react-three/drei'
import * as THREE from 'three'

function GeometryItem({
  position,
  rotation,
  color,
  shape,
  scale,
  speed,
}: {
  position: [number, number, number]
  rotation: [number, number, number]
  color: string
  shape: 'icosahedron' | 'octahedron' | 'tetrahedron'
  scale: number
  speed: number
}) {
  const ref = useRef<THREE.Mesh>(null!)
  const materialRef = useRef<THREE.MeshStandardMaterial>(null!)

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.x += speed * 0.001
      ref.current.rotation.y += speed * 0.0015
      ref.current.position.y += Math.sin(Date.now() * 0.001 * speed) * 0.01
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

  const ShapeComponent =
    shape === 'icosahedron'
      ? Icosahedron
      : shape === 'octahedron'
      ? Octahedron
      : Tetrahedron

  return (
    <mesh ref={ref} position={position} rotation={rotation} scale={scale}>
      <ShapeComponent args={[1, 2]} />
      <meshStandardMaterial
        ref={materialRef}
        color={color}
        wireframe={true}
        emissive={color}
        emissiveIntensity={0.5}
      />
    </mesh>
  )
}

function BackgroundGeometryContent() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#00ff88" />
      <pointLight position={[-10, -10, -10]} intensity={1} color="#ff0080" />

      <GeometryItem
        position={[0, 0, 0]}
        rotation={[0.5, 0.5, 0.5]}
        color="#00ff88"
        shape="icosahedron"
        scale={1}
        speed={1}
      />
      <GeometryItem
        position={[3, 2, -3]}
        rotation={[1, 0.5, 2]}
        color="#ff0080"
        shape="octahedron"
        scale={0.8}
        speed={0.8}
      />
      <GeometryItem
        position={[-3, -2, 3]}
        rotation={[2, 1, 0.5]}
        color="#00d4ff"
        shape="tetrahedron"
        scale={0.6}
        speed={0.6}
      />
      <GeometryItem
        position={[2, -3, -2]}
        rotation={[0.5, 2, 1]}
        color="#00ff88"
        shape="octahedron"
        scale={0.7}
        speed={0.9}
      />
    </>
  )
}

export default function BackgroundGeometry() {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 75 }}
      className="w-full h-full"
      dpr={[1, 2]}
    >
      <BackgroundGeometryContent />
    </Canvas>
  )
}
