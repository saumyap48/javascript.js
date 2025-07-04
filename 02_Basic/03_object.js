//singleton
//object.create


//object Literals

const mysym=Symbol("key1")

const jsUser={
    name: "Saumya",
    //have to use in square bracket for symbol else it runs but the data type is not symbol
    [mysym]:"myKey1",
    "full name":"Saumya Pandey",
    age:21,
    location:"India",
    email:"saumyap100@gmail.com",
    isLoggedIn: false,
    LastloginDays:["Monday","Saturday"]
}
console.log(jsUser.email)
console.log(jsUser["age"])//type string lea pdega for printing
// ye ni likh skte dot operator  se ni hoga ye
// console.log(jsUser.full name)
console.log(jsUser["full name"])
console.log(jsUser[mysym])
//how to change value of object
jsUser.email="saumya271@gmail.com"
//Object.freeze(jsUser)
//its value will not update
jsUser.email="saumya960@gmail.com"
console.log(jsUser)

 jsUser.greeting=function(){
    console.log("Hello js User");
 }
 jsUser.greetingTwo=function(){
    console.log(`Hello js User,${this.name}`);
 }
 console.log(jsUser.greeting());
 console.log(jsUser.greetingTwo());
 console.log(jsUser.greeting)

