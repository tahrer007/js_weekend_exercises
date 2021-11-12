
function indNextSquare(squar)
{
    let number = Math.sqrt(squar);
    if(number%1)return -1 ; 
    return Math.pow(++number,2);

}

console.log(indNextSquare(3));