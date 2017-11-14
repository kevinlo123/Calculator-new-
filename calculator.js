var numDisplay = document.getElementById("display");
var numberButtons = document.getElementsByClassName("num");
var equals = document.getElementById("equals");
var addition = document.getElementById("add");
var subtraction = document.getElementById("subtract");
var division = document.getElementById("divide");
var multiplication = document.getElementById("multiply");
var clear = document.getElementById("clear");

document.addEventListener("DOMContentLoaded" , function(){
  for(i = 0; i < numberButtons.length; i++){
      numberButtons[i].addEventListener("click" , function(){
        var value = this.value;
        var textNode = document.createTextNode(value);
        numDisplay.appendChild(textNode);
        console.log(numDisplay.innerHTML);
        clear.addEventListener("click" , function(){
          numDisplay.innerHTML = "";
          numberButtons.value = 0;
          window.parent.location = window.parent.location.href;
      });
    });
  }
  
  subtraction.addEventListener("click" , function(){
    var currentNums = numDisplay.innerHTML;
    var nums = parseFloat(currentNums);
    numDisplay.innerHTML = "";
    equals.addEventListener("click" , function(){
      var secondCurrentNums = numDisplay.innerHTML;
      var secondNums = parseFloat(secondCurrentNums);
      var total = nums - secondNums;
      console.log(total);
      numDisplay.innerHTML = total;
    });
  });
  
  addition.addEventListener("click" , function(){
    var currentNums = numDisplay.innerHTML;
    var nums = parseFloat(currentNums);
    numDisplay.innerHTML = "";
    equals.addEventListener("click" , function(){
      var secondCurrentNums = numDisplay.innerHTML;
      var secondNums = parseFloat(secondCurrentNums);
      var total = nums + secondNums;
      console.log(total);
      numDisplay.innerHTML = total;
    });
  });
  
  division.addEventListener("click" , function(){
    var currentNums = numDisplay.innerHTML;
    var nums = parseFloat(currentNums);
    numDisplay.innerHTML = "";
    equals.addEventListener("click" , function(){
      var secondCurrentNums = numDisplay.innerHTML;
      var secondNums = parseFloat(secondCurrentNums);
      var total = nums / secondNums;
      console.log(total);
      numDisplay.innerHTML = total;
    });
  });
  
  multiplication.addEventListener("click" , function(){
    var currentNums = numDisplay.innerHTML;
    var nums = parseFloat(currentNums);
    numDisplay.innerHTML = "";
    equals.addEventListener("click" , function(){
      var secondCurrentNums = numDisplay.innerHTML;
      var secondNums = parseFloat(secondCurrentNums);
      var total = nums * secondNums;
      console.log(total);
      numDisplay.innerHTML = total;
    });
  }); 
});