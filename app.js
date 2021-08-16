// init selectors
const addBtn = document.querySelector('.add-task-btn')
const toDoList = document.querySelector('.to-do-list')
const inputTask = document.querySelector('.input-task')
const toDoItemTemplate = document.querySelector('#to-do-list-template').innerHTML

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

// using template for html in order to create a task 
function createTask(inputText) {
    toDoList.innerHTML += Mustache.render(toDoItemTemplate, {inputText: inputText})
}
