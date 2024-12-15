
let inputs = document.getElementById("input");
let text = document.querySelector(".text");

function Add() {
    if (inputs.value === "") {
        alert("Please Enter Your Task");
    } else {
        let newEle = document.createElement("ul");
        newEle.innerHTML = `${inputs.value} <i class="fa-solid fa-trash"></i>`;
        text.appendChild(newEle);
        inputs.value = "";
        newEle.addEventListener("click", toggleComplete);
        newEle.querySelector("i").addEventListener("click", function(event) {
            event.stopPropagation(); 
            newEle.remove();
        });

        function toggleComplete() {
            newEle.classList.toggle("completed");
        }
    }
}
