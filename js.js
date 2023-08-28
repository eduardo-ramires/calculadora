var displayNum = null;
var ultimoNumero = null;
var valoratual = null;
var proximoNumero = false;
var acao = null;
var acaoClicada = true;
var pontoClicado = true;
var negativo = false;

function atualizaDisplay(num){
    if (num == 11 && pontoClicado){
        pontoClicado = false;
        (displayNum == null || proximoNumero) ? $(".display").text(".") : $(".display").text(displayNum + ".");
        displayNum = $(".display").text()
    } else if (num == 0){
        (displayNum == null || proximoNumero) ? $(".display").text("0") : $(".display").text(displayNum + "0");
        displayNum = $(".display").text()
        proximoNumero = false
    } else if (num == 100){
        valoratual = null;
        proximoNumero = false;
        acao = null;
        acaoClicada = true;
        pontoClicado = true;
        negativo = false;
        
        $(".display").text("0");
        displayNum = $(".display").text()
    } else if (num == 1){
        if (negativo){
            $(".display").text(displayNum + "1")
        }else{
            (displayNum == null || proximoNumero) ? $(".display").text("1") : $(".display").text(displayNum + "1");
        }
        displayNum = $(".display").text()
        proximoNumero = false
    } else if (num == 2){
        if (negativo){
            $(".display").text(displayNum + "2")
        }else{
            (displayNum == null || proximoNumero) ? $(".display").text("2") : $(".display").text(displayNum + "2");
        }
        displayNum = $(".display").text()
        proximoNumero = false
    } else if (num == 3){
        if (negativo){
            $(".display").text(displayNum + "3")
        }else{
            (displayNum == null || proximoNumero) ? $(".display").text("3") : $(".display").text(displayNum + "3");
        }
        displayNum = $(".display").text()
        proximoNumero = false
    } else if (num == 4){
        if (negativo){
            $(".display").text(displayNum + "4")
        }else{
            (displayNum == null || proximoNumero) ? $(".display").text("4") : $(".display").text(displayNum + "4");
        }
        displayNum = $(".display").text()
        proximoNumero = false
    } else if (num == 5){
        if (negativo){
            $(".display").text(displayNum + "5")
        }else{
            (displayNum == null || proximoNumero) ? $(".display").text("5") : $(".display").text(displayNum + "5");
        }
        displayNum = $(".display").text()
        proximoNumero = false
    } else if (num == 6){
        if (negativo){
            $(".display").text(displayNum + "6")
        }else{
            (displayNum == null || proximoNumero) ? $(".display").text("6") : $(".display").text(displayNum + "6");
        }
        displayNum = $(".display").text()
        proximoNumero = false
    } else if (num == 7){
        if (negativo){
            $(".display").text(displayNum + "7")
        }else{
            (displayNum == null || proximoNumero) ? $(".display").text("7") : $(".display").text(displayNum + "7");
        }
        displayNum = $(".display").text()
        proximoNumero = false
    } else if (num == 8){
        if (negativo){
            $(".display").text(displayNum + "8")
        }else{
            (displayNum == null || proximoNumero) ? $(".display").text("8") : $(".display").text(displayNum + "8");
        }
        displayNum = $(".display").text()
        proximoNumero = false
    } else if (num == 9){
        if (negativo){
            $(".display").text(displayNum + "9")
        }else{
            (displayNum == null || proximoNumero) ? $(".display").text("9") : $(".display").text(displayNum + "9");
        }
        displayNum = $(".display").text()
        proximoNumero = false
    } else if (num == 101){
        if (displayNum[0] == '-'){
            (displayNum == null || proximoNumero) ? $(".display").text("+") : $(".display").text( displayNum.slice(1));
            displayNum = $(".display").text()
        } else{
            (displayNum == null || proximoNumero) ? $(".display").text("-") : $(".display").text("-" + displayNum);
            displayNum = $(".display").text()
            negativo = true
        }
    } else if (acaoClicada == false){
        displayNum = $(".display").text(ultimoNumero)
    } else if (num == 102 && acao == null){ 
        pontoClicado = true;
        acaoClicada = false
        negativo = false
        acao = 102
        proximoNumero = false;
        ultimoNumero = parseFloat(displayNum);
        $(".display").text("%");
        displayNum = $(".display").text()
        resultado()
    } else if (num == 103 && acao == null){ 
        pontoClicado = true;
        acaoClicada = false
        negativo = false
        acao = 103
        proximoNumero = true;
        ultimoNumero = parseFloat(displayNum);
        $(".display").text("divisão");
        displayNum = $(".display").text()
    } else if (num == 104 && acao == null){ 
        pontoClicado = true;
        acaoClicada = false
        acao = 104
        negativo = false
        proximoNumero = true;
        ultimoNumero = parseFloat(displayNum);
        $(".display").text("x");
        displayNum = $(".display").text()
    } else if (num == 105 && acao == null){ 
        pontoClicado = true;
        acaoClicada = false
        acao = 105
        proximoNumero = true;
        negativo = false
        ultimoNumero = parseFloat(displayNum);
        $(".display").text("-");
        displayNum = $(".display").text()
    } else if (num == 106 && acao == null){ 
        pontoClicado = true;
        acaoClicada = false
        acao = 106
        proximoNumero = true;
        ultimoNumero = parseFloat(displayNum);
        negativo = false
        $(".display").text("+");
        displayNum = $(".display").text()
    }
}

function resultado(){
    valoratual = parseFloat($(".display").text());
    if (acao == 102){ 
        ultimoNumero = (ultimoNumero) / 100
        $(".display").text(ultimoNumero);
        displayNum = $(".display").text()
    } else if (acao == 103){ 
        ultimoNumero = (ultimoNumero) / (valoratual)
        $(".display").text(ultimoNumero);
        displayNum = $(".display").text()
    } else if (acao == 104){ 
        ultimoNumero = (ultimoNumero) * (valoratual)
        $(".display").text(ultimoNumero);
        displayNum = $(".display").text()
    } else if (acao == 105){ 
        ultimoNumero = (ultimoNumero) - (valoratual)
        $(".display").text(ultimoNumero);
        displayNum = $(".display").text()
    } else if (acao == 106){ 
        ultimoNumero = (ultimoNumero) + (valoratual)
        $(".display").text(ultimoNumero);
        displayNum = $(".display").text()
    }
    
    valoratual = null;
    proximoNumero = false;
    acao = null;
    acaoClicada = true;
    pontoClicado = true;
}