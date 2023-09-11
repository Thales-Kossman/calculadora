
const MAX_VISOR_CHAR = 13;

function insert(num) {

    if (document.getElementById("resultado").innerHTML.length < MAX_VISOR_CHAR) {
        document.getElementById('resultado').innerHTML += num;
    }
    else {
        document.getElementById('resultado') = "ERR";

    }
}
function apagar() {
    document.getElementById('resultado').innerHTML = "";
}

function retorno() {
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length - 1);
}

function calcular() {
    var resultado = document.getElementById('resultado').innerHTML;
    if (resultado) {
        document.getElementById('resultado').innerHTML = eval(resultado);
    }
}

function porcentagem() {
    var resultado = document.getElementById('resultado').innerHTML += '/100';
    if (resultado) {
        document.getElementById('resultado').innerHTML = eval(resultado);
    }
}

