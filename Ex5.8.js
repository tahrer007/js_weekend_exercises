//Ex5.8 - shortest words version 2

let string ="AAa bb  cc dd ttt SDFGDSFSDFSDF DSFDSDSFSFDSFDSFDSFAWEFDASF"; 
let strSplit = string.split(" ");
strSplit;

function findTheLongestWOrd (strSplit)
{
    const longestWordsArray = [];
    let longestWordLength = 0 ; 
    
    strSplit.forEach(element => {
        
        if (element.length>longestWordLength)
        {
           
           longestWordsArray.length=0;
           longestWordsArray.push(element); 
           longestWordLength=element.length;
           

        }
        else if (element.length===longestWordLength) longestWordsArray.push(element);
        
    });

 return longestWordsArray
}

console.log(findTheLongestWOrd(strSplit));