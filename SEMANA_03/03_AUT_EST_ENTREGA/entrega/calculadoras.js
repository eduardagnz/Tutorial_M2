function calc() {
    // Váriaveis para função de energia 
    var resultEnerg = document.getElementById("resultadoEnerg");
    var botaoconfirmEnerg = document.getElementById("confirme");
    var total;

    var kwhConsome = Number(document.getElementById("kwhConsome").value);
    var kwhUnit = Number(document.getElementById("kwhUnit").value);
    if (parseFloat((kwhConsome)) > 100 && parseFloat(kwhConsome) < 200) {
        total = parseFloat(((kwhConsome) * parseFloat(kwhUnit)) * 1.25);
    }
    else if (parseFloat(kwhConsome >= 200)) {
        total = parseFloat(((kwhConsome) * parseFloat(kwhUnit)) * 1.5);
    }
    else {
        total = parseFloat((kwhConsome) * parseFloat(kwhUnit));
    }
    // resultEnerg.innerHTML = `${total}`;
    document.getElementById("resultadoEnerg").innerHTML = total;
    // document.write(`${total}`)
}

function calc2(tipoConversao = 'celsius') {
    var inputTemp = document.getElementById("temperatura"); // Pegando o input com o número de temperatura
    var temp = inputTemp.value; // Pegando o valor que está no input de temperatura

    var resultadoTemp = document.getElementById("resultoTemp"); // Div para colocar o resultaod

    if (tipoConversao == 'celsius') { // Se a conversão for para celsius
        var convertecels = parseFloat((temp - 32) / 1.8);
        resultadoTemp.innerHTML = `${convertecels}`;
    } else {
        var convertefar = parseFloat((temperatura.value * 1.8) + 32);
        resultadoTemp.innerHTML = `${convertefar}`;
    }
}

/////////////////////////////////////////////////////////////////////////////////////////////
//Váriaveis para Ponto Max e Min

function pontos() {
    var a = document.getElementById("pontoA").value
    var b = document.getElementById("pontoB").value
    var c = document.getElementById("pontoC").value
    var respo = document.getElementById("resuloPontos").value


    function xy(a, b) {
        let res = b * -1;
        let a2 = a * (-2);
        return res / a2
    }

    function yx(a, b, c) {
        let delta = ((b, 2) - (4 * a * c) * 0, 5);
        let a4 = a * 4;
        delta = delta - 1;
        return delta / a4
    }
    respo = `${xy(a, b)},${yx(a, b, c)}`
    document.getElementById("resuloPontos").innerHTML = respo
}


function velocidade() {
    var velocidade = parseFloat(document.getElementById("veloc").value);
    const g = 10;
    var ts = (velocidade / g);
    var hMax = (velocidade ** 2) / (2 * g);
    var total = `${ts}, ${hMax}`;
    document.getElementById('resposta').innerHTML = total
}