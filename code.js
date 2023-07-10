//oporations
function add(a, b){
   sum =  a + b;
   console.log(sum);
   return sum;
}

function subtract(a, b){
   differce = a - b;
   console.log(differce);
   return differce;
}

function multiply(a, b){
    product = a * b;
    console.log(product)
    return product;
}

function divide(a,b){
    quotient =  a / b;
    console.log(quotient)
    return quotient;
}
let firstNumfu ;
let secondNum ;
let operator ;
//choose right oporation
function operate(operator, firstNum, secondNum){
    if(operator == '+'){
        add(firstNum, secondNum);
    }
    else if(operator == '-'){
        subtract(firstNum, secondNum);
    }
    else if(operator == '*'){
        multiply(firstNum, secondNum);
    }
    else if(operator == '/'){
        divide(firstNum, secondNum);
    }
}
//buttons functionality

//current display of screen
let preDisplay = 0;
//get screen
const screen = document.getElementById('screen');
//display the number alone if zero is present or the number with the existing
//ex: screen has already 1 and you press 2, you get 12
function display(item){
 if(typeof item == 'number' && preDisplay == 0){
    console.log(item);
 }else if(typeof item == 'number' && preDisplay != 0){
    // join the 2 numbers as strings and display them
    console.log(preDisplay.toString() + item.toString());
 }else if(item == '-/+' && preDisplay > 0){// preDisplay to number?
    console.log('display minus sign');
 }else if(item == '-/+' && preDisplay < 0){// preDisplay to number?
    console.log('remove minus sign');
 }else if(item == 'AC'){
    console.log('clear screen')
 }else if(item == '.'){
    console.log(preDisplay.toString() + item.toString());
 }
 else if(item == '+'){
    console.log('add the num on screen with the following');
 }
 else if(item == '-'){
    console.log('subtrack the num on screen with the following');
 }
 else if(item == '*'){
    console.log('multiply the num on screen with the following');
 }
 else if(item == '/'){
    console.log('divide the num on screen with the following');
 }
 else if(item == '='){//...here we need more work
    console.log('display result');
 }
 else if(item == '%'){
    console.log('reminder of num on screen with the following');
 }
}