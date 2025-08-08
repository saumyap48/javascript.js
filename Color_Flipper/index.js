// const body=document.getElementsByTagName("body")[0]
// function setColor(name){
// body.style.backgroundColor=name;
// }
// function randomColor(){
//   const red=Math.round(Math.random()*255)
//    const green=Math.round(Math.random()*255)
//     const blue=Math.round(Math.random()*255)
//     const color=`rgb(${red},${green},${blue})`
//     body.style.backgroundColor=color;
// }
const body=document.getElementById("body");
const button=document.querySelectorAll(".button");
function setColor(color){
  body.style.backgroundColor=color;
}
button.forEach(function(button){
  button.addEventListener("click",function(){
   const color=button.id;
   if(color=="random"){
    const red=Math.round(Math.random()*255);
    const green=Math.round(Math.random()*255);
    const blue=Math.round(Math.random()*255);
    const randomcolor=`rgb(${red},${green},${blue})`
    body.style.backgroundColor=randomcolor;
      }else{
       body.style.backgroundColor=color;
      }   
});
});
