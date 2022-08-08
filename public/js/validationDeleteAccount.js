window.addEventListener('load',function () {
    let deleteButton = document.querySelector('#delete-account')

    deleteButton.addEventListener('click', function (e) {
        /* deleteButton.window.confirm('Realmente quieres eliminar tu cuenta?') */
/*         e.preventDefault();

        console.log(this);

        window.confirm('Quieres eliminar tu cuenta?') */
        let result = confirm('Realmente quieres eliminar tu cuenta?')
        if (result == false) {
            e.preventDefault();
        } else {
            deleteButton.submit();
        }
    })
})