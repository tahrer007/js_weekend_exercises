//Ex5.7 - shortest words

function indexOfShortestWords (words)
{
    let length=shortest= words.length,counter =0  ; 

    for (let i=0 ; i<length;i++ )
    {
        if(words[i]==' ')
        {
            if(counter<shortest)
            {
                shortest=counter ; 
                counter = 0 ; 
            }else counter =0 ; 

        }else  counter ++ ; 
       
    }
    return shortest; 
}


console.log(indexOfShortestWords('the best part of the school was the break '))