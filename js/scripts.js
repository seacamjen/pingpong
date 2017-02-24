//Business Logic
var numberArray = [];
var sliced = [];

var count = function(pingpong){
  for (var i = 1; i <= numerials; i++) {
    numberArray.push(i);
    console.log(numberArray);
  }

  sliced = numberArray.slice(0, numerials);
  return sliced;
};


// "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"

//User Interface
$(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    numerials = parseInt($("#numberEntry").val());
    output = count(numerials);
    $(".answer").show();
    $("#count").text(output);
  });
});
