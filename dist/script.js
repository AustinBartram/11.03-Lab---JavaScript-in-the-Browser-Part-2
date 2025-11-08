window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
  const addBtn = document.querySelector("#addBtn");
  const taskInput = document.querySelector("#taskInput");

  addBtn.addEventListener("click", addBtnClick);

  taskInput.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
      addBtnClick();
    }
  });

  const existingBtns = document.querySelectorAll(".done-btn");
  existingBtns.forEach(btn => {
    btn.addEventListener("click", removeTask);
  });
}

function addBtnClick() {
  const taskInput = document.querySelector("#taskInput");
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    return;
  }

  addTask(taskText);

  taskInput.value = "";
  taskInput.focus();
}

function addTask(newTask) {
  const taskList = document.querySelector("#taskList");

  const li = document.createElement("li");
  li.innerHTML = `<span class="task-text">${newTask}</span><button class="done-btn">&#10006;</button>`;

  taskList.appendChild(li);

  const doneBtns = document.querySelectorAll(".done-btn");
  const lastBtn = doneBtns[doneBtns.length - 1];
  lastBtn.addEventListener("click", removeTask);
}

function removeTask(event) {
  const li = event.target.parentNode; 
  const ol = li.parentNode;            
  ol.removeChild(li);                  
}
