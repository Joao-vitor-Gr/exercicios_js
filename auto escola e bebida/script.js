function quebraDeLinha() {

    document.write("<br>");
}

function linhaDeSeparacao() {

    document.write("<hr>");
}

function oqueVaiParecerEscrito(trabalho) {

    document.write(trabalho);
    quebraDeLinha();                
}

function quebraDeLinhaDepois() {

    document.write("<br>");
    document.write("<br>");
    document.write("<br>");
    document.write("<br>");
}

// Permissão para dirigir

function permissaoPraDirigir(idadeDoUsuario, idadePermitidaPraDirigir)
{
    if (idadeDoUsuario >= idadePermitidaPraDirigir)
    {
        return "Você pode dirigir";
    } else {
        return "Você não pode dirigir";
    }   
}

oqueVaiParecerEscrito("Será que você pode dirigir?");

function resultadoDaAutoEscola(idadeUsuario, idadePermitida)
{
    var possoDirigirOuNao = permissaoPraDirigir(idadeUsuario, idadePermitida);
    oqueVaiParecerEscrito(possoDirigirOuNao);

}

var idadeUsuario = prompt("Diga a sua idade:");

var idadeNoBrasil = 18;

var idadeNaRussia = 20;

resultadoDaAutoEscola(idadeUsuario, idadeNoBrasil);

resultadoDaAutoEscola(idadeUsuario, idadeNaRussia);

quebraDeLinhaDepois();
linhaDeSeparacao();


//Permissão para beber


function permissaoPraBeber(idadeDoUsuario, idadePermitidaPraBeber)
{
    if (idadeDoUsuario >= idadePermitidaPraBeber)
    {
        return "Você pode Beber";
    } else {
        return "Você não pode beber";
    }   
}

oqueVaiParecerEscrito("Será que você pode beber?");


function resultadoDoBar(idadeUsuario, idadePermitida)
{
    var possoBeberOuNao = permissaoPraBeber(idadeUsuario, idadePermitida);
    oqueVaiParecerEscrito(possoBeberOuNao);

}

var idadeMinima = 18;

resultadoDoBar(idadeUsuario, idadeMinima);

quebraDeLinhaDepois();
linhaDeSeparacao();
