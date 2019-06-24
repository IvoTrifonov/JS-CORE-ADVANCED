function attachEventsListeners() {
    let buttons = document.querySelectorAll('input[type="button"]');
    let times = document.querySelectorAll('input[type="text"]');
        
    [...buttons].forEach((button) => {
        button.addEventListener("click", appendTimes);
    });

    function appendTimes(e) {
        let [days, hours, mins, secs] = times;
        let totalSeconds = secs.value;
        let target = e.target;
        
        switch (target.id) {
            case 'daysBtn':
                totalSeconds = days.value * 86400;
                break
            case 'hoursBtn':
                totalSeconds = hours.value * 3600;
                break
            case 'minutesBtn':
                totalSeconds = mins.value * 60;
                break
          }
      
        days.value = totalSeconds / 86400;
        hours.value = totalSeconds / 3600;
        mins.value = totalSeconds / 60;
        secs.value = totalSeconds;
    }
}