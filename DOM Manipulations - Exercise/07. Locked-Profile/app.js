function lockedProfile() {
    let buttons = document.querySelectorAll("button");
    [...buttons].forEach((button) => {
        button.addEventListener("click", showInfo);
    });
    
    function showInfo(e) {
        let button = e.target;
        let parentDiv = button.parentNode;
        let unlock = parentDiv.querySelectorAll('input[type="radio"]')[1];
        let divInfo = parentDiv.querySelector("div");

        if (unlock.checked) {
            if (button.textContent === "Show more") {
                divInfo.style.display = "block";
                button.textContent = "Hide it";
            }else {
                divInfo.style.display = "none";
                button.textContent = "Show more";
            }
        }
    }
}