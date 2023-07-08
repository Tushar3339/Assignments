let tasks = [];

function addTask() {
    taskInput = document.getElementById('task_input');
    task = taskInput.value
    if (task !== '') {
        tasks.push(task);
        taskInput.value = '';
    }
}

function showList() {
    taskList = document.getElementById('task_list');
    taskList.innerHTML = '';

    if (tasks.length === 0) {
        taskList.innerHTML = '<li>No tasks found</li>';
    } else {
        for (let i = 0; i < tasks.length; i++) {
            listItem = document.createElement('li');
            listItem.innerHTML = tasks[i];
            deleteButton = document.createElement('button');
            deleteButton.innerHTML = 'Delete';
            deleteButton.classList.add('delete_button');
            deleteButton.addEventListener('click', function () {
                deleteTask(i);
            });
            listItem.appendChild(deleteButton);
            taskList.appendChild(listItem);
        }
    }
}

function deleteTask(index) {
    tasks.splice(index, 1);
    showList();
}

let addButton = document.getElementById('add_button');
let showButton = document.getElementById('show_button');
addButton.addEventListener('click', addTask);
showButton.addEventListener('click', showList);
