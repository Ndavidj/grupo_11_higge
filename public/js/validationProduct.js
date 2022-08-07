window.addEventListener('load', function() {
    let newProduct = document.querySelector("form.productCreationForm");

    newProduct.addEventListener("submit", function(e) {

        let errors = [];

        let name = document.querySelector(".name");
        let price = document.querySelector(".price");   

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
    } else if (!expressions.name.test(name.value)) {
        errors.push("Debe ingresar un nombre válido");
        name.classList.remove("is-valid");
        name.classList.add("is-invalid");
    }
    else {
        name.classList.add("is-valid");
        name.classList.remove("is-invalid");
        newProduct.name.focus();
    }
        //VALIDAMOS QUE EL PRECIO ESTE COMPLETO
        
        if (price.value == ''){
            errors.push("El precio del producto no debe estar vacío")
            price.classList.remove("is-valid");
            price.classList.add("is-invalid");
        
    } else if (price.value.length < 4) {
        errors.push("El precio debe ser superior a 1000");
        price.classList.remove("is-valid");
        price.classList.add("is-invalid");}
        else {
            price.classList.add("is-valid");
            price.classList.remove("is-invalid");
            newProduct.price.focus();
        };

        if (errors.length > 0){
            e.preventDefault();

            let ulErrors = document.querySelector (".errors");
            for (let i =0; i < errors.length; i++) {
                ulErrors.innerHTML += "<li>" + errors[i] + "</li>"
            }
            } else {
                create.submit();
            }
    }
    )}
)