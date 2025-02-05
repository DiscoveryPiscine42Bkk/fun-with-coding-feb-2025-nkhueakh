document.addEventListener("DOMContentLoaded", loadTasks);

document.getElementById("newTask").addEventListener("click", function () {
    let taskText = prompt("Enter a new task:");
    if (taskText) {
        addTask(taskText);
        saveTasks();
    }
});

function addTask(text) {
    let task = document.createElement("div");
    task.className = "task";
    task.textContent = text;
    
    task.addEventListener("click", function () {
        if (confirm("Do you want to delete this task?")) {
            task.remove();
            saveTasks();
        }
    });

    let list = document.getElementById("ft_list");
    list.insertBefore(task, list.firstChild);
}

function saveTasks() {
    let tasks = [];
    document.querySelectorAll(".task").forEach(task => {
        tasks.push(task.textContent);
    });
    document.cookie = `tasks=${JSON.stringify(tasks)}; path=/;`;
}

function loadTasks() {
    let cookies = document.cookie.split("; ");
    let tasksCookie = cookies.find(row => row.startsWith("tasks="));
    if (tasksCookie) {
        let tasks = JSON.parse(tasksCookie.split("=")[1]);
        tasks.forEach(task => addTask(task));
    }
}
