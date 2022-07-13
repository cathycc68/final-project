
const newTaskVar = new TaskManager;

const newTaskForm = document.querySelector('#newTaskForm');

newTaskForm.addEventListener("click", function() {
    event.preventDefault();

    const newTaskNameInput = document.querySelector('#name').value;
    const newTaskDescription = document.querySelector('#description').value;
    const newTaskAssignedTo = document.querySelector('#assignedTo').value;
    const newTaskDueDate = document.querySelector('#dueDate').value;
    const newStatus = document.querySelector('#status').value;
console.log(newTaskNameInput.length)
    if (newTaskNameInput.length === 0 ){
        console.log('Please fill out all fields!');
          var myAlert = document.getElementById('alertMe');
          myAlert.style.display = 'block';
        } else {
        console.log('All fields filled!');
          var myAlert = document.getElementById('alertMe');
          myAlert.style.display = 'none';
          newTaskVar.addTask();
        } 
});  
