var totalTime=3000;
var currentTime=1800;
var hours=0;
var minutes=30;
var seconds=0;
var color1="#1574e8";
var color2="#26b8dd";
function timer(){
    currentTime--;
    document.getElementById("bar").style.width=66.5*(currentTime/totalTime)+"%";
    if(seconds>0){
        seconds--;
    }else{
        seconds=59;
        if(minutes>0){
            minutes--;
        }else{
            minutes=59;
            if(hours>0){
                hours--;
            }else{
                document.getElementById("timer").style.animation="none";
                //NEXT EVENT
            }
        }
    }
    if(seconds==59 && minutes==0 && hours==0){
        document.getElementById("timer").style.animation="bounce 1s infinite";
    }
    var string=(hours>9?""+hours:"0"+hours) +":"+ (minutes>9?""+minutes:"0"+minutes) +":"+ (seconds>9?""+seconds:"0"+seconds);
    document.getElementById("timer").innerHTML=string;
    setTimeout(() => {
        timer();
    },1000);
}

function openSettings(){
    document.getElementById("home").style.display="none";
    document.getElementById("settings").style.display="block";
    document.getElementById("color1").value=color1;
    document.getElementById("color2").value=color2;
}

function closeSettings(){
    document.getElementById("home").style.display="block";
    document.getElementById("settings").style.display="none";
    color1=document.getElementById("color1").value;
    color2=document.getElementById("color2").value;
    document.getElementById("app").style.setProperty("--color1",color1);
    document.getElementById("app").style.setProperty("--color2",color2);
}

timer();