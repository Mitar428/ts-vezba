let age:number=25;
age="dvadeset pet";

function pozdrav(ime:string,uzvik:string="zdravo"):string{
return '${uzvik}, ${ime}!';
}

console.log(pozdrav("Marko"))
console.log(pozdrav(42));
let id:number | string=5;
id="abc";
id=true;