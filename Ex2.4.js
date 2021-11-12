//Ex2.4 - Unique
arr=[ 1, 1, 1, 2, 1, 1 ];
arr2=[0, 0, 0.55, 0, 0 ];

function findUnique (arr){
    
    for (let i =0 ; i< arr.length ; i++)
    {
        if(arr[0]!==arr[i])return arr[i]; 
    }

    /*arr.forEach(element => {
           element
        if (element!==arr[0])return element ; 
    });*/

    return arr[0] ; 

}

console.log(findUnique(arr2));
 