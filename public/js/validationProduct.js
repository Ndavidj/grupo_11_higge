window.addEventListener('load', function() {
    let newProduct = document.querySelector(".productCreationForm");

    newProduct.addEventListener("submit", function(e) {

        let errors = [];

        let name = document.querySelector("name");
        let price = document.querySelector("price");   

        //VALIDAMOS QUE EL NOMBRE DEL PRODUCTO ESTE COMPLETO
        if (name == ''){
            errors.push("El nombre del producto no puede estar vacío");
        }
        
        //VALIDAMOS QUE EL PRECIO ESTE COMPLETO
        
        if (price == ''){
            errors.push("El precio del producto no debe estar vacío")
        }
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