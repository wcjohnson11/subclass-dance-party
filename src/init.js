$(document).ready(function(){

  $(".addDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on index.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );

    $('body').append(dancer.$node);

  });

    var bodyHeight = $('body').height();
    var bodyWidth = $('body').width();
    var randomHeight = Math.floor(Math.random()*bodyHeight);
    var randomWidth = Math.floor(Math.random()*bodyWidth);

  //jQuery click/hover functions

  $('.shuffleButton').click(function(){
    $.each(dancers, function(dancer){ this.setPosition(Math.floor(Math.random()*bodyHeight)), (Math.floor(Math.random()*bodyWidth)); } );
  });

  $('.lineupButton').click(function(){
    $.each(dancers, function(dancer){ this.setPosition('375px'); } );
  });

  $('.getbackButton').click(function(){
    $.each(dancers, function(dancer){ this.setPosition(this.height); } );
  });

/*  $('.dancer').click(
   function(){ debugger; $(this).removeClass();
   $(this).addClass('expand');
  });*/

  $('body').on('click', '.dancer', function() {
    $(this).toggleClass('expand');
  });

    $('.syncupButton').click(function(){
      var randomTime = Math.random()*1000;
    _.each(dancers,function(dancer){dancer._timeBetweenSteps = randomTime;});
  });


  //naive pairing function
  $('.pairupButton').click(function(){


    var sortedDancers = _.sortBy(dancers,function(dancer, index, dancers){
    return Number(Math.sqrt(dancer.height * dancer.height + dancer.left * dancer.left).toFixed(3));
    });
    for (var i = 0; i < sortedDancers.length; i +=2){
        var now = sortedDancers[i];
        var next = sortedDancers[i+1];
        if (now === undefined){
          $(sortedDancers[i]).addClass('expand');
          return;
        } else if (next === undefined){
          $(sortedDancers[i+1]).addClass('expand');
          return;
        }
        var randomHeight = Math.floor(Math.random()*bodyHeight);
        var randomWidth = Math.floor(Math.random()*bodyWidth);
       // now.height =
        //now.setPosition(randomHeight, randomWidth);
        next.setPosition(now.height, now.left);
    }
  });



  // function fadeIn(){
  //   $('.bg').toggleClass("slideExpandUp");
  // };
  // setInterval(fadeIn(),8000);



});

