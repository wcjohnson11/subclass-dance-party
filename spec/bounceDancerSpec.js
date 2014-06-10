describe("bounceDancer", function() {
  var bounceDancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    bounceDancer = makeBounceDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(bounceDancer.$node).to.be.an.instanceof(jQuery);
  });

  it("should have a step function that makes its node slide", function() {
    sinon.spy(bounceDancer.$node, 'toggleClass');
    bounceDancer.step();
    expect(bounceDancer.$node.toggleClass.called).to.be.true;
  });

  describe("dance", function(){
    it("should call step at least once per second", function(){
      sinon.spy(bounceDancer, "step");
      expect(bounceDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(bounceDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(bounceDancer.step.callCount).to.be.equal(2);
    });
  });
});
