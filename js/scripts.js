//Business Logic
var numberArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
var sliced = [];


var count = function(pingpong){
  sliced = numberArray.slice(0, numerials);
  return sliced;
};




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
