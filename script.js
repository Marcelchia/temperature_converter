console.log("hello script js");

var inputHappened = function(currentInput){
  console.log( currentInput );
  var output = (currentInput-32)*5/9 +273.15;
  var output2 = (output-273.15);
  return output + " K " + output2 + "C" ;
};