import AFRAME, { THREE } from 'aframe';
import math from 'mathjs';

var graphMesh;

AFRAME.registerComponent('parametricfunction', {
  schema: {
    equation: { type: 'string', default: '' },
    segments: { type: 'number', default: 20 },
    xMin: { type: 'number', default: -5 },
    xMax: { type: 'number', default: 5 },
    yMin: { type: 'number', default: -5 },
    yMax: { type: 'number', default: 5 },
    zMin: { type: 'number', default: -5 },
    zMax: { type: 'number', default: 5 },
    functionColor: { type: 'string', default: '#bada55' }
  },

  init: function() {
    const el = this.el;
    const canvas = el.sceneEl.canvas;
    // Wait for canvas to load.
    if (!canvas) {
      el.sceneEl.addEventListener('render-target-loaded', this.init.bind(this));
      return;
    }
  },

  update: function(oldData) {
    var scene = this.el.object3D;
    // Equation parser
    var equation = 'f(x,y) = ' + this.data.equation;

    var parser = math.parser();
    try {
      parser.eval(equation);
    } catch (error) {
      return;
    }
    //parser.eval(equation);
    const f1 = parser.get('f');
    parser.clear();

    var segments = this.data.segments;

    var xMin = this.data.xMin;
    var xMax = this.data.xMax;
    var yMin = this.data.yMin;
    var yMax = this.data.yMax;
    var zMin = this.data.zMin;
    var zMax = this.data.zMax;

    var xRange = xMax - xMin;
    var yRange = yMax - yMin;
    // var zRange = zMax - zMin;

    xRange = xMax - xMin;
    yRange = yMax - yMin;

    this.mainMaterial = new THREE.MeshBasicMaterial( { color: this.data.functionColor, side: THREE.DoubleSide } );
    this.wireframeMaterial = new THREE.MeshBasicMaterial( { color: 0x00008, wireframe: true, transparent: true } );
    this.functionMaterial = [ this.mainMaterial, this.wireframeMaterial ];

    function meshFunction(x, y) {
      x = (xRange * x) + xMin;
      y = (yRange * y) + yMin;
      var z = f1(x, y);
      // console.log('x is ' + x + ', y is ' + y + ', and f(x,y) = ' + z);
      if (isNaN(z)) {
        return new THREE.Vector3(0, 0, 0); // TODO: better fix
      }

      if (z < zMin) {
        return new THREE.Vector3(x, zMin, y);
      }

      if (z > zMax) {
        return new THREE.Vector3(x, zMax, y);
      }

      return new THREE.Vector3(x, z, y);
    };

    // true => sensible image tile repeat...
    var graphGeometry = new THREE.ParametricGeometry( meshFunction, segments, segments, true );

    if (graphMesh) {
      scene.remove(graphMesh);
      // renderer.deallocateObject( graphMesh );
    }

    graphMesh = new THREE.SceneUtils.createMultiMaterialObject(graphGeometry, this.functionMaterial);
    graphMesh.doubleSided = true;
    scene.add(graphMesh);
  },

  remove: function() {
    this.el.object3D.remove(scene.getObjectByName('parametricfunction'));
  }
});
