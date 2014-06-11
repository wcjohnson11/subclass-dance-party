window.dancers = [];
window.connections = {};
window.hyp = function (node1, node2) {
  var widthDiff = (node1.left - node2.left);
  var heightDiff = (node1.height - node2.height);
  return Math.sqrt((widthDiff*widthDiff) + (heightDiff * heightDiff))
};

var makeDancer = function(top, left, timeBetweenSteps){
  this.height = top;
  this.left = left;
  this.id = dancers.length;
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

  makeDancer.prototype.findNearestNode = function () { debugger;
    var thisNode = this;
    var thisId = this.id;
    connections[thisId] = {};
    _.each(dancers, function(dancer, index, dancers) {
      if (dancer.id !== thisId) {
/*        connections[thisId].node = dancer.id;
        connections[thisId].hyp = hyp(thisNode, dancer);*/
        connections[thisId][dancer.id] = hyp(thisNode, dancer);
      }
    });
    var lowest = _.min(connections[thisNode], function(o){return o.hyp;});
    return lowest;
  };

