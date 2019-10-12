function botao(){
    document.getElementById("agradecimento").innerHTML = "Obrigado por clicar";
}
function mudaPagina(){
    window.open("https://www.google.com");
    window.location.href="https://www.google.com";
}
function trocar(elemento){
    elemento.innerHTML = "Obrigado";
}
function passeomouse(elemento){
    elemento.innerHTML = "passe o mouse aqui";
}
/*
function soma(n1, n2){
    return n1+n2;
}
alert(soma(5,10));

var d = new Date();
alert(d.getMonth()+1);
var count;
for(count = 0; count <= 5; count++){
    console.log(count);
}
var count = 0;
while (count < 5){
    console.log(count);
    count = count + 1;
}
var idade = prompt("Qual sua idade");
if (idade >= 18){
    alert("Maior de idade");
}else{
    alert("Menor de idade");
}
var nome = "Jefferson de Lima";
var idade = 22;
alert("Bem vindo "+ nome);
alert(nome.replace("Lima", ""));
var frutas = [{nome:"maçã", cor: "vermelha"},{nome:"uva", cor: "roxa"}]
var lista = ["maçã", "pêra", "laranja"];
lista.push("uva");
lista.pop();
console.log(frutas[0].nome);
console.log(lista);
console.log(lista.toString());
console.log(lista.join(" - "));*/