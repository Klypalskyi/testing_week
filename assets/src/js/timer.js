$.getJSON("https://api.ipify.org/?format=json", function (e) {
    let deadline = new Date(Date.parse(new Date()) + 1 * 1 * 8 * 60 * 1000);

    function timer() {
        let t = deadline - Date.now();

        let ms = (Math.floor(t % 1000) / 10).toFixed()
        let seconds = Math.floor(t / 1000 % 60);
        let minutes = Math.floor(t / 1000 / 60 % 60);


        let timerMs = document.querySelector('#time-msec');
        let timerSeconds = document.querySelector('#time-sec');
        let timerMinutes = document.querySelector('#time-min');


        timerMs.innerHTML = ms >= 10 ? `${ms}` : `0${ms}`;
        timerSeconds.innerHTML = seconds >= 10 ? `${seconds}&nbsp<span>:</span>` : `0${seconds}<span>:</span>`;
        timerMinutes.innerHTML = minutes >= 10 ? `${minutes}&nbsp<span>:</span>` : `0${minutes}<span>:</span>`;

    }
    setInterval(timer, 90)

});