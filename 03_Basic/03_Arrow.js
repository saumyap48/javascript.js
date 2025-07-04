
const user={
    username:"Saumya",
    price:999,

    welcomeMessage:function(){
        console.log(`${this.username},welcome to website`);
        //this works for object only not going to work same with in the case of function
        //this current context ki bt krta current value
        // console.log(this)
    }
}
// user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage()
console.log(this)//show empty {}
//Browser ke andar jo global object hh wo hh window object 


//++++++++ ArrowFunction++++++++
// const addTwo=(num1,num2)=>{
    // return num1+num2
// }
//implicity return
// no need to use return
const addTwo=(num1,num2)=>(num1+num2)

console.log(addTwo(3,4))


