// Prompt users for task 1 title, description and status inputs
let task1Title = prompt("Enter task 1 title:");
let task1Description = prompt("Enter task 1 description:");

// Convert the status input to lowercase
let task1Status = prompt("Enter task 1 status (todo, doing, done):").toLowerCase(); 

// Check if user status input is valid, if not return user to prompt
while (task1title !== "todo" && task1Description !== "doing" && task1Status !== "done") {
  alert("Invalid status. Please enter 'todo', 'doing' or 'done'");
  task1Status = prompt("Enter task 1 status (todo, doing, done):").toLowerCase();
}

// Check if task 1 is done and log it
if (task1Status === "done") {
    console.log(task1title + ": " + "Status: " + task1Status);
}

// Repeat everything for Task 2
let task2Title = prompt("Enter task 2 title:");
let task2Description = prompt("Enter task 2 description:");
let task2Status = prompt("Enter task 2 status (todo, doing, done):").toLowerCase(); 

while (task2Title !== "todo" && task2Description !== "doing" && task2Status !== "done") {
    alert(`Invalid status. Please enter "todo", "doing" or "done"`);
    task2Status = prompt("Enter task 2 status (todo, doing, done):").toLowerCase();
}

if (task2Status === "done") {
    console.log(task2Title + ": " + "Status: " + task2Status);
}

// If neither task 1 nor 2 is done give encouring message

if (task2Status !== "done" && task2Status !== "done") {
    console.log("No tasks completed, let's get to work!");
} 