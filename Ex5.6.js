//Ex5.6 - Mask

let Password = 123 ; 
function maskPassword (Password)
{       if (Password.length<=4) return  Password ;
        let length = Password.length ;
        let masked = '#'.repeat(length-4);
        let unmasked = Password.slice(length-4, length) ; 
        return (masked.concat(unmasked))        
 
}


//console.log (maskPassword(Password+''.split(" ")));
console.log (maskPassword(Password+""));