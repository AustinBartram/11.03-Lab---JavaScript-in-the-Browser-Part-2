window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
  const addBtn = document.querySelector("#addBtn");
  const taskInput = document.querySelector("#taskInput");

  // Register Add button click event
  addBtn.addEventListener("click", addBtnClick);

  // Allow Enter key to add tasks
  taskInput.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
      addBtnClick();
    }
  });

  // Attach remove handlers to initial tasks
  const existingBtns = document.querySelectorAll(".done-btn");
  existingBtns.forEach(btn => {
    btn.addEventListener("click", removeTask);
  });
}

function addBtnClick() {
  const taskInput = document.querySelector("#taskInput");
  const taskText = taskInput.value.trim();

  // Prevent empty tasks
  if (taskText === "") {
    return;
  }

  addTask(taskText);

  // Clear textbox and refocus
  taskInput.value = "";
  taskInput.focus();
}

function addTask(newTask) {
  const taskList = document.querySelector("#taskList");

  // Create new list item
  const li = document.createElement("li");
  li.innerHTML = `<span class="task-text">${newTask}</span><button class="done-btn">&#10006;</button>`;

  // Add to list
  taskList.appendChild(li);

  // Register remove handler for the new button
  const doneBtns = document.querySelectorAll(".done-btn");
  const lastBtn = doneBtns[doneBtns.length - 1];
  lastBtn.addEventListener("click", removeTask);
}

function removeTask(event) {
  const li = event.target.parentNode; // the <li> element
  const ol = li.parentNode;            // the <ol> element
  ol.removeChild(li);                  // remove the task
}
