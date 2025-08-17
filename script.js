const form = document.querySelector("form");
const taskInput = document.getElementById("taskinput");
const taskList = document.getElementById("tasklist");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");
  const taskSpan = document.createElement("span");
  taskSpan.textContent = taskText;
  taskSpan.className = "task-text";
  li.appendChild(taskSpan);

  const deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = "🗑️";
  deleteBtn.className = "delete-btn";
  deleteBtn.addEventListener("click", function () {
    taskList.removeChild(li);
  });

  const btnContainer = document.createElement("div");
  btnContainer.className = "btn-group";
  btnContainer.appendChild(deleteBtn);

  li.appendChild(btnContainer);

  taskSpan.addEventListener("click", function () {
    taskSpan.classList.toggle("completed");
  });

  taskList.appendChild(li);
  taskInput.value = "";
});
