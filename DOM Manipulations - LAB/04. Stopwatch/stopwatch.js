function stopwatch() {
    let time = document.querySelector("#time");
    let startBtn = document.querySelector("#startBtn");
    startBtn.addEventListener("click", startTime);
    let timer = document.querySelector("#time");
    
    function startTime() {
        timer.textContent = "00:00";
        this.disabled = true;
        let seconds = 0;
        let minutes = 0;
        
        let interval = setInterval(() => {
            if (seconds === 59) {
                minutes++;
                seconds = 0;
            }
            
            timer.textContent = `${minutes < 9 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
            seconds++;
        }, 1000);

        let stopBtn = document.querySelector("#stopBtn");
        stopBtn.disabled = false;
        stopBtn.addEventListener("click", resetTimer);
        
        function resetTimer() {
            startBtn.disabled = false;
            this.disabled = true;   
            clearInterval(interval);
        }
    }
}