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
    console.log(preDisplay.toString() + item.toString());
 }else if(typeof item != 'number' && preDisplay != 0){
    //i need to display the minus sign if '-/+' is pressed or remove it.
    //but what if '=' is pressed, then we need to display the result
    // and if others like '+' are pressed similary
    // if 'AC' is pressed then we just clear everything
 }
}