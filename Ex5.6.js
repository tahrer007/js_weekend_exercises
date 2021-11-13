//Ex5.6 - Mask

let Password = 12345 ; 
function maskPassword (Password)
{
        let length = Password.length ;
        let masked = '#'.repeat(length-4);
        let unmasked = Password.slice(length-4, length) ; 
        return (masked.concat(unmasked))        
 
}


//console.log (maskPassword(Password+''.split(" ")));
console.log (maskPassword(Password+""));