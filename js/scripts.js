//Business Logic
var numberArray = [];
var sliced = [];
var list = [];

var count = function(pingpong){
  for (var i = 1; i <= numerials; i++) {
    numberArray.push(i);
  }
  // debugger;
  sliced = numberArray.slice(0, numerials);
  return sliced;
};

// return sliced;

//User Interface
$(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    numerials = parseInt($("#numberEntry").val());
    output = count(numerials);

    output.forEach(function(nums) {
      $("ul").append("<li>" + nums + "</li>");
    });
    
    $(".answer").show();
  });
});
