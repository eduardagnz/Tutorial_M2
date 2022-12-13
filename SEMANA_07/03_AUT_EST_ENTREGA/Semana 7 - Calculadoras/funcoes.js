// exercício 1 - Tabuada
var resultado = document.getElementById("rTaboada");
function tabuadaVanguarda() {
    resultado.innerHTML = "";
    var numero = Number(document.getElementById("numeroTabuada").value);
    var inicio = Number(document.getElementById("inicioTabuada").value);
    var fim = Number(document.getElementById("fimTabuada").value);

    while (inicio <= fim) {
        resultado.innerHTML += `${numero} x ${inicio} = ${numero * inicio} </br>`;
        inicio += 1;
    }
}

// exercício 2 - Palíndromo
var resultadoP = document.getElementById("rPalindromo");
function verificar() {
    var texto = String(document.getElementById("palindromo").value);
    var invertido = "";
    console.log(texto.lenght);
    for (var i = texto.length - 1; i >= 0; i--) {
        invertido += texto[i];
    }

    if (texto != invertido) {
        resultadoP.innerHTML = `O texto ${texto} não é um palíndromo`;
    } else {
        resultadoP.innerHTML = `O texto ${texto} é um palíndromo`;
    }
}

// exercício 3 - Um, dois, três PI

function pi() {
    document.getElementById("result").innerHTML = ""
    var num = parseInt(document.getElementById("limite").value);

    for (var i = 1; i < num; i++) {
        document.getElementById("result").innerHTML += `${i} - `;
        if ((i % 3) == 0) {
            document.getElementById("result").innerHTML += " PI - ";
        }
    }
}

// exercício 4 - Reforma

function calculo() {
    debugger
    var HAzulejo = Number(document.getElementById("alturaAzulejo").value);
    var LAzulejo = Number(document.getElementById("larguraAzulejo").value);
    var Hparede = Number(document.getElementById("alturaParede").value) * 100;
    var Lparede = Number(document.getElementById("larguraParede").value) * 100;

    var qntComprimento = Lparede / LAzulejo;
    var qntAltura = Hparede / HAzulejo;

    document.getElementById('confirmeReforma').innerHTML = `${Math.ceil(qntAltura * qntComprimento * 1.05)} azulejos`;
}
