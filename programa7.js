

var notaUm=parseInt(prompt("escreva a primeira nota:"));


var notaDois=parseInt(prompt("escreva a segunda nota:"));


var notaTres=parseInt(prompt("escreva a terceira nota:"));


var notaQuatro=parseInt(prompt("escreva a quarta  nota:"));


var notaCinco=parseInt(prompt("escreva a quinta nota:"));


var notaSeis=parseInt(prompt("escreva a sexta nota:"));

var soma=notaUm+notaDois+notaTres+notaQuatro+notaCinco+notaSeis;
var media=soma/6;

while(notaUm&notaDois&notaTres&&notaQuatro&&notaCinco&&notaSeis <10){
alert(media);

}while(notaUm || notaDois || notaTres|| notaQuatro || notaCinco || notaSeis >10){
    alert("escreva somente valores menores que 10");
    var notaUm=parseInt(prompt("escreva a novamente primeira nota:"));


var notaDois=parseInt(prompt("escreva a novamente a segunda nota:"));


var notaTres=parseInt(prompt("escreva novamente a terceira nota:"));


var notaQuatro=parseInt(prompt("escreva novamente a quarta  nota:"));


var notaCinco=parseInt(prompt("escreva  novamente a quinta nota:"));


var notaSeis=parseInt(prompt("escreva novamente a sexta nota:"));


var soma=notaUm+notaDois+notaTres+notaQuatro+notaCinco+notaSeis;
var media=soma/6;

if(notaUm&&notaDois&&notaTres&&notaQuatro&&notaCinco&&notaSeis <10){
    alert(media);
}

}