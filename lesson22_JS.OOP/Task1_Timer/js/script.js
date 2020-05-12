let time,timerId,timerEnd;
let snd = new Audio("sound/beep.wav");
class Timer {   
    start() {
        time = prompt("Input timer time, s:");        
        timerId = setInterval(() => $(".time").html(--time), 1000);
        timerEnd=setTimeout(() => { clearInterval(timerId); snd.play(); }, 1000 * time);
    }
    stop() {
        clearInterval(timerId);
        clearInterval(timerEnd);
    }
    reset(){
        this.stop();
        $(".time").html('0');
    }
}

let timer = new Timer;
$(".start").on("click", function () {
    timer.start();
});
$(".stop").on("click", function () {
    timer.stop();
});
$(".reset").on("click", function () {
    timer.reset();
});