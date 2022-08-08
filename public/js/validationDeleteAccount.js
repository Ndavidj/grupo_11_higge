window.addEventListener('load',function () {
    let deleteButton = document.querySelector('#delete-account')

    deleteButton.addEventListener('click', function (e) {
    
        let result = confirm('Realmente quieres eliminar tu cuenta?')
        if (result == false) {
            e.preventDefault();
        } else {
            deleteButton.submit();
        }
    })
})