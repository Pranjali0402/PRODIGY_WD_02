let lapCount = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;

let timer = null;

const display = document.getElementById("display");
const laps = document.getElementById("laps");
function updateTime() {

    seconds++;

    if(seconds == 60){
        seconds = 0;
        minutes++;
    }

    if(minutes == 60){
        minutes = 0;
        hours++;
    }

    let h =
    String(hours).padStart(2,'0');

    let m =
    String(minutes).padStart(2,'0');

    let s =
    String(seconds).padStart(2,'0');

    display.innerText =
    `${h}:${m}:${s}`;
    }
    document.getElementById("start")
.addEventListener("click", function(){

    if(timer !== null){
        clearInterval(timer);
    }

    timer =
    setInterval(updateTime,1000);

});
document.getElementById("pause")
.addEventListener("click", function(){

    clearInterval(timer);

});
document.getElementById("reset")
.addEventListener("click", function(){

    clearInterval(timer);

    seconds = 0;
    minutes = 0;
    hours = 0;

    display.innerText =
    "00:00:00";

    laps.innerHTML = "";

});
document.getElementById("lap")
.addEventListener("click", function(){

    let li =
    document.createElement("li");

    li.innerText =
    display.innerText;

    laps.appendChild(li);

});