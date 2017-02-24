//Business Logic

var count = function(blah){
  return blah;
};




//User Interface
$(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    numerials = ($("#numberEntry").val());
    output = count(numerials);
    $(".answer").show();
    $("#count").text(output);
  });
});
