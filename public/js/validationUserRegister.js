window.addEventListener('load', function () {
    let formRegister = document.querySelector(".registro");

    formRegister.addEventListener("submit", function (e) {

        let errors = [];

        let firstName = document.querySelector("#firstName");
        let lastName = document.querySelector("#lastName");
        let email = document.querySelector("#email");
        let password = document.querySelector("#password");
        let avatar = document.querySelector("#avatar");

        let expressions = {
            checkName: new RegExp("/^([a-AZ-zA-ZñÑáéíóúÁÉÍÓÚ])+$/i")
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
        } else if (!expressions.checkName.test(firstName.value)) {
            errors.push("Debe ingresar un nombre válido");
            firstName.classList.remove("is-valid");
            firstName.classList.add("is-invalid");
        }
        else {
            firstName.classList.add("is-valid");
            firstName.classList.remove("is-invalid");
            formRegister.lastName.focus();
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
        } else if (!expressions.checkName.test(lastName.value)) {
            errors.push("Debe ingresar un apellido válido");
            lastName.classList.remove("is-valid");
            lastName.classList.add("is-invalid");
        }
        else {
            lastName.classList.add("is-valid");
            lastName.classList.remove("is-invalid");
            formRegister.email.focus();
        };

        // --------- EMAIL (regex) ------------
        let regEmail = /\S+@\S+\.\S+/;
        if (!regEmail.test(email.value)) {
            errors.push("Debe ingresar un email válido");
            email.classList.add("is-invalid");
        } else {
            email.classList.add("is-valid");
            email.classList.remove("is-invalid");
            formRegister.password.focus();
        };

        // --------- PASSWORD ------------
        if (password.value == "") {
            errors.push("El campo contraseña no puede estar vacío");
            password.classList.remove("is-valid");
            password.classList.add("is-invalid");
        } else if (password.value.length < 8) {
            errors.push("El campo contraseña debe tener al menos 8 caracteres");
            password.classList.remove("is-valid");
            password.classList.add("is-invalid");
        } else {
            password.classList.add("is-valid");
            password.classList.remove("is-invalid");
            formRegister.avatar.focus();
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
        } 
        else {
            formRegister.submit();
        }
    })



})