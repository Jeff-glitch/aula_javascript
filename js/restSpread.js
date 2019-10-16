function multipli(a,b){
    var value = 0;
    for(var i = 0; i < arguments.length; i++){
        value += arguments[i];
    }
    return value;
}
//rest operator ...
function multipli(... args){
    return args.reduce((acc, value) => acc * value, 1);
}

const sum = (...args) => args.reduce((acc, value) => acc + value, 0);
//spread operator strings arrays obj  e obj iteraveis

const str = 'digital innovation';
const arr = [1,2,3,4];
function logArgs(...args){
    console.log(args);
}
function logArg(a,b,c){
    console.log(a,b,c);
}
logArg(...arr);//spread

const arr2 = [...arr,5,6,7];

const obj ={
    test: 123
}
const obj2 ={
    ...obj,
    test2: 'hello'
}