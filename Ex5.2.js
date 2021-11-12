//Ex5.2 - String Repeat
function repeatStr(num, test)
{
    let str ='';
   
    for( let i = 0 ; i <num ; i++) str = str.concat(test) ; 
    return str ; 
}



console.log(repeatStr(5, "Hello"));