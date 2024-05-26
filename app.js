function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskText = taskInput.value.trim();
    var task1 = document.getElementById("taskInput")
    if (taskInput.value.length < 3) {
        alert("Enter correct task value")
        return
    }

    if (taskText !== "") {
      var taskList = document.getElementById("taskList");
      var listItem = document.createElement("li");
      listItem.className = "list-group-item task";
      listItem.innerHTML = `
        ${taskText}
        <button type="button" class="btn btn-danger btn-sm float-right mr-2" onclick="deleteTask(this)">Delete</button>
        <button type="button" class="btn btn-warning btn-sm float-right mr-2" onclick="editTask(this)">Edit</button>
      `;
      taskList.appendChild(listItem);
      taskInput.value = "";
    }
  }

  function deleteTask(btn) {
    btn.parentNode.remove();
  }

  function deleteAllTasks() {
    var taskList = document.getElementById("taskList");
    taskList.innerHTML = "";
  }

  function editTask(btn) {
    var listItem = btn.parentNode;
    var taskText = listItem.firstChild.textContent.trim();
    var newText = prompt("Edit task:", taskText);
    if (newText !== null) {
      listItem.firstChild.textContent = newText;
    }
  }