

const pacientes = document.querySelectorAll('.paciente')
pacientes.forEach(paciente=> {
    let colunaPeso = paciente.querySelector('.info-peso') 
    let colunaAltura = paciente.querySelector('.info-altura')
    let colunaIMC = paciente.querySelector('.info-imc')
    let peso = paciente.querySelector('.info-peso').textContent;
    let altura = paciente.querySelector('.info-altura').textContent;
    
    if ( peso < 0 || peso >= 1000 ) {
        colunaIMC.textContent = 'Peso inválido!'
        paciente.style.backgroundColor = 'lightcoral'
    } else if ( altura < 0 || altura >= 5 ) {
        colunaIMC.textContent = "Altura inválida"
        paciente.style.backgroundColor = 'lightcoral'
    } else {
        let imc = peso / (altura*altura)
        colunaIMC.textContent = imc.toFixed(2)
    }
});

