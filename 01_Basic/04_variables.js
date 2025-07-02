//Primitive data types
//call by value actual data is not copy is passed
// 7 types : String,Number,Boolean,null,undefined,Symbol,BigInt
//is  you made two symbol having same value still they give you false or not equal
const id=Symbol('123');
const id2=Symbol('123');
//they give output as false

//Reference data types (Non-primitive)
//Array,objects,functions 
const heros=["saktiman, naagraj,doga"];
let myObj={
    name:"Saumya",
    age:22,
}

const myFunction=function(){
    console.log("Hello world");
}

//Stack(Primitive) ,Heap(Non-primitive)
let userOne={
    emial:"User@google.com",
    upi:"user@ybl",
}
let userTwo=userOne;
userTwo.email="saumya@goggle.com"
console.log(userOne.email);
console.log(userTwo.email);