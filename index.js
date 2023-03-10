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


    const confirmed = prompt(`Are you sure you want to add ${name} to the database?`);
    if (!confirmed) {
        return;               //do not proceed with adding the employee
    }
    
    const employee = { // create new employee object
        name: name,
        email: email,
        phone: phone,
        birthdate: birthdate,
        salary: salary
    };

    employees.push(employee); // add new employee object to array

    //clear the form fields
    addEmployee.reset();
})

//delete the employee
function confirmDelete() {
    if (confirm("Are you sure you want to delete?")) {
      deleteRecord()
    } else {

    }
  }
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


    const confirmed2 = prompt(`Are you sure you want to add task with name ${title} to the database?`);
    if (!confirmed2) {
        return;               
    }
    
    const task = { 
        title: title,
        description: description,
        assigneee: assignee,
        duedate: duedate,
    };

    tasks.push(task); 
    addTask.reset();
})
});  

}

//export { initialize };
