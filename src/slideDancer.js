var SlideDancer = function(top, left, timeBetweenSteps){

  Dancer.call(this,top,left,timeBetweenSteps);

};

SlideDancer.prototype = Object.create(Dancer.prototype);
SlideDancer.prototype.constructor = SlideDancer;

SlideDancer.prototype.step = function(){
    // call the old version of step at the beginning of any call to this new version of step
      Dancer.prototype.step.call(this);
      // toggle() is a jQuery method to show/hide the <span> tag.
      // See http://api.jquery.com/category/effects/ for this and
      // other effects you can use on a jQuery-wrapped html tag.
      this.$node.toggleClass('slideLeft');
      this.$node.toggleClass('pink');
};
