window.addEventListener('load', () => {

    // ADIVINAR NUMERO \\

    let numero = Math.round(Math.random() * 100);

    let input = document.querySelector('input');
    let button = document.querySelector('button');
    let titulo = document.querySelector('.titleOne');
    let chanche = document.querySelector('h3');
    let numChance = 5;


    button.addEventListener('click', () => {



        if (input.value < numero) {
            numChance--;
            titulo.innerHTML = "El numero es mayor al ingresado";
            chanche.innerHTML = "Chances: " + numChance;

        } else if (input.value > numero) {
            numChance--;
            titulo.innerHTML = "El numero es menor al ingresado";
            chanche.innerHTML = "Chances: " + numChance;

        } else if (input.value == numero) {
            titulo.innerHTML = "ADIVINASTE! " + numero;
            input.style.display = 'none';
            button.style.display = 'none';
        }

        if (numChance == 0) {
            titulo.innerHTML = "SE TERMINARON LAS CHANCES,  EL NUMERO ERA " + numero
            input.style.display = 'none';
            button.style.display = 'none';
        }


    })

    // AHORCADO \\

    let play = document.querySelector('.colgado');
    let container = document.querySelector('.container');
    let frase;
    let letraIngresada;
    let divsLetras;
    let cantChances = 5;
    let chance = document.querySelector('.chance');
    let contadorLlenos = 0;
    let letraOk = false;
    let arrayLetras = [];


    play.addEventListener('click', () => {
        frase = prompt('Ingresa la frase:');

        for (let i = 0; i < frase.length; i++) {
            if (frase[i] == " ") {
                container.innerHTML += "<div style='margin-right: 15px;'></div>"
            } else {
                container.innerHTML += "<div style='margin-right: 5px;' class= 'letra' id='" + frase[i] + "'>" + '_' + "</div>"
            }
        }
        divsLetras = document.querySelectorAll('.letra');


        divsLetras.forEach((letra) => {
            arrayLetras.push(letra.id)
        })

    })

    document.addEventListener('keyup', function (e) {

        letraIngresada = e.key;

        if (cantChances > 1) {
            divsLetras.forEach((letra) => {
                if (letra.id == letraIngresada) {
                    letra.innerHTML = letra.id;
                    letra.id = 'ok'
                    letraOk = true;
                }
            });
            if (!letraOk) {
                cantChances--;
                chance.innerHTML = "Chances: " + cantChances;
            }
            letraOk = false;
        } else {
            chance.innerHTML = "SE TE TERMINARON LAS CHANCES"
        }

        divsLetras.forEach((letra) => {

            if (letra.id == 'ok') {
                contadorLlenos++;
                if (contadorLlenos == arrayLetras.length) {
                    chance.innerHTML = "GANASTE"
                }
            }
        })
        contadorLlenos = 0;
    });

    // TATETI \\

    let cajaUno = document.querySelector('.caja1');
    let cajaDos = document.querySelector('.caja2');
    let cajaTres = document.querySelector('.caja3');
    let cajaCuatro = document.querySelector('.caja4');
    let cajaCinco = document.querySelector('.caja5');
    let cajaSeis = document.querySelector('.caja6');
    let cajaSiete = document.querySelector('.caja7');
    let cajaOcho = document.querySelector('.caja8');
    let cajaNueve = document.querySelector('.caja9');

    let cajas = document.querySelectorAll('.caja');

    let click = 0;

    let toco = false;

    let huboGanador = false;

    cajas.forEach((caja) => {
        caja.addEventListener('click', () => {
            if (caja.innerHTML == "" && toco == false) {
                caja.innerHTML = 'X';
                click++;
                toco = true;
            }
            if (caja.innerHTML == "" && toco == true) {
                caja.innerHTML = 'O';
                click++;
                toco = false;
            }

            if (cajaUno.innerHTML == cajaDos.innerHTML && cajaUno.innerHTML == cajaTres.innerHTML && cajaUno.innerHTML != '') {
                setTimeout(() => {
                    alert('Gano el jugador ' + cajaUno.innerHTML)
                    cajas.forEach((caja) => {
                        caja.innerHTML = '';
                    });
                }, 90)
                huboGanador = true;
            }
            if (cajaCuatro.innerHTML == cajaCinco.innerHTML && cajaCuatro.innerHTML == cajaSeis.innerHTML && cajaCuatro.innerHTML != '') {
                setTimeout(() => {
                    alert('Gano el jugador ' + cajaCuatro.innerHTML)
                    cajas.forEach((caja) => {
                        caja.innerHTML = '';
                    });
                }, 90)
                huboGanador = true;
            }
            if (cajaSiete.innerHTML == cajaOcho.innerHTML && cajaSiete.innerHTML == cajaNueve.innerHTML && cajaSiete.innerHTML != '') {
                setTimeout(() => {
                    alert('Gano el jugador ' + cajaSiete.innerHTML)
                    cajas.forEach((caja) => {
                        caja.innerHTML = '';
                    });
                }, 90)
                huboGanador = true;
            }
            if (cajaUno.innerHTML == cajaCuatro.innerHTML && cajaUno.innerHTML == cajaSiete.innerHTML && cajaUno.innerHTML != '') {
                setTimeout(() => {
                    alert('Gano el jugador ' + cajaUno.innerHTML)
                    cajas.forEach((caja) => {
                        caja.innerHTML = '';
                    });
                }, 90)
                huboGanador = true;
            }
            if (cajaDos.innerHTML == cajaCinco.innerHTML && cajaDos.innerHTML == cajaOcho.innerHTML && cajaDos.innerHTML != '') {
                setTimeout(() => {
                    alert('Gano el jugador ' + cajaDos.innerHTML)
                    cajas.forEach((caja) => {
                        caja.innerHTML = '';
                    });
                }, 90)
                huboGanador = true;
            }
            if (cajaTres.innerHTML == cajaSeis.innerHTML && cajaTres.innerHTML == cajaNueve.innerHTML && cajaTres.innerHTML != '') {
                setTimeout(() => {
                    alert('Gano el jugador ' + cajaTres.innerHTML)
                    cajas.forEach((caja) => {
                        caja.innerHTML = '';
                    });
                }, 90)
                huboGanador = true;
            }
            if (cajaUno.innerHTML == cajaCinco.innerHTML && cajaUno.innerHTML == cajaNueve.innerHTML && cajaUno.innerHTML != '') {
                setTimeout(() => {
                    alert('Gano el jugador ' + cajaUno.innerHTML)
                    cajas.forEach((caja) => {
                        caja.innerHTML = '';
                    });
                }, 90)
                huboGanador = true;
            }
            if (cajaTres.innerHTML == cajaCinco.innerHTML && cajaTres.innerHTML == cajaSiete.innerHTML && cajaTres.innerHTML != '') {
                setTimeout(() => {
                    alert('Gano el jugador ' + cajaTres.innerHTML)
                    cajas.forEach((caja) => {
                        caja.innerHTML = '';
                    });
                }, 90)
                huboGanador = true;
            }
            console.log(click);
            if (click == 9 && !huboGanador) {
                setTimeout(() => {
                    alert('EMPATE');
                    cajas.forEach((caja) => {
                        caja.innerHTML = '';
                    });
                }, 90)

            }

        })

    });

    // PINTAR \\

    let pickers = document.querySelectorAll('.picker');
    let pinters = document.querySelectorAll('.pinter');
    let colorElegido;

    pickers.forEach((pick) => {
        pick.addEventListener('click', () => {
            colorElegido = pick.id;
        })
        
    });

    pinters.forEach((pint) => {
        pint.addEventListener('click', () => {
            pint.style.backgroundColor = colorElegido;
        })
    });

})

