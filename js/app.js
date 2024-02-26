let taskInput = document.getElementById("task-input")
let addBtn = document.getElementById("add-btn")
let taskList =document.getElementById("task-list")

addBtn.addEventListener("click",()=>{
    if(taskInput.value !== ""){
        let taskText =taskInput.value;
        let listItem =document.createElement("li");
        listItem.innerHTML =`
         ${taskText} 
         <button class="delete-btn">Delete</button>
        `;

        taskList.appendChild(listItem)
        taskInput.value = ""
    }
    else{
        alert("Place nimadr yozing")
    }
})
taskList.addEventListener("click",(event)=>{
    if(event.target.classList.contains("delete-btn")){
        let listItem =event.target.parentElement;
        taskList.removeChild(listItem)
    }
})