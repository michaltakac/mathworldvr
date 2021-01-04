import { useLoader } from 'react-three-fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export function GLTFModel({ url, position, rotation, scale }) {
  const gltf = useLoader(GLTFLoader, url)
  return <primitive object={gltf.scene} position={position} rotation={rotation} scale={scale} />
}
