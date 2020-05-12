class Timer {
    start() {
        let time = prompt("Input timer time, s:"), i = 1;
        let snd = new Audio("sound/beep.wav");
        var timerId = setInterval(() => $(".time").html(i++), 1000);
        setTimeout(() => { clearInterval(timerId); snd.play(); }, 1000 * time);
    }
    stop() {
        clearInterval(timerId);
    }
}
let timer = new Timer;
$(".start").on("click", function () {
    timer.start();
});
$(".stop").on("click", function () {
    timer.stop();
});