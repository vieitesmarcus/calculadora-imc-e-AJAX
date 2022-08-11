var btnAdicionar = document.querySelector('#buscar-pacientes');

btnAdicionar.addEventListener("click",function(event){
    event.preventDefault();
    console.log("buscando paciente");
    var xhr = new XMLHttpRequest();
    // console.log(xhr)
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
    xhr.addEventListener("load",function(){

        if(xhr.status == 200){
            var dadosJson = xhr.responseText;
            var pacientes = JSON.parse(dadosJson)
         //    console.log(pacientes)
     
            pacientes.forEach(paciente => {
                 adicionaPacienteNaTabela(paciente);
            });
        }else{
            console.log(xhr.status);
            console.log(xhr.responseText);
            var erroAjax = document.querySelector('#erro-ajax');
            erroAjax.classList.remove('invisivel')
        }
    });
    xhr.send();
});