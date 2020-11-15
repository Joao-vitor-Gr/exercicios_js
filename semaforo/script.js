function semaforo() {
    var texto = document.querySelector("h1");
    setTimeout(function(){ texto.innerHTML = "amarelo" }, 2000);
    setTimeout(function(){ texto.innerHTML = "vermelho" }, 4000);
    setTimeout(function(){ texto.innerHTML = "verde" }, 6000);
    setTimeout(function(){ semaforo() }, 8000);
}
semaforo()