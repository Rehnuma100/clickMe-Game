var timer=60;
var scrVal=0;
var val1=0;
var trg=0;

function newtargate(){
    trg = Math.floor(Math.random() *10);
    document.querySelector("#Target").textContent= trg;
}
function bubble(){
    var bubbles = "";
    for(i=1; i<=160; i++){
        var val = Math.floor(Math.random()*10); 
        bubbles += `<div class="bubble">${val}</div>`;
    }
    document.querySelector("#btm").innerHTML=bubbles;

}
function runTimer(){
    var timeInt = setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#clock").textContent = timer;
        }else{
            clearInterval(timeInt);
            setInterval(function(){
                document.querySelector("#btm").innerHTML="`<h1>Game over</h1><p>(THANK YOU FOR PLAYING)</P>`";

            },1);
        }
    },1000);
}
function scorecnt(){
    scrVal += 10;
    document.querySelector("#scr").textContent= scrVal;
}
function cheq(){
    document.querySelector("#btm").addEventListener("click",function(dets){
        val1 = Number(dets.target.textContent);
        if(trg === val1){
            scorecnt();
            newtargate();
            bubble();
        }
    });
}
newtargate();
runTimer();
bubble();
cheq();