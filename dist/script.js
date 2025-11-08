let taskList = document.querySelector("#taskList");

document.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
    const addBtn = document.getElementById("addBtn");
    addBtn.addEventListener("click", addBtnClick);

    const textBox = document.getElementById("taskInput");
    textBox.addEventListener("keyup", (event) => {
        if (event.code == "Enter") {
            addBtnClick();
        };
    });

    const existingBtns = document.querySelectorAll(".done-btn");
    existingBtns.forEach(btn => {
        btn.addEventListener("click", removeTask);
    });
}

function addBtnClick() {
    let taskInpt = document.getElementById("taskInput");
    let taskText = taskInpt.value.trim();

    if (taskText.length === 0) {
        console.log("Empty list input!");
        taskInpt.value = "";
        taskInpt.focus();
    } else {
        addTask(taskText);
        taskInpt.value = "";
        taskInpt.focus();
    }
}

function addTask(taskInpt) {
    let newTask = document.createElement("li");
    newTask.innerHTML = "<span class='task-text'>" + "  " + taskInpt + "  " + "</span><button class='done-btn'>&#10006;</button>"; 
    taskList.appendChild(newTask);

    const doneButtons = document.querySelectorAll(".done-btn");
    doneButtons.forEach(button => {
        button.addEventListener("click", removeTask);
    });
}

function removeTask(event) {
    let taskToRemove = event.target.parentNode;
    taskList.removeChild(taskToRemove);
}
