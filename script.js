// Get elements
const taskInput = document.getElementById("task-input");
const addButton = document.getElementById("add-task");
const taskList = document.getElementById("task-list");

// Add Task
addButton.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        const li = document.createElement("li");
        li.innerHTML = `${taskText} <button class="delete">Delete</button>`;
        
        // Toggle completed task
        li.addEventListener("click", () => {
            li.classList.toggle("completed");
        });

        // Delete task
        const deleteButton = li.querySelector(".delete");
        deleteButton.addEventListener("click", (e) => {
            e.stopPropagation();
            li.remove();
        });

        taskList.appendChild(li);
        taskInput.value = "";  // Clear input field
    }
});
