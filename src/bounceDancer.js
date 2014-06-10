var makeBounceDancer = function(top, left, timeBetweenSteps){

  var bounceDancer = new makeDancer(top, left, timeBetweenSteps);
  bounceDancer.oldStep = bounceDancer.step;
  console.log();
  // console.log();
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  //console.log(blinkyDancer);
  //console.log(this);

  bounceDancer.step = function(){
      // call the old version of step at the beginning of any call to this new version of step
      this.oldStep();
      // toggle() is a jQuery method to show/hide the <span> tag.
      // See http://api.jquery.com/category/effects/ for this and
      // other effects you can use on a jQuery-wrapped html tag.
      this.$node.toggleClass("bounce");
    };
  return bounceDancer;
};

/*  blinkyDancer.prototype.step = function(){
    console.log(this);
    // call the old version of step at the beginning of any call to this new version of step
    this.oldStep();
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    this.$node.toggle();
  };*/
