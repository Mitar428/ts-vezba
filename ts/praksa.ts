let age:string="dvadeset jedan";
age="dvadeset"

function pozdrav(ime:string,uzvik:string="zdravo"):string{
return `${uzvik}, ${ime}!`;
}

console.log(pozdrav("Marko"))
console.log(pozdrav("mitar"));
let id:number | string=5;
id="abc";
