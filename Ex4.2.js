//Ex4.1 - Fibonacci - 11
let x =0 , y=0 ,z=1 ; 

function Fibonacci (arr)
{
    let maxLength = 10 ; 
    
    
    let sum ; 
    for (let i =2 ; i< maxLength ; i++)
    { 

         sum = arr[i] + arr[i-2] + arr[i-1];
         arr.push(sum) ; 
     
      
    }

return arr 
}


console.log(Fibonacci([x,y,z]))