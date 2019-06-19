function validate() {
    let regex = /^[a-z]+@[a-z]+\.[a-z]+$/;
    let emailInput = document.querySelector("#email");
    emailInput.addEventListener("change", change);

    function change(ev) {
        !regex.test(emailInput.value) ? ev.target.classList.add("error") : ev.target.classList.remove("error")
    }
}