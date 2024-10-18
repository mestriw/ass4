function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskValue = taskInput.value.trim(); 

    if (taskValue === "") {
        alert("You have to write something!");
        return;
    }
    let li = document.createElement("li");
    li.textContent = taskValue;

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete-btn";
    deleteButton.onclick = function() {
        li.remove();
    };

    li.onclick = function() {
        li.classList.toggle("completed");
    };

    li.appendChild(deleteButton);

    let taskList = document.getElementById("taskList");
    taskList.appendChild(li);

    taskInput.value = "";
}