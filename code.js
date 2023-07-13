//oporations
function add(a, b){
   let sum =  a + b;
   
   return sum;
}

function subtract(a, b){
   let differce = a - b;
   
   return differce;
}

function multiply(a, b){
    let product = a * b;
   
    return product;
}

function divide(a,b){
    let quotient =  a / b;
    return quotient;
}

function reminder(a,b){
   let remind = a % b;
   return remind;
}
//let's copy some code from else where 
function formatCompactNumber(number) {
   const formatter = Intl.NumberFormat("en", { notation: "compact" });
   return formatter.format(number);
 }
//...
let firstNum = 0;
let secondNum = 0;
let secondGiven = 0;
let operator = '';
let signOn = 0;
//choose right oporation
function operate(operator, firstNum, secondNum){
   let result = 0; 
   if(operator == '+'){
         result = add(firstNum, secondNum);
    }
    else if(operator == '-'){
      result = subtract(firstNum, secondNum);
    }
    else if(operator == '*'){
      result = multiply(firstNum, secondNum);
    }
    else if(operator == '/'){
      result = divide(firstNum, secondNum);
    }
    else if(operator == '%'){
      result = reminder(firstNum, secondNum);
    }
    return result;
}
//buttons functionality
//oporation called
let opActive = 0;
//has dot been used?
let dotExist = 0;
//current display of screen
let preDisplay = 0;
//get screen
const screen = document.getElementById('screen');
//display the number alone if zero is present or the number with the existing
//ex: screen has already 1 and you press 2, you get 12
function display(item){
 if(typeof item == 'number' && preDisplay == 0 && opActive == 0){
    let setNum = item.toString();
    screen.textContent = setNum;
    preDisplay = setNum;
    firstNum = Number(preDisplay);
 }else if(typeof item == 'number' && preDisplay != 0 && opActive == 0 &&
 preDisplay.length < 6){
    // join the 2 numbers as strings and display them
    let setNum = preDisplay.toString() + item.toString();
    screen.textContent = setNum;
    preDisplay = setNum;
    firstNum = Number(preDisplay);
 }else if(typeof item == 'number' && opActive == 1 && secondGiven == 0){
    secondGiven = 1;
    let setNum = item.toString();
    screen.textContent = setNum;
    preDisplay = setNum;
    secondNum = Number(preDisplay);
 }else if(typeof item == 'number' && opActive == 1 && preDisplay != 0 &&
 secondGiven == 1 && preDisplay.length < 6){
   // join the 2 numbers as strings and display them for the second num
   let setNum = preDisplay + item.toString();
   screen.textContent = setNum;
   preDisplay = setNum;
   secondNum = Number(preDisplay);
}else if(item == '-/+' && signOn == 0 ){
   if(secondGiven == 0){
   let setNum = '-' + preDisplay;
   screen.textContent = setNum;
   preDisplay = setNum;
   signOn = 1;
   firstNum = Number(preDisplay);
   }else{
      let setNum = '-' + preDisplay;
   screen.textContent = setNum;
   preDisplay = setNum;
   signOn = 1;
   secondNum = Number(preDisplay);
   }
 }else if(item == '-/+' && signOn == 1 ){
   if(secondGiven == 0){ 
   let itemsArray = [...preDisplay];
    itemsArray.shift();
    let setNum = itemsArray.join('');
    screen.textContent = setNum;
    preDisplay = setNum;
    signOn = 0;
    firstNum = Number(preDisplay);
   }else{
   let itemsArray = [...preDisplay];
    itemsArray.shift();
    let setNum = itemsArray.join('');
    screen.textContent = setNum;
    preDisplay = setNum;
    signOn = 0;
    secondNum = Number(preDisplay);
   }
 }else if(item == 'AC'){
    let setNum = '0';
    screen.textContent = setNum;
    preDisplay = setNum;
    dotExist = 0;
    firstNum = Number(preDisplay);
    opActive = 0;
    secondGiven = 0;
    secondNum = 0;
    signOn = 0;
    operator = '';
 }else if(item == '.' && dotExist == 0){
   if(secondGiven == 0 && opActive == 0){
   let setNum = preDisplay.toString() + item.toString();
   screen.textContent = setNum;
   preDisplay = setNum;
   dotExist = 1;
   firstNum = Number(preDisplay);
   }else if(secondGiven == 1 && opActive == 1){
   let setNum = preDisplay + item.toString();
   screen.textContent = setNum;
   preDisplay = setNum;
   dotExist = 1;
   secondNum = Number(preDisplay);
   }
 }
 else if(item == '+' && opActive == 0){
    opActive = 1;
    operator = '+';
    firstNum = Number(preDisplay);
    dotExist = 0;
    signOn = 0;
 }
 else if(item == '-' && opActive == 0){
   opActive = 1;
   operator = '-';
   firstNum = Number(preDisplay);
   dotExist = 0;
   signOn = 0;
 }
 else if(item == '*' && opActive == 0){
   opActive = 1;
   operator = '*';
   firstNum = Number(preDisplay);
   dotExist = 0;
   signOn = 0;
 }
 else if(item == '/' && opActive == 0){
   opActive = 1;
   operator = '/';
   firstNum = Number(preDisplay);
   dotExist = 0;
   signOn = 0;
 }
 else if(item == '=' && opActive == 1 && typeof secondNum == 'number' && secondGiven == 1){
    if(operator == '/' && secondNum == 0){
      let setNum = 'ERROR';
      screen.textContent = setNum;
      preDisplay = 0;
      opActive = 0;
      firstNum = 0;
      secondNum = 0;
      secondGiven = 0;
      dotExist = 0;
    }else{
    let getNum = operate(operator, firstNum, secondNum);
    
    if(getNum < 10.0000){
      let roundme = getNum.toFixed(2);
      
      let setNum = roundme.toString();
     
    screen.textContent = setNum;
    preDisplay = setNum;
    opActive = 0;
    firstNum = Number(preDisplay);
    secondNum = 0;
    secondGiven = 0;
    dotExist = 0;
    }else if(getNum > 10.0000){
      let setNum = formatCompactNumber(getNum);;
      screen.textContent = setNum;
      preDisplay = setNum;
      firstNum = Number(preDisplay);
      secondNum = 0;
      secondGiven = 0;
      dotExist = 0;
      signOn = 0;
    }
    else{
    let setNum = getNum.toString();
    screen.textContent = setNum;
    preDisplay = setNum;
    opActive = 0;
    firstNum = Number(preDisplay);
    secondNum = 0;
    secondGiven = 0;
    dotExist = 0;
    //console.log('bug')
    }
   }
 }
 else if(item == '%' && opActive == 0){
   opActive = 1;
   operator = '%';
   firstNum = Number(preDisplay);
   dotExist = 0;
   signOn = 0;
 }else if(item == '+' || item == '-' || item == '*' 
 || item == '/' || item == '%' && opActive == 1 
 && typeof secondNum == 'number' && secondGiven == 1){
   if(operator == '/' && secondNum == 0){
      let setNum = 'ERROR';
      screen.textContent = setNum;
      preDisplay = 0;
      opActive = 0;
      firstNum = 0;
      secondNum = 0;
      secondGiven = 0;
      dotExist = 0;
    }else{
   let getNum = operate(operator, firstNum, secondNum);
   
    if(getNum < 10.0000){
      let roundme = getNum.toFixed(2);
      
      let setNum = roundme.toString();
     
    screen.textContent = setNum;
    preDisplay = setNum;
    opActive = 0;
    firstNum = Number(preDisplay);
    secondNum = 0;
    secondGiven = 0;
    dotExist = 0;
    }else if(getNum > 10.0000){
      let setNum = formatCompactNumber(getNum);;
      screen.textContent = setNum;
      preDisplay = setNum;
      firstNum = Number(preDisplay);
      secondNum = 0;
      secondGiven = 0;
      dotExist = 0;
      signOn = 0;
    }
    else{
   let setNum = getNum.toString();
   screen.textContent = setNum;
   preDisplay = setNum;
   firstNum = Number(preDisplay);
   secondNum = 0;
   secondGiven = 0;
   dotExist = 0;
   signOn = 0;
    }
   }
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
const ecualsign = document.getElementById('ecualsign');
ecualsign.addEventListener('click', function(){
   display('=');
  })
//button +
const plus = document.getElementById('plus');
plus.addEventListener('click', function(){
   display('+');
  })
//button -
const minus = document.getElementById('minus');
minus.addEventListener('click', function(){
   display('-');
  })
//button *
const multi = document.getElementById('multi');
multi.addEventListener('click', function(){
   display('*');
  })
//button /
const division = document.getElementById('division');
division.addEventListener('click', function(){
   display('/');
  })
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
remnat.addEventListener('click', function(){
   display('%');
  })
//all this could be summarized but i'm Lazy XD