import * as THREE from 'three'

AFRAME.registerComponent('sphere-collider', {
  schema: {
    objects: { default: '' },
    state: { default: 'collided' },
    radius: { default: 0.05 }
  },

  init: function() {
    this.els = []
    this.collisions = []
  },

  update: function() {
    const data = this.data
    let objectEls

    if (data.objects) {
      objectEls = this.el.sceneEl.querySelectorAll(data.objects)
    } else {
      objectEls = this.el.sceneEl.children
    }
    this.els = Array.prototype.slice.call(objectEls)
  },

  tick: (function() {
    const position = new THREE.Vector3()
    const meshPosition = new THREE.Vector3()
    
    return function() {
      const el = this.el
      const data = this.data
      const mesh = el.getObject3D('mesh')
      const collisions = []

      if (!mesh) return

      el.object3D.getWorldPosition(position)

      this.els.forEach(intersect)
      collisions.forEach(handleHit)
      
      if (collisions.length === 0) {
        el.emit('hit', { el: null })
      }
      
      this.collisions.filter(el => collisions.indexOf(el) === -1).forEach(el => {
        el.removeState(data.state)
        el.emit('hitend')
      })
      
      this.collisions = collisions

      function intersect(targetEl) {
        const targetMesh = targetEl.getObject3D('mesh')
        if (!targetMesh) return

        targetMesh.getWorldPosition(meshPosition)
        
        let radius = data.radius
        if (targetMesh.geometry?.boundingSphere) {
          targetMesh.geometry.computeBoundingSphere()
          radius += targetMesh.geometry.boundingSphere.radius * targetEl.object3D.scale.x
        }

        if (position.distanceTo(meshPosition) < radius) {
          collisions.push(targetEl)
        }
      }

      function handleHit(hitEl) {
        hitEl.emit('hit')
        hitEl.addState(data.state)
        el.emit('hit', { el: hitEl })
      }
    }
  })()
})
