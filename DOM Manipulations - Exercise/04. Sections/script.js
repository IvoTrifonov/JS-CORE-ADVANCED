function create(words) {
   let content = document.querySelector("#content");
   let divTemplate = document.createElement("div");
   let pTemplate = document.createElement("p");

   (function appendDivs() {
      [...words].forEach((word) => {
         let newDiv = divTemplate.cloneNode();
         let newP = pTemplate.cloneNode();
         newP.textContent = word;
         newP.style.display = "none";
         newP.style.verticalAlign = "center";
         newDiv.appendChild(newP);
         content.appendChild(newDiv);
      });
   })();

   (function displayTextWhenDivIsClicked() {
      let divs = document.querySelector("#content").querySelectorAll("div");

      [...divs].forEach((div) => {
         div.addEventListener("click", function displayText(e) {
         let innerPragraph = e.target.children[0];
         innerPragraph.style.display = "block";
         });
      });
   })();
}