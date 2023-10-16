const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

addTaskButton.addEventListener("click", function () {
    const taskText = taskInput.value;

    if (taskText !== "") {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
        <input type="checkbox" id="C" name=${taskText} value="C"/>  
        <label>${taskText}</label>
        <button class="delete-btn">Delete</button>
        `;

        taskList.appendChild(listItem);
        
        taskInput.value = "";

        const deleteButton = listItem.querySelector(".delete-btn");
        deleteButton.addEventListener("click", function () {
            taskList.removeChild(listItem);
        });
    }
});

taskInput.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        addTaskButton.click();
    }
});




