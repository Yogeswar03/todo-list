
const addTask = document.querySelector("ul");
const btn = document.querySelector(" button");




const searchAdd = () =>{
    let inputBox = document.querySelector("#task");
    if(inputBox.value === ''){
        alert("Please add a task!!!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        addTask.appendChild(li);  
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }

    inputBox.value ="";
    saveList();
};

btn.addEventListener("click",() => {
    searchAdd();
});


addTask.addEventListener("click", function(e) {
    if(e.target.tagName === "LI"){
         e.target.classList.toggle("checked");
         saveList();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveList();
    }
}, false);


function saveList() {
    localStorage.setItem("data", addTask.innerHTML);
}

function showList(){
    addTask.innerHTML = localStorage.getItem("data");
}
showList();




