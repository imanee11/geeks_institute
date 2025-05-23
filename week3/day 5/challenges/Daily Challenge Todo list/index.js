let plusBtns = document.querySelectorAll("button[data-target]");
let modal = document.getElementById("modal");
let closeModal = document.getElementById("closeModal");
let submitBtn = document.getElementById("submitBtn");
let taskInput = document.getElementById("taskInput");

let tasks = [];
let currentTargetList = null;

// show modal
for (let i = 0; i < plusBtns.length; i++) {
    plusBtns[i].addEventListener("click", function () {
        currentTargetList = document.getElementById(plusBtns[i].dataset.target);
        modal.style.display = "flex";
    });
}

// close modal
closeModal.addEventListener("click", () => {
    modal.style.display = "none";
    taskInput.value = "";
});


function addTask() {
    let taskText = taskInput.value.trim();

    if (!taskText) {
        alert("pls enter a task");
        return;
    }

    let taskObj = {
        task_id: tasks.length,
        text: taskText,
        done: false
    }

    tasks.push(taskObj);

    //create task element
    let taskItem = document.createElement("div");
    taskItem.className = "task-item";
    taskItem.setAttribute("data-task-id", taskObj.task_id)
    taskItem.innerHTML = `
        <div>
            <input type="checkbox" />
            <label>${taskText}</label>
        </div>
        <button class="delete-btn"><i class="fa-solid fa-trash"></i></button>
    `;

    currentTargetList.appendChild(taskItem);

    taskItem.querySelector(".delete-btn").addEventListener("click", () => {
        deleteTask(taskItem, taskText);
    });

    taskItem.querySelector("input[type='checkbox']").addEventListener("click", () => {
        doneTask(taskItem, taskObj.task_id);
    });

    
    //reset modal
    taskInput.value = "";
    modal.style.display = "none";
}

// relove task
function deleteTask(taskItem, taskText) {
    let index = tasks.indexOf(taskText);
    if (index !== -1) {
        tasks.splice(index, 1);
    }

    taskItem.remove();
}


// mark as doen
function doneTask(taskItem, taskId) {
    let task = tasks.find(t => t.task_id === taskId);
    if (task) {
        task.done = !task.done;
        let label = taskItem.querySelector("label");

        if (task.done) {
            label.style.color = "black";
            label.style.textDecoration = "line-through";
        } else {
            label.style.color = "black";
            label.style.textDecoration = "none";
        }
    }
}

//call addTask() on submit
submitBtn.addEventListener("click", addTask);

