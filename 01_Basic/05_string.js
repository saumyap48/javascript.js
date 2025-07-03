const name="saumya";
const namme="riya";
//console.log(name+namme);
console.log(`Hello my name is ${name} and my repo count is ${namme}`);
//declare string as object
const gameName=new String('Badminton');
console.log(gameName[0]);
console.log(gameName._proto_);
console.log(gameName.length)
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('m'));
const newString=gameName.substring(0,4);
console.log(newString);
const anotherString=gameName.slice(-8,5);
console.log(anotherString);
const newStringOne="   saumya    ";
console.log(newStringOne.length);
console.log(newStringOne.trim());
const url="https://www.youtube.com/@20%saumya_pandey";
console.log(url.replace('20%','-'))
console.log(url.includes('sundar'))
const game=new String('hitesh-hc-com')
console.log(game.split('-'));