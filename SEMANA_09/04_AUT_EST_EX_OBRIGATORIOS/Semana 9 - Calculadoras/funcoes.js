// 
function valorf() {
    let i = Number(document.getElementById("taxa").value) / 100;
    let n = Number(document.getElementById("tempo").value);

    let select = document.getElementById('op');
    let option = select.options[select.selectedIndex].value;

    if (option == 'VP') {
        let VP = Number(document.getElementById("opcao").value);
        let VF = VP * (1 + i) ** n;
        document.getElementById('resultado').innerHTML = `O Valor Futuro de R$${VP} em uma taxa de ${i * 100}% em um tempo de ${n} é de R$${VF.toFixed(2)}`;
    }
    if (option == 'VF') {
        let VF = Number(document.getElementById('opcao').value);
        let VP = VF / ((1 + i) ** n);
        document.getElementById('resultado').innerHTML = `O Valor Presente para um retorno de R$${VF} a uma taxa de ${i * 100}% em um tempo de ${n} é de R$${VP.toFixed(2)}`;
    }
}

function juros() {

    var selectI = document.getElementById('select1');
    var optionI = Number(selectI.options[selectI.selectedIndex].value);
    var i = Number(document.getElementById('taxa').value) * optionI / 100;

    var selectN = document.getElementById('select2');
    var optionN = Number(selectN.options[selectN.selectedIndex].value);
    var n = Number(document.getElementById('tempo').value) / optionN;

    var P = Number(document.getElementById('capital').value);

    var J = (P * i * n);
    var M = P + J;

    document.getElementById('resultado').innerHTML = `O Montante final de um capital R$${P.toFixed(2)} a uma taxa ${(i * 100 / optionI).toFixed(2)}% em um tempo de ${(n / optionN).toFixed(2)} é de R$${M.toFixed(2)}, com juros de R$${J.toFixed(2)}.`
}

function impressaoM() {
    document.getElementById('impressao').innerHTML = '';
    var texto = document.getElementById('texto').value;

    for (let i = 0; i < texto.length; i++) {
        document.getElementById('impressao').innerHTML += `${texto[i]} <br/>`;
        for (let j = -1; j < i; j++) {
            document.getElementById('impressao').innerHTML += 'ㅤ';
        }
    }
}

function convertDec() {

    document.getElementById('resultado').innerHTML = '';
    var decimal = Number(document.getElementById('decimal').value);
    if (decimal <= 255) {
        var binario = [];
        var i;

        for (let j = 0; decimal != 0; j++) {
            i = decimal % 2;
            binario[j] = i;
            decimal = Math.floor(decimal / 2);
        }

        for (let k = 0; k < binario.length; k++) {
            document.getElementById('resultado').innerHTML += binario[k];
        }
    } else {
        document.getElementById('resultado').innerHTML = "Número inserido ultrapassada 8 bits"
    }
}