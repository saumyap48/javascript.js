 /*
 let score="33abc";
console.log(typeof score);
console.log(typeof(score));

let valueInNumber=Number(score);
console.log(typeof valuInNumber);
//string
//string
//number
//NaN 
*/
/*
let score=null;
console.log(typeof score);
console.log(typeof(score));

let valueInNumber=Number(score);
console.log(typeof valuInNumber);
output:
//object
//object
//number
//0
*/
/*
let score=undefined;
console.log(typeof score);
console.log(typeof(score));

let valueInNumber=Number(score);
console.log(typeof valuInNumber);
output:
//undefined
//undefined
//number
//NaN
*/
/*
let score=true;
console.log(typeof score);
console.log(typeof(score));

let valueInNumber=Number(score);
console.log(typeof valuInNumber);
output:
Boolean
Boolean
Number
1
*/
//string cannot into number to NaN dega wo bhii


/*
"33"=>33
"33abc"=>NaN
true=>1;
false=>0;
 */
let isLoggedIn="hitesh";
let booleanIsLoggedIn=Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

//1=> true; 0=>false
//""=>false;
//"hitesh"=>true;


//********Operations********//
/*
console.log("1"+2); //12
console.log(1+"2"); //12
console.log("1"+2+2);//122
console.log(1+2+"2");//32
agar string phle to sbko string trah treat kiya jaega 
agar number phle to sbko number trah treat kiya jaega
*/
//comparsion convert null to
//a number,treating it as 0. 
console.log(null>0);//false
console.log(null>=0);//false
console.log(null==0);//true
//===  strict check also check datatype
console.log("2"===2);//false;