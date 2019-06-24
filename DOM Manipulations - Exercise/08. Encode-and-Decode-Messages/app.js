function encodeAndDecodeMessages() {
    let senderTextArea = document.querySelector("textarea");
    let receiverTextArea = document.querySelectorAll("textarea")[1];
    let sendBtn = document.querySelector("button");
    let recieveBtn = document.querySelectorAll("button")[1];
    sendBtn.addEventListener("click", encodeAndSend);
    recieveBtn.addEventListener("click", decode);
   
    function encodeAndSend() {
        let encodedText = [...senderTextArea.value]
        .map(ch => String.fromCharCode(ch.charCodeAt(0) + 1))
        .join("");

        if (encodedText) {
            receiverTextArea.value = encodedText;
            senderTextArea.value = null;
        }
    }

    function decode() {
        let decodedText = [...receiverTextArea.value]
        .map(ch => String.fromCharCode(ch.charCodeAt(0) - 1))
        .join("");

        if (decodedText) {
            receiverTextArea.value = decodedText;
        }
    }
}