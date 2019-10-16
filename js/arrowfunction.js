function log(value){
    console.log(value);
}
log('test');
function Car(){
    this.foo ='bar'
}
console.log(new Car());
//funcoes anonimas
var logs = function(value){
    console.log(value);
}
logs('test');

//Arrow functions não funciona como construtores, e hoisting
var sum = (a,b) => a + b;
console.log(sum (5,5));
//
var sub = (a,b) =>{
    if(a >b){}
    return a - b;
}
console.log(sub (15,5));
//
var mult = a => a * 5;
console.log(mult(3));

var createObj = () => ({test:123});
console.log(createObj());