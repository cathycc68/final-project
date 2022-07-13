document.getElementById("newTaskFormButton").addEventListener("click", functionName);

   function functionName(){
       console.log("yes");
       newTaskVar.addTask();
   }



const taskManager = new TaskManager(0);

const newTaskForm = document.querySelector('#newTaskForm');

newTaskForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const newTaskNameInput = document.querySelector('#name');
    const newTaskDescription = document.querySelector('#description');
    const newTaskAssignedTo = document.querySelector('#assignedTo');
    const newTaskDueDate = document.querySelector('#dueDate');
    const newStatus = document.querySelector('#status');

    if (name.length === 0 || description.length === 0 || assignedTo.length === 0 || dueDate.length === 0){
        console.log('Please fill out all fields!');
          var myAlert = document.getElementById('alertMe');
          myAlert.style.display = 'block';
        } else {
        console.log('All fields filled!');
          var myAlert = document.getElementById('alertMe');
          myAlert.style.display = 'none';
          newTaskVar.addTask();
          newTaskVar.render();  
        } 
});  
