import AFRAME from 'aframe';

AFRAME.registerComponent('stop-flying', {
  init: function () {
    // Bind event handlers
    this.onGripOpen = this.onGripOpen.bind(this);
  },

  play: function () {
    var el = this.el;
    el.addEventListener('grab-end', this.onGripOpen);
  },

  pause: function () {
    var el = this.el;
    el.removeEventListener('grab-end', this.onGripOpen);
  },

  onGripOpen: function (evt) {
    var el = this.el;
    el.body.velocity.set(0,0,0);
    el.body.angularVelocity.set(0,0,0);
  }
});
