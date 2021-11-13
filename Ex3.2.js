let passengers =[
    [1,0],
    [2,1],
    [3,2],
    [4,3],
    [5,4],
    [6,5]
];

function numOfPassengers(passengers){

    let getInTo=0,getOf=0 ; 
  
    passengers.forEach(element => {
        getInTo += element[0] ;
        getOf += element[1] ;

    });
    return getInTo-getOf

}
console.log(numOfPassengers(passengers));