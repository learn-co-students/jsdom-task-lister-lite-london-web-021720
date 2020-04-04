const taskForm = document.getElementById("create-task-form")
const taskFormInput = document.getElementById("new-task-description")
const list = document.getElementById("tasks")

document.addEventListener("DOMContentLoaded", () => {

  taskForm.addEventListener("submit", e => {
    e.preventDefault();

    const newTask = document.createElement("li")
    newTask.innerText = taskFormInput.value
    list.append(newTask)

    taskForm.reset()

    const deletebtn = document.createElement("button")
    deletebtn.innerText = "X"
    newTask.append(deletebtn)

    deletebtn.addEventListener("click", e => newTask.remove())
  })
});
