function deleteByEmail() {
    let inputText = document.querySelector("input");
    let result = document.querySelector("#result");
    
    removeEmails() ? result.textContent = "Deleted." : result.textContent = "Not found.";
    
    function removeEmails() {
        let allTr = [...document.querySelectorAll("#customers tbody tr")];
        let found = false;

        allTr.forEach((tr) => {
            let email = tr.childNodes[3].textContent;
            if (email === inputText.value) {
                tr.parentNode.removeChild(tr);
                found = true;
            }
        });

        return found;
    }
}