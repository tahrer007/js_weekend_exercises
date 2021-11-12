//Ex2.1 - Sum of lowest numbers
let arr = [19, 5, 42, 2, 77] ; 

function sumOftheLowest (arr)
{
    let min ; 
    let min2; 
    if (arr[0]>arr[1])
    {
        min2= arr[0];
        min=arr[1];

    }else {
        min2= arr[1];
        min=arr[0];
    }
    arr.slice(2).forEach(element => {
        console.log(element)
        if( element<min && element <min2)
        {   
            min2=min ; 
            console.log(element)
            min = element ; 
        }
         else if (element<min2)
        {
            min2 = element  ; 
            console.log(min2) ; 
        }
      
    });

    return min2 + min ; 
}

console.log(sumOftheLowest(arr));