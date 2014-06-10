window.dancers = [];
var makeDancer = function(top, left, timeBetweenSteps){
  this.height = top;
  this.left = left;
// Creates and returns a new dancer object that can step
  //node constructor
  this.$node = $('<span class="dancer"></span>');
  //store this._timeBetweenSteps
  this._timeBetweenSteps = timeBetweenSteps;
  this.step = this.step;
  //call dancer.step();
  this.step();
  //set position method(top,left)
  this.setPosition(top,left);
  //add Dancer to the dancers array
  dancers.push(this);
};




  makeDancer.prototype.step = function(){
    // the basic makeDancer doesn't do anything interesting at all on each step,
    // it just schedules the next step
    // debugger;
    var main = this;
    //var stepper = this.step.bind(this);
    setTimeout(_.bind(this.step, main), this._timeBetweenSteps);
  };

  makeDancer.prototype.setPosition = function(top, left){
    // Use css top and left properties to position our <span> tag
    // where it belongs on the page. See http://api.jquery.com/css/
    //
    var styleSettings = {
      top: top,
      left: left
    };
    this.$node.css(styleSettings);
  };

