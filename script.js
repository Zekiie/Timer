var start = document.getElementById("start"),
    stop = document.getElementById('stop'),
    timer = null;

 function countDown (min) {
    var seconds = 60,
        minutes = 1;
    function tick() {
        var counter = document.getElementById('counter');
        var current_minutes = minutes - 1;
            seconds--;
        counter.innerHTML = current_minutes.toString() + ":" +(seconds < 10 ? '0' : '')+ seconds;
        if (seconds > 0) {
            timer = setTimeout(tick, 1000);
        } else {
            if (minutes > 1) {
                countDown(minutes - 1);
            }
        }

    }
    tick();
}

function stopTimer() {
    if (timer) {
        clearInterval(timer);
        timer = null;
    }
}

start.onclick = countDown;
stop.onclick = stopTimer;