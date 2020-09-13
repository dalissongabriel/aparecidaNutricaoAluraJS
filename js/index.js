

const pacientes = document.querySelectorAll('.paciente')
pacientes.forEach(paciente=> {
    let peso = paciente.querySelector('.info-peso').textContent;
    let altura = paciente.querySelector('.info-altura').textContent;
    if ( peso < 0 || peso > 1000 ) {
        paciente.querySelector('info-imc').textContent = "Peso inválido!"
    } else if ( altura < 0 || altura > 5 ) {
        paciente.querySelector('info-imc').textContent = "Alturá inválida"
    }
    
    let imc = peso / (altura*altura)
    paciente.querySelector('.info-imc').textContent = imc
});

