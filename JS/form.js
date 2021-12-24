const EnviarFormulario = () => {
    const Boton = $("#Enviar") 
    Boton.on("click", function(e){
        e.preventDefault
        const Nombre = $("#Name").val()
        $("#Mensaje").html(`<h2>¡Hola ${Nombre}, tu mensaje fue enviado con exito!<h2>`);
    });
}

EnviarFormulario ();
