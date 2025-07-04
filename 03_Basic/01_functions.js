/*function addTwoNumbers(number1,number2){
    console.log(number1+number2);
}
const answer=addTwoNumbers(3,null)
*/

function addTwoNumbers(number1,number2){
    let result=number1+number2
    return result
}
const result=addTwoNumbers(3,5)
console.log("Answer",result);

//console.log using function we cannot store the value for storing we have to return it
 function loginUserMessage(username){
    return`${username} just logged in`
 }
 console.log(loginUserMessage("Saumya"))
 //when you do not provide any argumnet you will get undefined
 //Rest operator
 function calculateCartPrice(...num1){
    return num1
 }
 console.log(calculateCartPrice(200,400,500,2000))

 function calculateCartPric(val1,val2,...num1){
    return num1
 }
 console.log(calculateCartPric(200,400,500,2000))
 //Function with objects

 const user={
    username:"Saumya",
    prices:199
 }
 function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.prices}`);
 }
 handleObject(user)

 //direct passing without using
 handleObject({
    username:"sam",
    prices:399
 })

 //function with array
const mynewarray=[200,400,100,600]
function returnSecondValue(getArray){
    return getArray[1]
}
//console.log(returnSecondValue(mynewarray));
console.log(returnSecondValue([200,400,500,1000]));

