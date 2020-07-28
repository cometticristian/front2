window.addEventListener('load', () => {

    let allInputs = document.querySelectorAll('.form-control');
    let errores = [];
    let showError = document.querySelectorAll('.invalid-feedback');
    let send = document.querySelector('.btn-success');
    let divForm = document.querySelector('.formu');
    let form = document.querySelector('form');
    let email = document.querySelector('.email');
    let booleanError = false;
    let password = document.querySelector('#password');
    let dady = document.querySelector('.dady');

    function deleteElement(arr, string) {
        let i = arr.indexOf(string);
        if (i != (-1)) {
            arr.splice(i, 1);
        }
    }

    for (let i = 0; i < allInputs.length; i++) {
        allInputs[i].addEventListener('blur', () => {
            if (allInputs[i].id == 'email') {
                if (allInputs[i].value.indexOf('@') == (-1)) {
                    booleanError = true;
                    allInputs[i].classList.add('is-invalid');
                    errores.push("Debe ser un mail valido");
                    for (let pos = 0; pos < showError.length; pos++) {
                        showError[i].innerHTML = "Debe ser un mail valido"
                    }
                } else {
                    booleanError = false;
                }
            }
            if (allInputs[i].id == 'phone') {
                if (isNaN(allInputs[i].value)) {
                    booleanError = true;
                    allInputs[i].classList.add('is-invalid');
                    errores.push("El telefono debe contener solo numeros");
                    for (let pos = 0; pos < showError.length; pos++) {
                        showError[i].innerHTML = "El telefono debe contener solo numeros"
                    }
                } else {
                    booleanError = false;
                }
            }
            if (allInputs[i].id == 'password') {
                if (allInputs[i].value.length < 4) {
                    booleanError = true;
                    allInputs[i].classList.add('is-invalid');
                    errores.push("La contrasenia debe tener 4 o mas caracteres");
                    for (let pos = 0; pos < showError.length; pos++) {
                        showError[i].innerHTML = "La contrasenia debe tener 4 o mas caracteres"
                    }
                } else {
                    booleanError = false;
                }
            }
            if (allInputs[i].id == 'rePassword') {
                if (allInputs[i].value != password.value) {
                    console.log(allInputs[i].value);
                    console.log(password);
                    console.log(password.value);
                    booleanError = true;
                    allInputs[i].classList.add('is-invalid');
                    errores.push("Las contrasenias deben coincidir");
                    for (let pos = 0; pos < showError.length; pos++) {
                        showError[i].innerHTML = "Las contrasenias deben coincidir"
                    }
                } else {
                    booleanError = false;
                }
            }
            
            if (allInputs[i].value == '') {
                allInputs[i].classList.add('is-invalid');
                errores.push('Campo vacio');
                for (let pos = 0; pos < showError.length; pos++) {
                    showError[i].innerHTML = 'Campo vacio'
                }
            } else if (allInputs[i].value != '' && !booleanError) {
                allInputs[i].classList.remove('is-invalid');
                deleteElement(errores, 'Campo vacio');
            }


        })
    }


    form.addEventListener('submit', (e) => {
        let contador = 0;
        for (let i = 0; i < allInputs.length; i++) {
            if (allInputs[i].value == '') {
                allInputs[i].classList.add('is-invalid');
                contador++;
            }
            for (let pos = 0; pos < showError.length; pos++) {
                showError[i].innerHTML = "Error"
            }
        }   
        if (errores != '' || contador > 0) {
            e.preventDefault();
        } else {
            e.preventDefault();
            divForm.style.display = 'none';
            dady.innerHTML = "<h1>GRACIAS POR REGISTRARTE</h1>"
            dady.innerHTML += "<ul class='po'> </ul>"
            let po = document.querySelector('.po');
            for (let i = 0; i < allInputs.length; i++) {
                
                if (allInputs[i].id != 'password' && allInputs[i].id != 'rePassword') {
                    po.innerHTML += "<li>" + allInputs[i].value + "</li>";
                }
                
            }
            

        }

    })




})