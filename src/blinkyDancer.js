var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);

  console.log('Show me the orignal function ', this.step);
  //this.oldStep = Dancer.step;

};

makeBlinkyDancer.prototype = Object.create(Dancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

makeBlinkyDancer.prototype.step = function() {
  console.log('makeBlinkyDancer Prototype step this val: ', this);
  console.log('makeBlinkyDancer Prototype step this val: ', this.oldStep);

  Dancer.prototype.step();
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggle();
};

