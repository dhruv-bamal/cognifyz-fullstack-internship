const app = document.getElementById("app");


function navigate(path) {
    history.pushState({}, "", path);
    render();
}

window.onpopstate = render;


let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function render() {
    const path = window.location.pathname;

    if (path === "/about") {
        app.innerHTML = `
      <div class="container">
        <h2>About This Project</h2>
        <p>This is a Single Page Application using client-side routing and dynamic DOM manipulation.</p>
      </div>
    `;
    } else {
        app.innerHTML = `
      <div class="container">
        <h2>Task Manager</h2>
        <input type="text" id="taskInput" placeholder="Enter task..." />
        <button onclick="addTask()">Add</button>
        <div id="error" class="error"></div>

        <div style="margin-top:15px;">
          <button onclick="filterTasks('all')">All</button>
          <button onclick="filterTasks('completed')">Completed</button>
          <button onclick="filterTasks('pending')">Pending</button>
        </div>

        <div id="taskList"></div>
      </div>
    `;

        displayTasks("all");
    }
}


function addTask() {
    const input = document.getElementById("taskInput");
    const error = document.getElementById("error");
    const value = input.value.trim();

    if (value.length < 3) {
        error.textContent = "Task must be at least 3 characters.";
        return;
    }

    if (tasks.some(t => t.text === value)) {
        error.textContent = "Task already exists.";
        return;
    }

    tasks.push({ text: value, completed: false });
    saveTasks();
    input.value = "";
    error.textContent = "";
    displayTasks("all");
}

function displayTasks(filter) {
    const list = document.getElementById("taskList");
    list.innerHTML = "";

    let filtered = tasks;

    if (filter === "completed") {
        filtered = tasks.filter(t => t.completed);
    }
    if (filter === "pending") {
        filtered = tasks.filter(t => !t.completed);
    }

    filtered.forEach((task, index) => {
        const div = document.createElement("div");
        div.className = "task";

        const span = document.createElement("span");
        span.textContent = task.text;
        if (task.completed) span.classList.add("completed");

        span.onclick = () => {
            tasks[index].completed = !tasks[index].completed;
            saveTasks();
            displayTasks(filter);
        };

        const del = document.createElement("button");
        del.textContent = "Delete";
        del.onclick = () => {
            tasks.splice(index, 1);
            saveTasks();
            displayTasks(filter);
        };

        div.appendChild(span);
        div.appendChild(del);
        list.appendChild(div);
    });
}

render();