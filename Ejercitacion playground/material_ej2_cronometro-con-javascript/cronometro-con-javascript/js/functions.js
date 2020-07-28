window.addEventListener('load', () => {

    let start = document.querySelector('.start');
    let segundos = 0;
    let minutos = 0;
    let seconds = document.querySelector('.seconds');
    let minutes = document.querySelector('.minutes');
    let pause = document.querySelector('.pause');
    let reset = document.querySelector('.reset');
    let interval;


    start.addEventListener('click', () => {
        pause.disabled = false;
        reset.disabled = true;
        interval = setInterval(() => {
            if (segundos < 9) {
                segundos++;
                seconds.innerHTML = "0" + segundos;
            } else if (segundos >= 9 && segundos < 59) {
                segundos++;
                seconds.innerHTML = segundos;
            } else {
                segundos = 0;
                seconds.innerHTML = "0" + segundos;
                minutos++;
                minutes.innerHTML = "0" + minutos;
                if (minutos > 9) {
                    minutes.innerHTML = minutos;
                }
            }
        }, 1000)

        start.disabled = true;
    })

    pause.addEventListener('click', () => {
        pause.disabled = true;
        reset.disabled = false;
        start.disabled = false;
        clearInterval(interval);
    })

    reset.addEventListener('click', () => {
        segundos = 0;
        minutos = 0;
        seconds.innerHTML = "00";
        minutes.innerHTML = "00";
        pause.disabled = true;
        reset.disabled = true;
    })




})