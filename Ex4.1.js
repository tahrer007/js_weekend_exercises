//Ex4.1 - Fibonacci - 11
let x =1 , y=1 ; 

function Fibonacci (x,y)
{
    let maxLength = 256 ; 
    const arr =  [x,y];
    arr
    let sum ; 
    for (let i = 0 ; i< 10 ;i++)
    { 

         sum = arr[i]+arr[i+1];
         arr.push(sum) ; 
      
    }

return arr 
}


console.log(Fibonacci(x,y))