const EnviarFormulario = () => {
    const Boton = $("#Enviar") 
    Boton.on("click", function(e){
        e.preventDefault
        const Nombre = $("#Name").val()
        $("#Mensaje").append(`<h2 class="d-flex justify-content-center animate__animated animate__fadeIn" >¡Hola ${Nombre}, tu mensaje fue enviado con exito!<h2>`);
        setTimeout(function(){
            window.location.replace(`index.html`);
        }, 3000);
    
    });
}

const formStorage = () => {
    [
        {
    "User" : 
        sessionStorage.setItem("User", $("#Name").val())
        },

        {
    "Email" : 
        sessionStorage.setItem("Email", $("#Email").val())
        }
    ]

}


EnviarFormulario ();
formStorage();


