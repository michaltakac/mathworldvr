import AFRAME, { THREE } from 'aframe';

/**
 * Grid component.
 */
AFRAME.registerComponent('grid', {
  schema: {
    size: { default: 10 },
    step: { default: 1 },
    colorCenterLine: { default: 'red' },
    colorGrid: { default: '0x808080' },
  },

  init() {
    const scene = this.el.object3D;
    const data = this.data;

    const size = data.size;
    const step = data.step;
    const colorCenterLine = data.colorCenterLine;
    const colorGrid = data.colorGrid;

    const gridHelperXY = new THREE.GridHelper(size, step, colorCenterLine, colorGrid);
    gridHelperXY.name = 'gridXY';
    scene.add(gridHelperXY);

    const gridHelperXZ = new THREE.GridHelper(size, step, colorCenterLine, colorGrid);
    gridHelperXZ.name = 'gridXZ';
    gridHelperXZ.rotation.z = Math.PI / 2;
    scene.add(gridHelperXZ);
  },

  remove() {
    const scene = this.el.object3D;
    scene.remove(scene.getObjectByName('grid'));
  }
});
