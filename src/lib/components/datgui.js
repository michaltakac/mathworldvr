import AFRAME from 'aframe';

AFRAME.registerComponent('datgui', {
  name: {
    type: 'string',
    default: 'settings'
  },
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
  init: function(){
    const gui = dat.GUIVR.create( this.data.name );
    this.el.setObject3D('gui', gui );
    this.el.gui = gui;
    const scene = this.el.sceneEl.object3D;

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
  },
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
  init: function() {
    const that = this;
    const canvas = this.el.sceneEl.canvas;
    // Wait for canvas to load.
    if (!canvas) {
      this.el.sceneEl.addEventListener('render-target-loaded', this.init.bind(this));
      return;
    }

    const gui = that.el.parentNode.gui;

    switch (that.data.type){
      case 'slider':
        that.controller = gui.add({[that.data.name]: that.data.initialState}, that.data.name, that.data.min, that.data.max).step(that.data.step);
        break;
      case 'dropdown':
        that.controller = gui.add({[that.data.name]: that.data.initialState}, that.data.name, that.data.options);
        break;
      case 'checkbox':
        that.controller = gui.add(that.data.initialState, that.data.name);
        break;
      case 'button':
        that.controller = gui.add({ fn: that.data.actionToTrigger }, 'fn');
        break;
    }

    if ( that.controller && that.controller.onChange ){
      that.controller.onChange(function(v){
        that.data.actionToTrigger(v)
      });
    }
  }
});
