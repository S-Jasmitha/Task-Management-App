// Load tasks from local storage
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Show tasks when page loads
displayTasks();


// Add Task
function addTask() {

    let taskInput = document.getElementById("taskInput");
    let dateInput = document.getElementById("dateInput");

    let taskName = taskInput.value.trim();
    let dueDate = dateInput.value;

    if (taskName === "") {

        alert("Please enter a task");
        return;

    }

    tasks.push({

        name: taskName,
        date: dueDate,
        completed: false

    });

    localStorage.setItem("tasks", JSON.stringify(tasks));

    taskInput.value = "";
    dateInput.value = "";

    displayTasks();

}



// Display Tasks
function displayTasks() {

    let taskList = document.getElementById("taskList");

    if (!taskList) return;

    taskList.innerHTML = "";

    tasks.forEach((task, index) => {

        let li = document.createElement("li");

        li.innerHTML = `
            <strong>${task.name}</strong>
            <br>
            Due Date: ${task.date}
            <br><br>

            <button onclick="completeTask(${index})">
                ✔ Complete
            </button>

            <button onclick="editTask(${index})">
                ✏ Edit
            </button>

            <button onclick="deleteTask(${index})">
                🗑 Delete
            </button>
        `;

        if (task.completed) {

            li.style.textDecoration = "line-through";

        }

        taskList.appendChild(li);

    });

}



// Complete Task
function completeTask(index) {

    tasks[index].completed = !tasks[index].completed;

    localStorage.setItem("tasks", JSON.stringify(tasks));

    displayTasks();

}



// Edit Task
function editTask(index) {

    let newTask = prompt(

        "Edit Task",

        tasks[index].name

    );

    if (newTask !== null && newTask !== "") {

        tasks[index].name = newTask;

        localStorage.setItem("tasks", JSON.stringify(tasks));

        displayTasks();

    }
}
// Delete Task
function deleteTask(index) {

    tasks.splice(index, 1);

    localStorage.setItem("tasks", JSON.stringify(tasks));

    displayTasks();

}