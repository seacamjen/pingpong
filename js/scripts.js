//Business Logic
var numberArray = [];
var sliced = [];
var list = [];

var count = function(pingpong){
  for (var i = 1; i <= numerials; i++) {
    numberArray.push(i);
  }
  // debugger;
  for (var i = 0; i <= numerials; i++) {
    if (numberArray[i] % 15 === 0){
      var a = numberArray.indexOf(numberArray[i]);
      numberArray.splice(a,1,"ping-pong");
    } else if (numberArray[i] % 5 === 0){
      var a = numberArray.indexOf(numberArray[i]);
      numberArray.splice(a,1,"pong");
    } else if (numberArray[i] % 3 === 0) {
      var a = numberArray.indexOf(numberArray[i]);
      numberArray.splice(a,1,"ping");
    } else{

    }
  }
  sliced = numberArray.slice(0, numerials);
  return sliced;
};




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
