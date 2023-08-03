const form = document.getElementById("form-validacao");


function validacao(valorA, valorB) {
    return parseFloat(valorB) > parseFloat(valorA)
}

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const minValue = document.getElementById('min').value;
    const maxValue = document.getElementById('max').value;

    const mensagemSucesso = `Validado! o valor A: <b>${minValue}</b> é menor que o valor B: <b>${maxValue}</b> `
    const mensagemSame = `<b>Deu ruim!</b> :( Os valores são indênticos, não é válido!`
    const mensagemError = `<b>Vacilo!</b> :( O valor de B é menor que A, não é válido!`
    formEValido = validacao(minValue, maxValue)

    if (formEValido) {
        containerMS = document.querySelector('.message');
        containerMS.innerHTML = mensagemSucesso;
        containerMS.style.display = 'block';
        containerMS.style.background = 'green';

    } else if (minValue == maxValue) {
        containerMS = document.querySelector('.message');
        containerMS.innerHTML = mensagemSame;
        containerMS.style.display = 'block';
        containerMS.style.background = 'red';

    } else {
        containerMS = document.querySelector('.message');
        containerMS.innerHTML = mensagemError;
        containerMS.style.display = 'block';
        containerMS.style.background = 'red';
    }
})

console.log(form);