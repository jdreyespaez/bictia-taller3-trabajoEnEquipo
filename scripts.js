// var formTest = document.getElementsByName("test");
//        var x = formTest.elements[0].name;
//        console.log(x);
//        document.write(x);
    
    // Requerimiento 2: Formulario de contacto, aquí se valida
    (function(){
        // 2.1. Se toman los elementos a manipular en JS
        var formulario = document.getElementsByName("formulario")[0];
        var elementos = formulario.elements;
        var boton = document.getElementById("boton");

        // 2.2. Se incluyen los campos a enviar, con sus respectivas funciones de validación
        function validarNombre(e){
            if(formulario.nombre.value == 0){
                alert("Debes completar el campo Nombre, antes de enviar tus datos a Pepe.");
                e.preventDefault();
            }
        }

        function validarApellido(e){
            if(formulario.apellido.value == 0){
                alert("Debes completar el campo Apellido, antes de enviar tus datos a Pepe.");
                e.preventDefault();
            }
        }

        function validarCorreo(e){
            if(formulario.correo.value == 0){
                alert("Debes completar el campo Correo, antes de enviar tus datos a Pepe.");
                e.preventDefault();
            }
        }

        function validarRadio(e){
            if(formulario.personeria[0].checked == true || formulario.personeria[1].checked == true){
            } else {
                alert("Debes decirnos si eres una Persona o Empresa, Pepe quiere saberlo.");
                e.preventDefault();
            }
        }

        function validarTerminos(e){
            if(formulario.terminos.checked == false){
                alert("Debe aceptar los términos con que Pepe tratará tu información");
                e.preventDefault();
            }
        }

        // 2.3. Se valida que no se hayan enviado vacío ninguno de los campos
        var validar = function(e){
            validarNombre(e);
            validarApellido(e);
            validarCorreo(e);
            validarRadio(e);
            validarTerminos(e);
        };

        formulario.addEventListener("submit", validar);

    }())

    // Requerimiento 5: Agregar aliados

    // 5.5. La función auto-invocada será la que valide lo que venga del formularioAliados e incluya la información en el nuevo div
   
        var formulario = document.getElementsByName("formularioAliados")[0];
        var elementos = formulario.elements;
        var boton = document.getElementById("botonAgregar");

        function validarNombreEmpresa(e){
            if(formulario.nombreEmpresa.value == 0){
                alert("No puedes agregar un nuevo aliado sin decir el nombre de la empresa.");
                e.preventDefault();
            } else {
                // 5.2. Se crea el espacio donde se incluirán los aliados y la función en JS que los agregará
                // Creo un nuevo div
                var nuevoDiv = document.createElement("div");
                // Buscamos el padre de los elementos por medio del ID, en este caso
                var padre = document.getElementById("contenedor");
                // Creamos una variable de referencia para poder insertar nuestro nuevo elemento
                var ref = document.getElementById("aliados");
                // Agregamos el elemento en la posición que deseamos de acuerdo a nuestra variable ref
                padre.insertBefore(nuevoDiv, ref);

                var elementoTexto = document.createElement("p");
                // Ahora crearé el nodo con texto
                var contenidoTextual = document.createTextNode("hola");
                // Agrego el elemento al nodo
                elementoTexto.appendChild(padre);
                // Meto el elementoTexto al div que deseo
            }
        }

        var validar = function(e){
            validarNombreEmpresa(e);
        };

        formulario.addEventListener("submit", validar);
