function addItem() {
    let inputText = document.querySelector("#newItemText");
    let newListItem = document.createElement("li");
    newListItem.innerHTML = inputText.value;
    let uList = document.querySelector("#items");
    uList.appendChild(newListItem);
    inputText.value = null;
}