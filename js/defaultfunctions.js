//lazy evaluation
function randomNumber(){
    return Math.random() * 10;
}
/*
function multipli(a,b = 1){
    return a * b;
}
*/
function multipli(a,b = randomNumber()){
    return a * b;
}
console.log(multipli(5));
console.log(multipli(5,5));

/// objetos literais
var obj ={
    prop1: 'primeira prop',
    method: function(){}
};

var obj ={
    prop1: 'primeira prop',
    method (){}
};

var prop1 = 'primeira prop';
function method(){}
var obj = {
    prop1,
    method
}
var obj = {
    [prop1]: 'value',
    method
}

obj.method();