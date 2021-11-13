//Ex5.3 - To Camel Case
let string = "the_stealth_warrior" ; 
function toCamleCase (string){
    let wordsArr ; 
    if(string.includes("-")) wordsArr = string.split('-'); 
    else wordsArr = string.split('_'); 
    
    for (let i=1 ; i< wordsArr.length ; i++)
        {
           
            wordsArr[i] = wordsArr[i].charAt(0).toUpperCase()+wordsArr[i].substr(1);
        }
   
 return wordsArr.join('')
}


console.log(toCamleCase(string));

