var pacientes = document.querySelectorAll('.paciente')
pacientes.forEach(paciente=> {
    let colunaPeso = paciente.querySelector('.info-peso') 
    let colunaAltura = paciente.querySelector('.info-altura')
    let colunaIMC = paciente.querySelector('.info-imc')

    let peso = colunaPeso.textContent;
    let altura = colunaAltura.textContent;
    
    if ( pesoEhInvalido(peso) ) {
        colunaIMC.textContent = 'Peso inválido!'
        paciente.classList.add('paciente-dados-invalidos')
    } else if ( alturaEhInvalida(altura)) {
        colunaIMC.textContent = "Altura inválida"
        paciente.classList.add('paciente-dados-invalidos')
    } else {
        colunaIMC.textContent = calculaOImc(peso,altura)
    }
});

function calculaOImc(peso, altura) {
    let imc = peso / (altura*2)
    return imc.toFixed(2)
}
 
function pesoEhInvalido(peso){
    if ( peso < 0 || peso >= 1000 ) {
        return true
    } 
    return false
}

function alturaEhInvalida(altura){
    if ( altura < 0 || altura >= 5 ) {
        return true
    } 
    return false
}