window.addEventListener('load', function() {
    let newProduct = document.querySelector("form.productCreationForm");
//console.log("hola");

    newProduct.addEventListener("submit", function(e) {

        let errors = [];

        let name = document.querySelector("#name");
        let description = document.querySelector("#description");   
        let productImage = document.querySelector("#productImage");

        //VALIDAMOS QUE EL NOMBRE DEL PRODUCTO ESTE COMPLETO
        if (name.value == ''){
        errors.push("El nombre del producto no puede estar vacío");
        name.classList.remove("is-valid");
        name.classList.add("is-invalid");
        }
        else if (name.value.length < 5) {
        errors.push("El nombre del producto debe tener al menos 5 caracteres");
        name.classList.remove("is-valid");
        name.classList.add("is-invalid");
        } 
        else {
        name.classList.add("is-valid");
        name.classList.remove("is-invalid");
        newProduct.name.focus();
        }

        //VALIDAMOS LA DESCRIPCIÓN 
        
        if (description.value == ''){
        errors.push("La descripción del producto no puede estar vacía")
        description.classList.remove("is-valid");
        description.classList.add("is-invalid");
        } 
        else if (description.value.length < 20) {
        errors.push("La descripción del producto debe tener al menos 20 caracteres");
        description.classList.remove("is-valid");
        description.classList.add("is-invalid");
        }
        else {
        description.classList.add("is-valid");
        description.classList.remove("is-invalid");
        newProduct.description.focus();
        };

        // VALIDAMOS QUE LA IMAGEN SEA UN ARCHIVO VÁLIDO
        if (!productImage.value){
        errors.push("Debe cargarse una imagen de producto");
        productImage.classList.remove("is-valid");
        productImage.classList.add("is-invalid");

        }
        else if (productImage.value) {
        let acceptedExtensions = ['jpeg', 'jpg', 'png'];
        let parts = productImage.value.split('.');
        let extension = parts[parts.length - 1];
        if (!acceptedExtensions.includes(extension)) {
        errors.push("Las extensiones de avatar deben ser " + acceptedExtensions.join(", "));
        }
        } 

        //VEMOS SI HAY ERRORES

        if (errors.length > 0){
        e.preventDefault();
        let ulErrors = document.querySelector (".errors");
        ulErrors.classList.add("alert-warning");
        ulErrors.innerHTML = "";
        for (let i =0; i < errors.length; i++) {
                ulErrors.innerHTML += "<li>" + errors[i] + "</li>"
        };
        } else {
        create.submit();
        }
        }
)}
)