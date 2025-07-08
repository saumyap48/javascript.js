const buttons=document.querySelectorAll('.button');
const body=document.querySelector('body');

buttons.forEach(function(button){
  console.log(button);
  button.addEventListener('click',function(e){
    //console.log(e); 
   // console.log(e.target) e.target se pata chalta hai kaunsa button click hua.console.log() bas developer console me information print karta hai.
   //same as below code
   /*for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function(e) {
    console.log(e.target);
  });
}
*/
    if(e.target.id==='grey'){
      body.style.backgroundColor=e.target.id;
    }
    if(e.target.id==='white'){
      body.style.backgroundColor=e.target.id;
    }
    if(e.target.id==='yellow'){
      body.style.backgroundColor=e.target.id;
    }
    if(e.target.id==='blue'){
      body.style.backgroundColor=e.target.id;
    }
  })
});