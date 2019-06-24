function toggle() {
    let hiddenDiv = document.querySelector("#extra");
    let button = document.querySelector(".button");
    
    if (button.textContent === "More") {
        hiddenDiv.style.display = "block";
        button.textContent = "Less";
    }else {
        hiddenDiv.style.display = "none";
        button.textContent = "More";
    }
}