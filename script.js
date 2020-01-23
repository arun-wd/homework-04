var quizButton = document.querySelector(".button-primary");
var timerDisplay = document.getElementById("timerDisplay");
var sec = 75;

quizButton.addEventListener("click", function timer() {
        
        var timer = setInterval(function(){
            sec--;
            timerDisplay.textContent = sec + " seconds remaining";
            if (sec === 0) {
                clearInterval(timer);
            }
        }, 1000);
});

timer();