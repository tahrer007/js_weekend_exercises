//Ex2.7 - Basic Math
function basicOp (opration , num1 , num2)
{
    switch(opration)
    {
        case '+':return num1+num2 ; 
        case '*':return num1*num2 ; 
        case '-':return num1-num2 ; 
        case '/':return num1/num2 ; 
    }
}

console.log(basicOp('+', 4, 7) );
console.log(basicOp('-', 15, 18) );
console.log(basicOp('*', 5, 5) );
console.log(basicOp('/', 49, 7) );

