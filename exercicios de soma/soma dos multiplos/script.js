function calcular (limite){

    var multiplicador3 = 0;
    var multiplicador5 = 0;

    for(var i = 0; i <= limite; i++){

        if (i % 3 == 0)
        {
            multiplicador3 += i;
        }
        if (i % 5 == 0)
        {
            multiplicador5 += i;
        }
    }

    return "valor total dos multiplos: " + (multiplicador3 + multiplicador5);

}

document.write(calcular (10));