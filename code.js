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
let firstNum ;
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