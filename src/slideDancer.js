var makeSlideDancer = function(top, left, timeBetweenSteps){

  var slideDancer = new makeDancer(top, left, timeBetweenSteps);
  slideDancer.oldStep = slideDancer.step;
  slideDancer.step = undefined;
  slideDancer.step = function(){
    // call the old version of step at the beginning of any call to this new version of step
      this.oldStep();
      // toggle() is a jQuery method to show/hide the <span> tag.
      // See http://api.jquery.com/category/effects/ for this and
      // other effects you can use on a jQuery-wrapped html tag.
      this.$node.toggleClass('slideLeft');
      this.$node.toggleClass('pink');
  };
  return slideDancer;
};

