//Immediately Invoked FUnction Expression(IIFE)
//global scope ke pollution se problem hoti hh kayi br to
//to global scope ke variable jo bhi uske pollution hh usko htane ke liye use kre hh ye
(function chai(){
    //named IIFE
    console.log(`DB CONNECTED`);
})();
(()=>{
    //Unnamed IIFE
    console.log(`DB CONNECTED`);
})();
//if using multiple functgion to we have to use semicolon so that he knows where it have to stop
//for single we can write like that
// (function chai(){
    // console.log(`DB CONNECTED`)
// })()

(function tea(name){
    console.log(`DB CONNECTED ${name}`);
})('saumya');
