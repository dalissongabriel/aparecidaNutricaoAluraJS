const botaoAdicionar = document.querySelector('#adicionar-paciente')
botaoAdicionar.addEventListener('click',(ev)=>{
    ev.preventDefault()
    const form = document.querySelector('#form-adicionar')
    const paciente = geraPacienteCom(form)
    const novaLinha=geraLinhaTabelaCom(paciente)
    const tabela = document.querySelector('.tabela-dados-pacientes')
    tabela.insertAdjacentHTML("beforeend",novaLinha)
    form.reset()
})

function geraPacienteCom(dados) {
    const paciente = {
        nome: dados.nome.value,
        peso: dados.peso.value,
        altura: dados.altura.value,
        gordura: dados.gordura.value,
        imc: calculaOImc(dados.peso.value,dados.altura.value)
    }
    return paciente
}

function geraLinhaTabelaCom(paciente){
    const novaTr = `
    <tr>
        <td class="info-nome" >${paciente.nome}</td>
        <td class="info-peso" >${paciente.peso}</td>
        <td class="info-altura" >${paciente.altura}</td>
        <td class="info-gordura" >${paciente.gordura}</td>
        <td class="info-imc">${paciente.imc}</td> 
    </tr>
    `
    return novaTr
}