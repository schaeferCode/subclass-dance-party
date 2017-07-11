var SquareDancer = function (top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);

  this.setPosition(top, left);


  };

SquareDancer.prototype = Object.create(Dancer.prototype);

SquareDancer.prototype.constructor = makeBlinkyDancer;

SquareDancer.prototype.step = function() {

  Dancer.prototype.step();
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggle();
};