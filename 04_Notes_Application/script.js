
let note = document.querySelector(".notes-container");
let createbtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

createbtn.addEventListener("click", ()=>{
    let inputBox = document.createElement("p");
    let img = document.createElement("img");

    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "./images/delete.png";
    note.appendChild(inputBox).appendChild(img);
})

note.addEventListener("click", function(e){

    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        updateStorage();
    }
    else if(e.target.tagName === "P"){
        not = document.querySelectorAll(".input-box");
        not.forEach(nt =>{
            nt.onkeyup = function(){
                updateStorage();
            }
        })
    }

})

function updateStorage(){
    localStorage.setItem("notes", note.innerHTML);
}
    
function showNotes(){
    note.innerHTML = localStorage.getItem("notes");
}
showNotes();

// 

document.addEventListener("keydown", event =>{
    if(event.key === "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})