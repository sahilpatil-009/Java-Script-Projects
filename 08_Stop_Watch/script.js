
let [mili,seconds, minutes, hours] = [0,0,0,0];

let disPlayTime = document.getElementById("displayTime");

let timer = null;

function stopWatch(){
    mili++;
    if(mili == 60)
    {  mili=0;
       seconds++; 
        if(seconds == 60){
            seconds = 0;
            minutes++;
            if(minutes==60){
                minutes = 0;
                hours++;
            }
        }
    }   

    let mi= mili < 10 ? "0" + mili : mili;
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;

    disPlayTime.innerHTML = h +":"+ m + ":" + s + ":" + mi;
}

function watchStart(){
    if(timer!== null)
    {
        clearInterval(timer);
    }
    timer = setInterval(stopWatch,100);
}

function watchStop(){
    clearInterval(timer);
}
function watchRest(){
    clearInterval(timer);
    [seconds, minutes, hours] = [0,0, 0,0];
    disPlayTime.innerHTML = "00:00:00:00";
}


