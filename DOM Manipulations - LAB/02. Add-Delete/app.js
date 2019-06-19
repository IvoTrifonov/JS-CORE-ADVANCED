function addItem() {
    let text = document.querySelector("#newText");
    let newListItem = document.createElement("li");
    let button = document.createElement("a");
    button.href = "#";
    button.textContent = "[Delete]";
    
    newListItem.innerHTML = text.value;
    newListItem.appendChild(button);
    let uList = document.querySelector("#items");
    uList.appendChild(newListItem);
    text.value = null;

    let buttons = document.querySelectorAll("a");
    [...buttons].forEach((bt) => {
        bt.addEventListener("click", deleteBtn);
    });

    function deleteBtn(el) {
        let target = el.target.parentNode;
        target.parentNode.removeChild(target);
    }
}