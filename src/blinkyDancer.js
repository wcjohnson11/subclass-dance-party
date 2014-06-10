var makeBlinkyDancer = function(top, left, timeBetweenSteps){

  var blinkyDancer = new makeDancer(top, left, timeBetweenSteps);
  blinkyDancer.oldStep = blinkyDancer.step;
  console.log();
  // console.log();
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  //console.log(blinkyDancer);
  //console.log(this);

  blinkyDancer.step = function(){
      // call the old version of step at the beginning of any call to this new version of step
      this.oldStep();
      // toggle() is a jQuery method to show/hide the <span> tag.
      // See http://api.jquery.com/category/effects/ for this and
      // other effects you can use on a jQuery-wrapped html tag.
      this.$node.toggle();
    };
    return blinkyDancer;
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

