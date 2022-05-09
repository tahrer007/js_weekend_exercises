//Ex3.1

function nb_year(p0, percent,aug, pf)
{
    let total=p0,years=0 ; 
    percent = percent/100 ; 

    while (total<pf)
    {
        total = total + total * percent + aug ;
        years++ ; 
    }

    return years ; 
}
console.log(nb_year(1500, 5, 100, 5000));