
var tabela = document.querySelector('#tabela-pacientes');

tabela.addEventListener('dblclick', function(event){

    var paciente = event.target.parentNode;
    paciente.classList.add('fadOut');
    
    setInterval(function(){
        paciente.remove();
    }, 500)
});