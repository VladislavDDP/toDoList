const addBtn = document.querySelector('.add-task-btn')
const toDoList = document.querySelector('.to-do-list')
const inputTask = document.querySelector('.input-task')

addBtn.addEventListener('click', addTask)
inputTask.addEventListener('keydown', (key) => {
    if (key.keyCode == 13) addTask()
})

function addTask() {
    if (inputTask.value == '') {
        alert('Empty task...')
        return
    }

    createTask(inputTask.value)
    inputTask.value = ''
}

function createTask(inputText) {
    const taskContainer = document.createElement('div')
    taskContainer.className = 'task-container'

    const status = document.createElement('input')
    status.type = 'checkbox'

    status.addEventListener('click', event => {
        event.target.parentElement.classList.toggle('completed')
    })

    const textTask = document.createElement('p')
    textTask.textContent = inputText

    const deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'Delete'

    deleteBtn.addEventListener('click', event => {
        event.target.parentElement.classList.add('products-delete')
        setTimeout(() => {
            event.target.parentElement.remove()
        }, 1000)
    })

    taskContainer.append(status)
    taskContainer.append(textTask)
    taskContainer.append(deleteBtn)
    toDoList.append(taskContainer)
}