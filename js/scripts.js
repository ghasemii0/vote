$(document).ready(function(){
  var age = parseInt(prompt("How old are you?"));
  if (age < 18){
    $(".young").show();
  } else {
    $("#register").show();
  }
});
