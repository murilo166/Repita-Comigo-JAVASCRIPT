


var alunos=prompt("escreva o nome do seu aluno");

var nota=parseInt(prompt("escreva a primeira nota:"));

var notaDois=parseInt(prompt("escreva a segunda nota:"));

var soma=nota+notaDois;


var media=soma/2;




if(media>=9.5){
    alert("voce esta aprovado!");
    var escolhas=parseInt(prompt("Calcular a média de outro aluno Sim/Não?" + "<br>" + "aperte 1 para sim e 2para nao"));
    
    
}else{
    alert("voce esta reprovado!");

}while(escolhas==1){
    var alunos=prompt("escreva o nome do seu aluno");

    var nota=parseInt(prompt("escreva a primeira nota:"));

var notaDois=parseInt(prompt("escreva a segunda nota:"));

var soma=nota+notaDois;

var media=soma/2;



if(media>=9.5){
    alert("voce esta aprovado!");
    var escolhas=parseInt(prompt("Calcular a média de outro aluno Sim/Não?" + "  "+ "aperte 1 para sim e 2para nao"));
}else{
    alert("voce esta reprovado!");
    var escolhas=parseInt(prompt("Calcular a média de outro aluno Sim/Não?" + "  " + "aperte 1 para sim e 2para nao"));
}

}while(escolhas==2){
    if(media>=9.5){
        alert(alunos);
    }

}


