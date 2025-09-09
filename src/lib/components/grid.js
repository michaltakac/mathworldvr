import * as THREE from 'three'

AFRAME.registerComponent('grid', {
  schema: {
    size: { default: 10 },
    divisions: { default: 10 },
    colorCenterLine: { default: '#ff0000' },
    colorGrid: { default: '#808080' }
  },

  init: function() {
    this.gridHelper = null
  },

  update: function() {
    const scene = this.el.object3D
    const data = this.data

    if (this.gridHelper) {
      scene.remove(this.gridHelper)
    }

    this.gridHelper = new THREE.GridHelper(
      data.size, 
      data.divisions, 
      data.colorCenterLine, 
      data.colorGrid
    )
    this.gridHelper.name = 'grid'
    scene.add(this.gridHelper)
  },

  remove: function() {
    if (this.gridHelper) {
      this.el.object3D.remove(this.gridHelper)
    }
  }
})
