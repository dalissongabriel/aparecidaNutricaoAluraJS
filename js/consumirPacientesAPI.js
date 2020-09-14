var btnBuscaPacientes = document.querySelector('#buscar-pacientes')

btnBuscaPacientes.addEventListener('click',()=>buscarPacientesNaApi())

async function buscarPacientesNaApi() {
    let api = 'https://api-pacientes.herokuapp.com/pacientes'
    let response = await fetch(api)
    if (response.ok) {
        let pacientes = await response.json()
        pacientes.forEach(paciente => {
            inserePacientesNaTabela(paciente)
        })
    } else {
        alert("Erro ao tentar importar os pacientes")
    }
}