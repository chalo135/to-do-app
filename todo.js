const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const toggleDarkButton = document.getElementById("toggle-dark");

// Add Task
function addTask() {
    if (inputBox.value.trim() === '') {
        alert("lazima uongeze buana");
    } else {
        let li = document.createElement("li");
        li.textContent = inputBox.value;

        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; // × symbol
        span.classList.add("close");

        li.appendChild(span);
        listContainer.appendChild(li);
    }
    inputBox.value = "";
    saveData();
}

// Click Events: Toggle check or delete task
listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

// Save list to localStorage
function saveData() {
    localStorage.setItem("tasks", listContainer.innerHTML);
}

// Show saved list on load
function showTasks() {
    listContainer.innerHTML = localStorage.getItem("tasks");
}
showTasks();

// Load theme from localStorage
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    toggleDarkButton.textContent = "☀️ Light Mode";
} else {
    toggleDarkButton.textContent = "🌙 Dark Mode";
}

// Dark Mode Toggle
toggleDarkButton.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        toggleDarkButton.textContent = "☀️ Light Mode";
        localStorage.setItem("theme", "dark");
    } else {
        toggleDarkButton.textContent = "🌙 Dark Mode";
        localStorage.setItem("theme", "light");
    }
});
