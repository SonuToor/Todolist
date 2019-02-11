const textInput = document.querySelector('.input-task');
const taskInputForm = document.querySelector('.input');
const toDoList = document.getElementById('todo-list');
const doneList = document.getElementById('done-list');
const clock = document.querySelector('.clock');

toDoList.addEventListener('click', taskButtonResponse);
taskInputForm.addEventListener('submit', addToList);
setInterval(setTime, 1000);

function setTime() {
    date = new Date();
    hour = date.getHours();
    minute = date.getMinutes();
    second = date.getSeconds();

    clock.innerHTML = (`${hour}:${minute}:${second}`);

}

function addToList(e) {
    e.preventDefault();

    const taskInput = textInput.value; 
    entry = document.createElement('li');
    entry.innerHTML = `<button type="button" class="button finished">&#10003;</button><button type="button" class="button delete">&#10007;</button>
    ${taskInput}`;
    toDoList.appendChild(entry);
    textInput.value = '';
}

function taskButtonResponse(e) {
    const buttonPressed = e.target;
    const taskEntry = buttonPressed.parentNode;
    if (buttonPressed.classList.contains('delete')) {
        deleteTask(taskEntry);
    }
    if (buttonPressed.classList.contains('finished')) {
        addToDoneList(taskEntry);
    }
}

function addToDoneList(task) {

    taskText = task.innerText.slice(2);
    finishedTask = document.createElement('li');
    finishedTask.innerHTML = taskText;
    finishedTask.classList.add('finished-task');
    doneList.appendChild(finishedTask);
    toDoList.removeChild(task);
    
}

function deleteTask(task) {
    toDoList.removeChild(task);
}

