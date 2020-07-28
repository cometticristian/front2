window.addEventListener('load', () => {

    let abracadabra = document.querySelector('#abracadabra');
    let nameTitle = document.querySelector('#titular strong');
    let touch = document.querySelector('.getIn');
    let parrafo = document.querySelector('.parrafo-color');
    let name;
    let images = document.querySelectorAll('.este');
    let see = document.querySelector('#see');
    let parrafo2 = document.querySelector('.inside');
    let lechuza = document.querySelector('#lechuza');
    let email = document.querySelector('#email');
    let estadoSecreto = 0;
    let adivBoxes = document.querySelectorAll('.adiv');

    abracadabra.addEventListener('click', () => {
        name = prompt('Ingrese su nombre: ');
        nameTitle.innerHTML = name;
    });

    function colorAlAzar() {
        let colours = ['red', 'green', 'yellow', 'blue', 'pink'];
        let colorPicked;
        let numero = Math.floor(Math.random() * 5);
        colorPicked = colours[numero];
        return colorPicked;
    };

    touch.addEventListener('dblclick', () => {
        let color = colorAlAzar();
        parrafo.style.color = color;
    });

    images.forEach((image) => {
        image.addEventListener('click', () => {
            let h3 = image.querySelector('.textImage');
            this.alert('Clickeaste sobre: ' + h3.innerHTML);
        })
    });

    see.addEventListener('mouseover', () => {
        let color = colorAlAzar();
        parrafo2.style.color = color;
    });

    see.addEventListener('mouseout', () => {
        parrafo2.style.color = 'white';
    });

    lechuza.addEventListener('click', () => {
        alert('Preparate para el futuro');
        setTimeout(() => {
            alert('Y el futuro llego.')
        }, 5000)
    })

    email.addEventListener('keydown', (e) => {
        if (e.keyCode == 32) {
            alert('presionaste la barra');
            e.preventDefault();
        }

    })

    document.addEventListener('keydown', (e) => {
        if (estadoSecreto == 0 && e.key == 's') {
            console.log(estadoSecreto);
            console.log(e.key);
            estadoSecreto++;
        } else if (estadoSecreto == 1 && e.key == 'e') {
            console.log(estadoSecreto);
            console.log(e.key);
            estadoSecreto++;
        } else if (estadoSecreto == 2 && e.key == 'c') {
            console.log(estadoSecreto);
            console.log(e.key);
            estadoSecreto++;
        } else if (estadoSecreto == 3 && e.key == 'r') {
            console.log(estadoSecreto);
            console.log(e.key);
            estadoSecreto++;
        } else if (estadoSecreto == 4 && e.key == 'e') {
            console.log(estadoSecreto);
            console.log(e.key);
            estadoSecreto++;
        } else if (estadoSecreto == 5 && e.key == 't') {
            console.log(estadoSecreto);
            console.log(e.key);
            estadoSecreto++;
        } else if (estadoSecreto == 6 && e.key == 'o') {
            console.log(estadoSecreto);
            console.log(e.key);
            estadoSecreto = 0;
            alert('Secreto Magico');
        } else {
            estadoSecreto = 0;
        }
    })

    let winnerNumb = function () {
        let number;
        number = Math.floor(Math.random() * 7);
        while (number == 0) {
            number = Math.floor(Math.random() * 7);
        }
        return number;
    }


    adivBoxes.forEach((box) => {
        box.addEventListener('click', () => {
            let number = winnerNumb();
            console.log(number);
            console.log(box.id);
            if (box.id == number) {
                alert('adivinaste')
            }
        })
    })


})