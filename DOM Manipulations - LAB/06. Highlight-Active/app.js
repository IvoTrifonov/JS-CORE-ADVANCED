function focus() {
    let inputs = [...document.querySelectorAll("input")];
    
    inputs.forEach((input) => {
        input.addEventListener("focus", changeDivClass);
        input.addEventListener("blur", changeDivClass);
    });

    function changeDivClass(ev) {
        let parent = ev.target.parentNode;

        ev.type === "focus" ? parent.classList.add("focused") : parent.classList.remove("focused");
    }
}