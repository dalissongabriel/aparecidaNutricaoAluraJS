const botaoAdicionar = document.querySelector('#adicionar-paciente')
botaoAdicionar.addEventListener('click',(ev)=>{
    ev.preventDefault()
    const form = document.querySelector('#form-adicionar')
    let nome = form.nome.value
    let peso = form.peso.value
    let altura = form.altura.value
    let gordura = form.gordura.value
    let imc = calculaOImc(peso, altura)
    const novaTr = `
    <tr>
        <td>${nome}</td>
        <td>${peso}</td>
        <td>${altura}</td>
        <td>${gordura}</td>
        <td>${imc}</td> 
    </tr>
    `
    const tabela = document.querySelector('.tabela-dados-pacientes')
    tabela.insertAdjacentHTML("beforeend",novaTr)
})