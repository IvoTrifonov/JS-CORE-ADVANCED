function attachGradientEvents() {
    let result = document.querySelector("#result");
    let gradientBox = document.querySelector("#gradient-box");
    gradientBox.addEventListener("mousemove", gradientCalculation);

    function gradientCalculation(ev) {
        let percent = Math.floor((ev.offsetX / ev.target.clientWidth) * 100);
        result.textContent = `${percent}%`;
    }
}