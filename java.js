
//funçao que adiciona tarefa
function addTask(){

    //titulo da tarefa
    const taskTitle= document.querySelector("#task-title").value;

   if(taskTitle){
    //clona template
    const template = document.querySelector(".template")
    const newTask = template.cloneNode(true)
    //adiciona titulo
    newTask.querySelector(".task-title").textContent = taskTitle ;
    
    //remover as classes desnecessaraias
    newTask.classList.remove("template");
    newTask.classList.remove("hide");
    
    //adiciona na lista
    const list = document.querySelecto("#task-list")
    list.appendChild(newTask)
    
    //adicionar o evento de remover
    const removeBtn = newTask.querySelector(".remove-btn").addEventListener("click",function(){
        removeTask(this)
    })
    
    //aadicionar evento de completar tarefa
      const doneBtn = newTask.querySelector(".done-btn").addEventListener("click",function(){
        completaTask(this)
      })
    //limpar texto
    document.querySelector("#task-title").value = "";
    
 }
}

//funçao de remover tarefa
function removeTask(task){
    task.parentNode.remove(true)
}

//funçao de completar a tarefa
function completaTask(task){
    const taskToComplete = task.parentNode
    taskToComplete.classList.toggle("done")
}

//evento de adicionar tarefa
const addBtn = document.querySelector("add-btn");

addBtn.addEventListener("click", function(e){

    e.preventDefault();

    addTask()


})