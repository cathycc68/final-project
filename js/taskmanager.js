createTaskHtml = (name, description, assignedTo, dueDate, status) => {
    const html = `
  <li id="${id}" class="list-group-item ">
  <div class="card" style="width: 18rem";>
     <div class="card-body">
     <button type="button" class="btn btn-info done-button">Mark as Done</button>
      <h5 class="card-title">${name}</h5>
      <p class="card-text">${description}</p>
      <p class="card-text">
        <p class="card-text">
        <div class="dropdown">
            ${status}
            <label for="status">Choose a status:</label>
            <select name="status" id="status">
              <option value=" "> </option>
              <option value="Done">Done</option>
              <option value="ToDo">To Do</option>
            </select>
          </div>
        </div>
     </p>
      </p>
      <p class="card-text">Assigned to: ${assignedTo}</p>
      <p class="card-text">Due to: ${dueDate}</p>
    </div>
  </div>
  </li>
`
// `<li class="list-group-item">
//         <div class="d-flex w-100 mt-2 justify-content-between align-items-center">
//             <h5>${name}</h5>
//             <span class="badge badge-danger">${status}</span>
//         </div>
//         <div class="d-flex w-100 mb-3 justify-content-between">
//             <small>Assigned To: ${assignedTo}</small>
//             <small>Due: ${dueDate}</small>
//         </div>
//         <p>${description}</p>
//     </li>`

return html;
// //testing
//   document.querySelector('#demo').innerHTML = html;

}
// createTaskHTML("pick up ", "go pick up something", "Cathy", "July 12, 2022", "to-do")

class TaskManager {
    constructor(currentId) {
        this.tasks = [];
        this.currentId = 0;
    }
    addTask(name, description, assignedTo, dueDate, status) {
        const task = {
            id: this.currentId++,
            name: name,
            description: description,
            assignedTo: assignedTo,
            dueDate: dueDate,
            status: 'todo'
        };
            this.tasks.push(task);
            this.render();
            
        }
        render() {
          var tasksHtmlList = [];
          var tasksHtmlVar = tasksHtmlList;
          for(let i = 0; i < this.tasks.length; i++){
               var currentTask = this.tasks[i];
              const newDate = new Date(currentTask.dueDate);
              // due to time zones, date is ahead by one day
               const formattedDate = (newDate.getMonth() + 1) + '/' + newDate.getDate() + '/' + newDate.getFullYear();
              var taskHtml = createTaskHtml(currentTask.name, currentTask.description, currentTask.assignedTo, formattedDate, currentTask.status, currentTask.id);
              tasksHtmlList.push(taskHtml);
              console.log(taskHtml);
              console.log(tasksHtmlList);
                for(let i = 0; i < tasksHtmlList.length; i++);{
              document.getElementById("tasksList").innerHTML = tasksHtmlList;
                }
              }
            }
            getTaskById(taskId) {
              let foundTask = taskId;
              for(let x = 0; x < this.tasks.length; x++){
                let task = this.tasks[x];
                if (task.id == foundTask){
                  return task;
                }
              }
            }
            save() {
              var tasksJson = JSON.stringify(this.tasks);
              localStorage.setItem('tasks', tasksJson);
              var currentId = String(this.currentId);
              localStorage.setItem('currentId', currentId);
          }
          
          load() {
            if (localStorage.getItem('tasks')) {
                const tasksJson = localStorage.getItem('tasks');
                this.tasks = JSON.parse(tasksJson);
             }
          
            if (localStorage.getItem('currentId')) {
                const currentId = localStorage.getItem('currentId');
                this.currentId = Number(currentId);
            }
          }
      };

var newTaskVar = new TaskManager();

newTaskVar.load();
newTaskVar.render();
