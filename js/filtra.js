var inputFiltro = document.querySelector('#filtrar-pacientes');


inputFiltro.addEventListener("input",function(){
    var pacientes = document.querySelectorAll('.paciente');
    if(this.value.length > 0){
        pacientes.forEach(paciente => {
            var filtroNome = paciente.querySelector('.info-nome').textContent
            var expressao = new RegExp(this.value, "i");
            // console.log(expressao.test(filtroNome));
            if(!expressao.test(filtroNome)){
                paciente.classList.add('invisivel')
            }else{
                paciente.classList.remove('invisivel')
            }

        });
    }else{
        pacientes.forEach(paciente => {
                paciente.classList.remove('invisivel')
        });
    }
});