

    
    
    let N = parseInt(prompt("Insira um numero"));
    let multi = 0;
    let contagem = 1;
    
    while(contagem <= N){
        while(multi <= 10){
    
            document.write(contagem + " X " + multi + " = " + (contagem * multi) + "<br>");

            
            multi++;
            
        }
        contagem++;


        multi = 0;


        document.write("<br><br>");
    }
    
    