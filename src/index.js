document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const submitForm = document.querySelector(`#create-task-form`);
  const task = document.querySelector(`#tasks`)

  submitForm.addEventListener(`submit`, (e) => {
    e.preventDefault();
    const input = document.querySelector(`#new-task-description`)
    const taksLi = document.createElement(`li`)
    taksLi.innerText = input.value
    task.append(taksLi)
  }) 

  

  
  
});
