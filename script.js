
var timer = 30;
var score = 0;
var randnum;

function scoreincrease(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

function hit(){
    randnum = Math.floor(Math.random() * 10);
    document.querySelector("#hitnumber").textContent = randnum;
}


function bubble(){
    var bub = "";
    for (var i = 0; i <=132; i++) {
        var num = Math.floor(Math.random() * 10);
        bub += `<div class="bubble">${num}</div>`;
        
    }
    document.querySelector(".pbottom").innerHTML = bub
}

function settimer(){
    var timerint = setInterval(function(){

        if(timer>0){
            timer--;
            document.querySelector("#timertime").textContent = timer
        }else{
            clearInterval(timerint)
            document.querySelector(".pbottom").innerHTML =  `<h1>Ooops Game Over....😕</h1>`
        }
       
    },1000)
}

document.querySelector(".pbottom").addEventListener("click",function(details){
    var ans = Number(details.target.textContent);

    console.log(details.target)
    

    if(ans === randnum){
        // details.target.style.backgroundColor = "green"
            scoreincrease();
            hit();
            bubble();
            
    }else{
        // details.target.style.backgroundColor = "red"
    }

})

hit();
bubble();
settimer();

