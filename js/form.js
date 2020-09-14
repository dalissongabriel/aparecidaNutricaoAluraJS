const botaoAdicionar = document.querySelector('#adicionar-paciente')
botaoAdicionar.addEventListener('click', (ev) => {
    ev.preventDefault()
    var form = document.querySelector('#form-adicionar')
    const paciente = geraPacienteCom(form)
    // Válida todos os campos e monta um array dos possíveis erros
    const erros = validaPaciente(paciente)
    if (erros.length > 0) {
        exibeMensagensDeErro(erros);
        return;
    }

    inserePacientesNaTabela(paciente)

})

function inserePacientesNaTabela(paciente) {
    var form = document.querySelector('#form-adicionar')
    const novaLinha = geraLinhaTabelaCom(paciente)
    const tabela = document.querySelector('#tabela-pacientes')
    tabela.insertAdjacentHTML("beforeend", novaLinha)

    // LIMPANDO A TELA APÓS O "SUBMIT"
    form.reset()
    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";
}

function geraPacienteCom(dados) {
    const paciente = {
        nome: dados.nome.value,
        peso: dados.peso.value,
        altura: dados.altura.value,
        gordura: dados.gordura.value,
        imc: calculaOImc(dados.peso.value, dados.altura.value)
    }
    return paciente
}

function geraLinhaTabelaCom(paciente) {
    const novaTr = `
    <tr class="paciente">
        <td class="info-nome" >${paciente.nome}</td>
        <td class="info-peso" >${paciente.peso}</td>
        <td class="info-altura" >${paciente.altura}</td>
        <td class="info-gordura" >${paciente.gordura}</td>
        <td class="info-imc">${paciente.imc}</td> 
    </tr>
    `
    return novaTr
}

function validaPaciente(paciente) {
    let erros = [];

    if (paciente.nome.length == 0) {
        erros.push("O nome não pode ser em branco");
    }

    if (paciente.gordura.length == 0) {
        erros.push("A gordura não pode ser em branco");
    }

    if (paciente.peso.length == 0) {
        erros.push("O peso não pode ser em branco");
    }

    if (paciente.altura.length == 0) {
        erros.push("A altura não pode ser em branco");
    }

    if (pesoEhInvalido(paciente.peso)) {
        erros.push("Peso é inválido");
    }

    if (alturaEhInvalida(paciente.altura)) {
        erros.push("Altura é inválida");
    }

    return erros;
}

function exibeMensagensDeErro(erros) {
    const ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";

    erros.forEach(function (erro) {
        ul.insertAdjacentHTML("beforeend", `<li>${erro}</li>`)
    });
}