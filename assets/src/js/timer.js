$.getJSON("https://api.ipify.org/?format=json", function (e) {
    let deadline = new Date(Date.parse(new Date()) + 1 * 1 * 8 * 60 * 1000);

    function timer() {
        let t = deadline - Date.now();

        let ms = (Math.floor(t % 1000) / 10).toFixed()
        let seconds = Math.floor(t / 1000 % 60);
        let minutes = Math.floor(t / 1000 / 60 % 60);


        let timerMs = [...document.querySelectorAll('#time-msec')];
        let timerSeconds = [...document.querySelectorAll('#time-sec')];
        let timerMinutes = [...document.querySelectorAll('#time-min')];


        if (t > 0) {
            for (let i of timerMs) {
                i.innerHTML = ms >= 10 ? `${ms}` : `0${ms}`;
            }
            for (let i of timerSeconds) {
                i.innerHTML = seconds >= 10 ? `${seconds}&nbsp:` : `0${seconds}&nbsp:`;
            }
            for (let i of timerMinutes) {
                i.innerHTML = minutes >= 10 ? `${minutes}&nbsp:` : `0${minutes}&nbsp:`;
            }
        } else {
            for (let i of timerMs) {
                i.innerHTML = `00`;
            }
            for (let i of timerMs) {
                i.innerHTML = `00&nbsp:`;
            }
            for (let i of timerMs) {
                i.innerHTML = `00&nbsp:`;
            }


        }
    }
    setInterval(timer, 90)

});