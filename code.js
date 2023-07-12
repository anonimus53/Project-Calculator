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
let firstNum = 0;
let secondNum = 0;
let operator = 'none';
let signOn = 0;
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

//has dot been used?
let dotExist = 0;
//current display of screen
let preDisplay = 0;
//get screen
const screen = document.getElementById('screen');
//display the number alone if zero is present or the number with the existing
//ex: screen has already 1 and you press 2, you get 12
function display(item){
 if(typeof item == 'number' && preDisplay == 0){
    let setNum = item.toString();
    screen.textContent = setNum;
    preDisplay = setNum;
 }else if(typeof item == 'number' && preDisplay != 0){
    // join the 2 numbers as strings and display them
    let setNum = preDisplay.toString() + item.toString();
    screen.textContent = setNum;
    preDisplay = setNum;
 }else if(item == '-/+' && signOn == 0){
   let setNum = '-' + preDisplay.toString();
   screen.textContent = setNum;
   preDisplay = setNum;
   signOn = 1;
 }else if(item == '-/+' && signOn == 1){
    let itemsArray = [...preDisplay];
    itemsArray.shift();
    let setNum = itemsArray.join('');
    screen.textContent = setNum;
    preDisplay = setNum;
    signOn = 0;
 }else if(item == 'AC'){
    let setNum = '0';
    screen.textContent = setNum;
    preDisplay = setNum;
    dotExist = 0;
 }else if(item == '.' && dotExist == 0){
   let setNum = preDisplay.toString() + item.toString();
   screen.textContent = setNum;
   preDisplay = setNum;
   dotExist = 1;
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
//Event Listeners
//button one
const one = document.getElementById('one');
one.addEventListener('click', function(){
 display(1);
})
//button 2
const two = document.getElementById('two');
two.addEventListener('click', function(){
   display(2);
  })
//button 3
const three = document.getElementById('three');
three.addEventListener('click', function(){
   display(3);
  })
//button 4
const four = document.getElementById('four');
four.addEventListener('click', function(){
   display(4);
  })
//button 5
const five = document.getElementById('five');
five.addEventListener('click', function(){
   display(5);
  })
//button 6
const six = document.getElementById('six');
six.addEventListener('click', function(){
   display(6);
  })
//button 7
const seven = document.getElementById('seven');
seven.addEventListener('click', function(){
   display(7);
  })
//button 8
const eight = document.getElementById('eight');
eight.addEventListener('click', function(){
   display(8);
  })
//button 9
const nine = document.getElementById('nine');
nine.addEventListener('click', function(){
   display(9);
  })
//button 0
const zero = document.getElementById('zero');
zero.addEventListener('click', function(){
   display(0);
  })
//button .
const dot = document.getElementById('dot');
dot.addEventListener('click', function(){
   display('.');
  })
//button =
const equals = document.getElementById('equals');
//button +
const plus = document.getElementById('plus');
//button -
const minus = document.getElementById('minus');
//button *
const multi = document.getElementById('multi');
//button /
const division = document.getElementById('division');
//button AC
const ac = document.getElementById('ac');
ac.addEventListener('click', function(){
   display('AC')
})
//button -/+
const sign = document.getElementById('sign');
sign.addEventListener('click', function(){
   display('-/+')
})
//button %
const remnat = document.getElementById('remnat');
//end

