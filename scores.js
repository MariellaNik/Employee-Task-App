import { tasks } from './index.js';
import { employees } from './index.js';

initialize();


employees.forEach(employee => {
    employee.taskCount = 0;
  });
  
  // Increment the task counter for the assigned employee
  tasks.forEach(task => {
    const assignedEmployee = employees.find(employee => employee.name === task.assignee);
    assignedEmployee.taskCount++;
  });
  
  // Sort employees by task count in descending order
  const sortedEmployees = employees.sort((a, b) => b.taskCount - a.taskCount);
  
  // Get the top 5 employees with the most tasks
  const topEmployees = sortedEmployees.slice(0, 5);
  
  // Display the top 5 employees in the browser
  const topEmployeesList = document.getElementById("top-employees");
  
  // Loop through the top 5 employees and add them as list items to the unordered list
  for (let i = 0; i < topEmployees.length; i++) {
    const employee = topEmployees[i];
    const listItem = document.createElement("li");
    listItem.textContent = `${employee.name}: ${employee.taskCount} tasks`;
    topEmployeesList.appendChild(listItem);
  }
