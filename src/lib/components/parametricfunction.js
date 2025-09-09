import * as THREE from 'three'
import * as math from 'mathjs'

// Register as a geometry, not a component
AFRAME.registerGeometry('parametricfunction', {
  schema: {
    equation: { default: 'x^2 + y^2' },
    segments: { default: 20 },
    xMin: { default: -3 },
    xMax: { default: 3 },
    yMin: { default: -3 },
    yMax: { default: 3 },
    zMin: { default: -3 },
    zMax: { default: 3 }
  },

  init: function(data) {
    const geometry = new THREE.BufferGeometry()
    
    try {
      const parsed = math.parse(data.equation)
      const compiled = parsed.compile()
      
      const xRange = data.xMax - data.xMin
      const yRange = data.yMax - data.yMin
      
      const vertices = []
      const indices = []
      const uvs = []
      const normals = []
      
      // Generate vertices
      for (let i = 0; i <= data.segments; i++) {
        for (let j = 0; j <= data.segments; j++) {
          const x = data.xMin + (i / data.segments) * xRange
          const y = data.yMin + (j / data.segments) * yRange
          
          let z = 0
          try {
            z = compiled.evaluate({ x, y })
            if (isNaN(z) || !isFinite(z)) z = 0
            z = Math.max(data.zMin, Math.min(data.zMax, z))
          } catch {
            z = 0
          }
          
          vertices.push(x, z, y)
          uvs.push(i / data.segments, j / data.segments)
        }
      }
      
      // Generate indices for triangles
      for (let i = 0; i < data.segments; i++) {
        for (let j = 0; j < data.segments; j++) {
          const a = i * (data.segments + 1) + j
          const b = a + 1
          const c = a + data.segments + 1
          const d = c + 1
          
          indices.push(a, b, c)
          indices.push(b, d, c)
        }
      }
      
      // Set geometry attributes
      geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3))
      geometry.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2))
      geometry.setIndex(indices)
      geometry.computeVertexNormals()
      
    } catch (error) {
      console.error('Error creating parametric function geometry:', error)
      // Create a simple plane as fallback
      const vertices = [
        -1, 0, -1,
         1, 0, -1,
         1, 0,  1,
        -1, 0,  1
      ]
      const indices = [0, 1, 2, 0, 2, 3]
      const uvs = [0, 0, 1, 0, 1, 1, 0, 1]
      
      geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3))
      geometry.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2))
      geometry.setIndex(indices)
      geometry.computeVertexNormals()
    }
    
    this.geometry = geometry
  }
})