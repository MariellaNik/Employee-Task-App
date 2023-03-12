//function initialize() {
document.addEventListener("DOMContentLoaded", function() {
// Declare an empty array to hold the employees
let employees = [];

//add prompt to display the inputted  for Employee and ask for confirmation, so the user can read the data
const addEmployee = document.getElementById("add-employee-form");
addEmployee.addEventListener("submit", (event) => {
    event.preventDefault();

    //function handling adding the new employee
    const name = document.getElementById("employee-name").value;
    const email = document.getElementById("employee-email").value;
    const birthdate = document.getElementById("employee-db").value;
    const salary = document.getElementById("employee-salary").value;


    const confirm = prompt(`Are you sure you want to add ${name} to the database?`);
    if (!confirm) {
        return;               //do not proceed with adding the employee
    }
    
    const employee = { // create new employee object
        name: name,
        email: email,
        birthdate: birthdate,
        salary: salary
    };

    employees.push(employee); // add new employee object to array
        
    //clear the form fields
    addEmployee.reset();
});

//delete the employee
const deleteEmployeeForm = document.getElementById("delete-employee-form");
const deleteEmployeeButton = deleteEmployeeForm.querySelector("button[type=submit]");
deleteEmployeeButton.addEventListener("click", (event) => {
    event.preventDefault();
  
    // Get the name of the employee to be deleted
    const name = document.getElementById("employee-name").value;
  
    // Confirm with the user if they want to delete the employee
    const confirmDelEmp = confirm(`Are you sure you want to delete employee with name "${name}"?`);
  
    if (confirmDelEmp) {
      // function to delete the employee
      name = name.filter((name) => name.id !== id);
    }
    
    // Reset the delete task form
    deleteEmployeeForm.reset();
  });
});

//do the same for tasks
document.addEventListener("DOMContentLoaded", function() {
  let tasks = [];
const addTask = document.getElementById("add-task-form");
addTask.addEventListener("submit", (event) => {
    event.preventDefault();

    const title = document.getElementById("task-title").value;
    const description = document.getElementById("task-description").value;
    const assignee = document.getElementById("task-assignee").value;
    const duedate = document.getElementById("task-due").value;


    const confirm2 = prompt(`Are you sure you want to add task with name ${title} to the database?`);
    if (!confirm2) {
        return;               
    }
    
    const task = { 
        title: title,
        description: description,
        assignee: assignee,
        duedate: duedate,
    };

    tasks.push(task); 
    addTask.reset();
})
const deleteTaskForm = document.getElementById("delete-task-form");
const deleteTaskButton = deleteTaskForm.querySelector("button[type=submit]");
deleteTaskButton.addEventListener("click", (event) => {
    event.preventDefault();
  
    // Get the title of the task to be deleted
    const title = document.getElementById("task-title").value;
  
    // Confirm with the user if they want to delete the task
    const confirmDelTask = confirm(`Are you sure you want to delete the task with title "${title}"?`);
  
    if (confirmDelTask) {
        tasks = tasks.filter((task) => task.id !== id);
    }
  });
    // Reset the delete task form
    deleteTaskForm.reset();
  }
  
);

//export let tasks;
//export let employees;
//export { initialize };
