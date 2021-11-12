let testingArr = [1,0,0,0,0,0,0,0] ;

const intger =(arr) =>{

let sum =0 ;
 
for(let i = arr.length-1 , j=0  ; i>=0 ; i-- ,j++)
{
   console.log(i);
    sum+=( arr[j] * Math.pow(2, i));
}
return sum ;
}

console.log (intger(testingArr));