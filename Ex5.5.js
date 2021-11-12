//Ex5.5 - Abbreviate two words
function convertToIntial(string){
    let firstWordCh =string[0].toUpperCase();
    
    let secondWordIdx = string.indexOf(' ')+1 ; 
     
    return firstWordCh+'.'+string[secondWordIdx].toUpperCase();


}

console.log(convertToIntial('tahrer abudiab'))