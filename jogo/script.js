// COMEÇO
function iniciar() {
    var nome = document.getElementById("name").value
    var body = document.querySelector("body")

    body.innerHTML += `<h3 class="maior">VOCÊ ${nome}, ESTÁ NA LUTA PARA SE TORNAR UM CAMPEÃO DA TERRA</h3>`
    body.innerHTML += `<h4>MAS ESTÁ EM UM MUNDO ONDE O CORONA VÍRUS É REALIDADE PARA OS FRACASSADOS!<br> VOCÊ VAI SAIR PARA TRILHAR SEU CAMINHO DE CAMPEÃO?</h4><br>`
    body.innerHTML += `<button onclick="primeiraSim()">SIM</button>
    <button onclick="primeiraNao()">não</button>`


}

//primeira pergunta
function primeiraSim() {
    var body = document.querySelector("body")
    body.innerHTML += `<p>BOA, ISSO MOSTRA QUE VOCÊ ESTÁ NO CAMINHO CERTO DE CAMPEÃO DA TERRA!</p>`
    body.innerHTML += `<p>ESTÁ PRONTO PARA COMEÇAR A EXALAR ENERGIA?</p><br>`
    body.innerHTML += `<button onclick="segundaSim()">SIM</button>
    <button onclick="segundaNao()">não</button>`
}

function primeiraNao() {
    var body = document.querySelector("body")
    body.innerHTML += `<br>`
    body.innerHTML += `<p>VOCÊ FOI VENCIDO PELO CORONA VÍRUS, AGORA VOCÊ É UM PERDEDOR!</p><br>`
    body.innerHTML += `<br><button onclick="location.reload()">SOU UM PERDEDOR</button>`
}

// segunda pergunta
function segundaSim() {
    var body = document.querySelector("body")
    body.innerHTML += `<p>VAI DA MERDA EM RAPAZIADA, ESCUTA O QUE EU TO FALANDO!</p>`
    body.innerHTML += `<p>VOCÊ GOSTA DE CAÇAR DEMÔNIOS?</p><br>`
    body.innerHTML += `<button onclick="terceiraSim()">SIM</button>
    <button onclick="terceiraNao()">não</button>`
}

function segundaNao() {
    var body = document.querySelector("body")
    body.innerHTML += `<p>UM CAMPEÃO DA TERRA ESTÁ SEMPRE EXALANDO SUA ENERGIA</p><br>`
    body.innerHTML += `<br><button onclick="location.reload()">FRACASSEI</button>`
}

// terceira pergunta
function terceiraSim() {
    var body = document.querySelector("body")
    body.innerHTML += `<p>VOCÊ ESTÁ NO CAMINHO CERTO PARA SE TORNAR UM CAMPEÃO DA TERRA!</p>`
    body.innerHTML += `<p>VOCÊ DA 5 SOCOS POR SEGUNDO?</p><br>`
    body.innerHTML += `<button onclick="quartaSim()">SIM</button>
    <button onclick="quartaNao()">não</button>`
}

function terceiraNao() {
    var body = document.querySelector("body")
    body.innerHTML += `<p>UM CAMPEÃO DA TERRA ESTÁ SEMPRE DISPOSTO A CAÇAR DEMÔNIOS</p><br>`
    body.innerHTML += `<br><button onclick="location.reload()">FRACASSEI</button>`
}

// quarta pergunta
function quartaSim() {
    var body = document.querySelector("body")
    body.innerHTML += `<p>VEM COMIGO RAPAZIADA, AQUI É XANDÃO!!</p>`
    body.innerHTML += `<p>VAMOS PARA A RETA FINAL?</p><br>`
    body.innerHTML += `<button onclick="quintaSim()">SIM</button>
    <button onclick="quintaNao()">não</button>`
}

function quartaNao() {
    var body = document.querySelector("body")
    body.innerHTML += `<p>SE VOCÊ NÃO DA 5 SOCOS POR SEGUNDO VOCÊ NÃO ESTÁ PREPARADO PARA LUTAR CONTRA OS DEMÔNIOS</p>`
    body.innerHTML += `<br><button onclick="location.reload()">FRACASSEI</button>`
}

// quinta pergunta
function quintaSim() {
    var body = document.querySelector("body")
    body.innerHTML += `<p>COMPLETE A FRASE!</p>`
    body.innerHTML += `<p>NO FINAL DA ESCURIDÃO, SEMPRE AVERA...</p><br>`
    body.innerHTML += `<button onclick="sextaSim()">XANDÃO</button>
    <button onclick="sextaNao()">valdemiro</button>`
}

function quintaNao() {
    var body = document.querySelector("body")
    body.innerHTML += `<p>UM CAMPEÃO NÃO DESISTE DOS SEUS OBJETIVOS!!</p><br>`
    body.innerHTML += `<br><button onclick="location.reload()">SOU UM PERDEDOR</button>`
}

// sexta pergunta
function sextaSim() {
    var body = document.querySelector("body")
    body.innerHTML += `<br> <p>AGORA VOCÊ É UM CAMPEÃO DA TERRA PRONTO PARA LUTAR CONTRAR OS DEMÔNIOS!</p>`
    body.innerHTML += `<br><p>TOMA!</p>`
    body.innerHTML += `<img src="img/xandaogod.jpg" alt="XANDÃOFOREVER"><br>`
    body.innerHTML += `<h1>DOUBLE BICEPS!!</h1>`
}

function sextaNao() {
    var body = document.querySelector("body")
    body.innerHTML += `<p>CAMPEÕES DA TERRA TEM A PELE DE AÇO E UMA FACA NÃO PENETRA UM CAMPEÃO EXALANDO ENERGIA!</p>`
    body.innerHTML += `<p><img src="img/valdomiro.jpg" alt="Valdomiro"></p><br>`
    body.innerHTML += `<br><button onclick="location.reload()">SOU UM PERDEDOR</button>`
}