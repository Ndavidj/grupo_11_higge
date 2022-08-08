window.addEventListener('load', function () {
    let formEditProfile = document.querySelector(".formEditProfile");
    let alarmErrors = document.querySelector(".errores");

    formEditProfile.addEventListener("submit", function (e) {

        let errors = [];

        let firstName = document.querySelector("#firstName");
        let lastName = document.querySelector("#lastName");
        let avatar = document.querySelector("#avatar");

        let expressions = {
            firstName: new RegExp("/^([a-zA-ZñÑáéíóúÁÉÍÓÚ])+$/i")
        }




        // --------- FIRST NAME ------------
        if (firstName.value == "") {
            errors.push("El campo nombre no puede estar vacío");
            firstName.classList.remove("is-valid");
            firstName.classList.add("is-invalid");
        } else if (firstName.value.length < 2) {
            errors.push("El campo nombre debe tener al menos 2 caracteres");
            firstName.classList.remove("is-valid");
            firstName.classList.add("is-invalid");
        } else if (!expressions.firstName.test(firstName.value)) {
            errors.push("Debe ingresar un nombre válido");
            firstName.classList.remove("is-valid");
            firstName.classList.add("is-invalid");
        }
        else {
            firstName.classList.add("is-valid");
            firstName.classList.remove("is-invalid");
            formEditProfile.lastName.focus();
        };

        // --------- LAST NAME ------------
        if (lastName.value == "") {
            errors.push("El campo apellido no puede estar vacío");
            lastName.classList.remove("is-valid");
            lastName.classList.add("is-invalid");
        } else if (lastName.value.length < 2) {
            errors.push("El campo apellido debe tener al menos 2 caracteres");
            lastName.classList.remove("is-valid");
            lastName.classList.add("is-invalid");
        } else if (!expressions.lastName.test(lastName.value)) {
            errors.push("Debe ingresar un apellido válido");
            lastName.classList.remove("is-valid");
            lastName.classList.add("is-invalid");
        }
        else {
            lastName.classList.add("is-valid");
            lastName.classList.remove("is-invalid");
            formEditProfile.email.focus();
        };

        // --------- avatar ------------

        if (avatar.value) {
            let acceptedExtensions = ['jpeg', 'jpg', 'gif', 'png'];
            let parts = avatar.value.split('.');
            let extension = parts[parts.length-1];
            if (!acceptedExtensions.includes(extension)){
            errors.push ("Las extensiones de avatar deben ser " + acceptedExtensions.join(", "));
            }
        }

        // Controlamos si hay errores 
        if (errors.length > 0) {
            e.preventDefault();
            let ulErrors = document.querySelector(".errores");
            ulErrors.classList.add("alert-warning");
            ulErrors.innerHTML = "";
            for (let i = 0; i < errors.length; i++) {
                ulErrors.innerHTML += "<li>" + errors[i] + "</li>";
            };
            alarmErrors.focus();
        } 
        else {
            formEditProfile.submit();
        }
    })



})