//Block scope global scope
/*
let a=300
{
    let a=30
    console.log(a);
}
console.log(a); 
//nested function
//child function able to access parent variable vice versa is not possible
function one(){
    const username="hitesh"
    function two(){
        const website="youtube"
        console.log(username);

    }
    //console.log(website);
    two()
}
one()

if(true){
    const username="saumya"
    if(username==="saumya"){
        const website="youtube"
        console.log(username + website);
    }
    //console.log(website);
}
//console.log(username);
*/

//++++++++++++++++++intreseting+++++++++++++
console.log(addone())
function addone(num){
    return num+1
}

console.log(addTwo)
var addTwo=function(num){
    return num+2
}
//hoisting possible because we are using var not const and let 


