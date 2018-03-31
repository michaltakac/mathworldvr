import AFRAME from 'aframe';

let gui

function bindInput( el, input ){
  el.addEventListener('triggerdown', function(){
    input.pressed( true );
  });
  el.addEventListener('triggerup', function(){
    input.pressed( false );
  });
  el.addEventListener('gripdown', function(){
    input.gripped( true );
  });
  el.addEventListener('gripup', function(){
    input.gripped( false );
  });
}

AFRAME.registerComponent('datgui', {
  schema: {
    controllerRight: {
      type: 'selector',
      default: '#rightController'
    },
    controllerLeft: {
      type: 'selector',
      default: '#leftController'
    },
    name: {
      type: 'string',
      default: 'controls'
    }
  },
  init() {
    const canvas = this.el.sceneEl.canvas;
    // Wait for canvas to load.
    if (!canvas) {
      this.el.sceneEl.addEventListener('render-target-loaded', this.init.bind(this));
      return;
    }

    gui = dat.GUIVR.create( this.data.name );

    this.el.setObject3D('gui', gui );

    const scene = this.el.sceneEl.object3D;

    const controllerRightEl = this.data.controllerRight;
    if (controllerRightEl){
      const right = dat.GUIVR.addInputObject(controllerRightEl.object3D);
      scene.add(right);
      bindInput(controllerRightEl, right);
    }

    const controllerLeftEl = this.data.controllerLeft;
    if (controllerLeftEl){
      const left = dat.GUIVR.addInputObject( controllerLeftEl.object3D);
      scene.add(left);
      bindInput(controllerLeftEl, left);
    }

    const { camera, renderer } = this.el.sceneEl;
    dat.GUIVR.enableMouse(camera);

    if (this.data.name){
      gui.name(this.data.name);
    }
  }
});

AFRAME.registerComponent( 'datguicontroller', {
  schema: {
    type: {
      type: 'string',
      default: 'slider',
      oneOf: [
        'slider',
        'dropdown',
        'checkbox',
        'button'
      ]
    },
    initialState: {
      default: ''
    },
    actionToTrigger: {
      default: function(){},
      if: {type: 'button'}
    },
    options: {
      type: 'array',
      default: [],
      if: {type: 'dropdown'}
    },
    min: {
      type: 'number',
      default: 0,
      if: {type: 'slider'}
    },
    max: {
      type: 'number',
      default: 1,
      if: {type: 'slider'}
    },
    step: {
      type: 'number',
      default: 0.1,
      if: {type: 'slider'}
    },
    name: {
      type: 'string',
      default: undefined
    }
  },
  init() {
    const canvas = this.el.sceneEl.canvas;

    // Wait for canvas to load.
    if (!canvas) {
      this.el.sceneEl.addEventListener('render-target-loaded', this.init.bind(this));
      return;
    }

    switch (this.data.type){
      case 'slider':
        this.controller = gui.add({[this.data.name]: this.data.initialState}, this.data.name, this.data.min, this.data.max).step(this.data.step);
        break;
      case 'dropdown':
        this.controller = gui.add({[this.data.name]: this.data.initialState}, this.data.name, this.data.options);
        break;
      case 'checkbox':
        this.controller = gui.add(this.data.initialState, this.data.name);
        break;
      case 'button':
        this.controller = gui.add({ fn: this.data.actionToTrigger }, 'fn');
        break;
    }

    if ( this.controller && this.controller.onChange ){
      this.controller.onChange((v) => {
        this.data.actionToTrigger(v)
      });
    }
  }
});
