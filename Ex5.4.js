//Ex5.4 - To Weird Case
let string = "string t" ; 

function changeWord(word){
    let WeirdCase=""; 
    
    for(let i = 0; i < word.length; i++){
        if (i % 2 === 0) {
            WeirdCase += word.charAt(i).toUpperCase();
        }
        else {
            WeirdCase += word.charAt(i).toLowerCase();
         }   
    }
    return WeirdCase;

}
function toWeirdCase(str)
{

    let arr = str.split(' ');
    let newArr =[];
    
    arr.forEach(element => {
        element
        newArr.push(changeWord(element));
    });

return newArr.join(' ');
     
}

console.log(toWeirdCase(string));