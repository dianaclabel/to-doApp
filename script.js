(() => {
  //immediately invoked function expression IIFE
  //son funciones en cuanto se declaran se ejecutan
  //ya que cuando declaramos una variable esta  se  encunetra en el scope global y cualquier usuario puede tener alcnce a ellas
  // por ello utilizamos esta function IIFE
  const btn = document.querySelector("[data-form-btn]");

  const createTask = (evento) => {
    evento.preventDefault();
    const input = document.querySelector("[data-form-input]");
    const value = input.value;
    const list = document.querySelector("[data-list]");
    const task = document.createElement("li");
    task.classList.add("card");
    input.value = "";
    //backticks
    const taskContent = document.createElement("div");
    taskContent.appendChild(checkComplete());
    const titleTask = document.createElement("span");
    titleTask.classList.add("task");
    titleTask.innerText = value;
    taskContent.appendChild(titleTask);
    const content = `<i class="fas fa-trash-alt trashIcon icon"></i>`;
    //task.innerHTML = content;
    task.appendChild(taskContent);
    list.appendChild(task);
  };

  btn.addEventListener("click", createTask);

  const checkComplete = () => {
    const i = document.createElement("i");
    i.classList.add("far", "fa-check-square", "icon");
    i.addEventListener("click", completeTask);
    return i;
  };

  const completeTask = (event) => {
    // el icono son descargado e font awesome , las clases son cambiables y te dan estilos diferentes
    const element = event.target;
    element.classList.toggle("fas");
    element.classList.toggle("completeIcon");
    element.classList.toggle("far");
  };
})();
