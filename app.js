// init selectors
const addBtn = document.querySelector('.add-task-btn')
const toDoList = document.querySelector('.to-do-list')
const inputTask = document.querySelector('.input-task')

// add new task event -> also works with key 'enter' pressed
addBtn.addEventListener('click', addTask)
inputTask.addEventListener('keydown', (key) => {
    if (key.keyCode == 13) addTask()
})

toDoList.addEventListener('click', event => {
    // add listener for delete button click
    if (event.target.tagName == 'BUTTON') {
        event.target.parentElement.classList.add('products-delete')
        setTimeout(() => {
            event.target.parentElement.remove()
        }, 1000)
    }
})

// listener for checkbox input if task is completed
toDoList.addEventListener('click', event => {
    if (event.target.type == 'checkbox')
        event.target.parentElement.classList.toggle('completed')
})

// add task with a little validation
function addTask() {
    if (inputTask.value == '') {
        alert('Empty task...')
        return
    }

    createTask(inputTask.value)
    inputTask.value = ''
}

// creating container for task (text, checkbox, delete button)
function createTask(inputText) {
    const taskContainer = document.createElement('div')
    taskContainer.className = 'task-container'

    const status = document.createElement('input')
    status.type = 'checkbox'

    const textTask = document.createElement('p')
    textTask.textContent = inputText

    const deleteBtn = document.createElement('button')
    deleteBtn.className = 'delete-btn'
    deleteBtn.textContent = 'Delete'

    taskContainer.append(status)
    taskContainer.append(textTask)
    taskContainer.append(deleteBtn)
    toDoList.append(taskContainer)
}
