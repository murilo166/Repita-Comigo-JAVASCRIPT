var valorUm=parseInt(prompt("escreva o primeiro valor:"));


var valorDois=parseInt(prompt("escreva o segundo valor:"));





var diVisao=valorUm/valorDois;




if(valorDois==0 || valorDois<0){
    alert("esvreva apenas valores maior que zero" +"  "+ " .escreva novamente um segundo valor");
    var novoValor=parseInt(prompt("escreva o seu novo valor:"));


    var reSultado=valorUm/novoValor;

    
    alert(reSultado);


}else{
    alert(diVisao);
}