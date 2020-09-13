var tabela = document.querySelector(".tabela-dados-pacientes")

tabela.addEventListener('dblclick',(ev)=>{
    ev.preventDefault()
    ev.stopPropagation()
     // Somente executará nosso código caso o elemento em que clicamos seja um <td>
     if (ev.target.tagName == 'TD') {
        ev.target.parentNode.classList.add("fadeOut")
        setTimeout(function() {
            ev.target.parentNode.remove()
        }, 500)
    }
})