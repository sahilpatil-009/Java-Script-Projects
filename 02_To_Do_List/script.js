
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// const btn = document.querySelector("button");
// btn.addEventListener("click", addTask())

let btn = document.querySelector("#btn");
btn.addEventListener("click", ()=>{
    if(inputBox.value === ''){
        alert("You Must write something !");
    }else{
        let li = document.createElement("li");
        li.innerText = inputBox.value;
        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = '';
    saveData(); //to save task
});

listContainer.addEventListener("click", (e)=>{
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData(); //to save task
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData(); //to save task
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();