
const newTaskVar = new TaskManager;

const newTaskForm = document.querySelector('#newTaskForm');

newTaskForm.addEventListener('submit', (event) =>  {
    event.preventDefault();

    const name = document.querySelector('#name').value;
    const description = document.querySelector('#description').value;
    const assignedTo = document.querySelector('#assignedTo').value;
    const dueDate = document.querySelector('#dueDate').value;
    const status = document.querySelector('#status').value;
console.log(name.length)
    if (name.length === 0 ){
        console.log('Please fill out all fields!');
          var myAlert = document.getElementById('alertMe');
          myAlert.style.display = 'block';
        } else {
        console.log('All fields filled!');
          var myAlert = document.getElementById('alertMe');
          myAlert.style.display = 'none';
          newTaskVar.addTask(name, description, assignedTo, dueDate, status);
        } 
});  
