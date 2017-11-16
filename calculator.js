const numDisplay = document.getElementById("display");
const numberButtons = document.getElementsByClassName("num");
const equals = document.getElementById("equals");
const addition = document.getElementById("add");
const subtraction = document.getElementById("subtract");
const division = document.getElementById("divide");
const multiplication = document.getElementById("multiply");
const clear = document.getElementById("clear");

document.addEventListener("DOMContentLoaded" , () => {
  for(let i = 0; i < numberButtons.length; i++){
      numberButtons[i].addEventListener("click" , function(){
        let value = this.value;
        let textNode = document.createTextNode(value);
        numDisplay.appendChild(textNode);
        console.log(numDisplay.innerHTML);
        clear.addEventListener("click" , () => {
          numDisplay.innerHTML = "";
          numberButtons.value = 0;
          window.parent.location = window.parent.location.href;
      });
    });
  }
  
  subtraction.addEventListener("click" , () => {
    let currentNums = numDisplay.innerHTML;
    let nums = parseFloat(currentNums);
    numDisplay.innerHTML = "";
    equals.addEventListener("click" , function equalSub(){
      let secondCurrentNums = numDisplay.innerHTML;
      let secondNums = parseFloat(secondCurrentNums);
      let total = nums - secondNums;
      console.log(total);
      numDisplay.innerHTML = total;
      equals.removeEventListener("click" , equalSub);      
    });
  });
  
  addition.addEventListener("click" , () => {
    let currentNums = numDisplay.innerHTML;
    let nums = parseFloat(currentNums);
    numDisplay.innerHTML = "";
    equals.addEventListener("click" , function equalAdd(){
      let secondCurrentNums = numDisplay.innerHTML;
      let secondNums = parseFloat(secondCurrentNums);
      let total = nums + secondNums;
      console.log(total);
      numDisplay.innerHTML = total;
      equals.removeEventListener("click" , equalAdd);      
    });
  });
  
  division.addEventListener("click" , () => {
    let currentNums = numDisplay.innerHTML;
    let nums = parseFloat(currentNums);
    numDisplay.innerHTML = "";
    equals.addEventListener("click" , function equalDiv(){
      let secondCurrentNums = numDisplay.innerHTML;
      let secondNums = parseFloat(secondCurrentNums);
      let total = nums / secondNums;
      console.log(total);
      numDisplay.innerHTML = total;
      equals.removeEventListener("click" , equalDiv);      
    });
  });
  
  multiplication.addEventListener("click" , () => {
    let currentNums = numDisplay.innerHTML;
    let nums = parseFloat(currentNums);
    numDisplay.innerHTML = "";
    equals.addEventListener("click" , function equalMult(){
      let secondCurrentNums = numDisplay.innerHTML;
      let secondNums = parseFloat(secondCurrentNums);
      let total = nums * secondNums;
      console.log(total);
      numDisplay.innerHTML = total;
      equals.removeEventListener("click" , equalMult);
    });
  });
});