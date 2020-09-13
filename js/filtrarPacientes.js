var campoFiltro = document.querySelector(".filtro-pacientes");

campoFiltro.addEventListener("input", function() {
    var pacientes = document.querySelectorAll(".paciente");

    pacientes.forEach(paciente => {
        var paciente = pacientes[i];
        var tdNome = paciente.querySelector(".info-nome");
        var nome = tdNome.textContent;    
    });
});