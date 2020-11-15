function calcular (limite){

    var multiplicador3e5 = 0;

    for(var i = 0; i <= limite; i++){

        if (i % 3 == 0 || i % 5 == 0)
        {
            multiplicador3e5 = multiplicador3e5 + i;
        }

    }

    return "valor total dos multiplos: " + (multiplicador3e5);

}

document.write(calcular (parseInt(prompt("Digite um numero!!!"))));