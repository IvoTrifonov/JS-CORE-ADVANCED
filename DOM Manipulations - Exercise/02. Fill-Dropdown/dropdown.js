function addItem() {
    let menu = document.querySelector("#menu");
    let newItemText = document.querySelector("#newItemText");
    let newItemValue = document.querySelector("#newItemValue");

    let newOption = document.createElement("option");
    newOption.textContent = newItemText.value;
    newOption.value = newItemValue.value;
    menu.appendChild(newOption);

    newItemText.value = null;
    newItemValue.value = null;
}