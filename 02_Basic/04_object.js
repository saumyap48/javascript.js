//it is a singelton object
//const tinder=new Object()
//it is a not singelton object

const tinder={}
tinder.id="123abc"
tinder.name="saumya"
tinder.isLoggedIn=false
console.log(tinder)
/*
const regularUser={
    email:"saumyap100@gmail.com",
    fullname:{
        userfullname:{
            firstname:"saumya",
            lastname:"pandey"
        }
    }
}
console.log(regularUser.fullname.userfullname)
*/
//const obje1={1:"a", 2:"b"}
//const obje2={3:"a", 4:"b"}
//const objec3={obje1,obje2}
//const objec3=Object.assign(obje1,obje2)
//Best practise
//const obje3=Object.assign({},obje1,obje2)
//console.log(obje3)
//const obj3={...obje1,...obje2}
//console.log(obj3);
console.log(tinder);
console.log(Object.keys(tinder));
console.log(Object.values(tinder));
console.log(Object.entries(tinder));
console.log(tinder.hasOwnProperty('isLoggedIn'));
