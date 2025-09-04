// Prompt users for task 1 title, description and status inputs

let titleTask1 = prompt("Enter task 1 title:");

let descriptionTask1 = prompt("Enter task 1 description:");

let statusTask1 = prompt("Enter task 1 status:").toLowerCase(); //convert the status input to lowercase

// check if user status input is valid, if not return user to prompting

while (statusTask1 !== "todo" && statusTask1 !== "doing" && statusTask1 !== "done") {
  TaskStatus1 = prompt("Enter Task 1 Status: `todo`, `doing` or `done`").toLowerCase();
}

// Check if status is done or not with unique message in console

if (statusTask1 !== "done") {
    console.log("No tasks completed, let's get to work!");
} else {
    console.log("Title: Make corrections to JSL01, status: done");
}

// Prompt users for task 2

let titleTask2 = prompt("Enter task 2 title:");

let descriptionTask2 = prompt("Enter task 2 description:");

let statusTask2 = prompt("Enter task 2 status:").toLowerCase(); //convert the status input to lowercase

// check if user status input is valid, if not return user to prompting

while (statusTask2 !== "todo" && statusTask2 !== "doing" && statusTask2 !== "done") {
  TaskStatus1 = prompt("Enter Task 2 Status: `todo`, `doing` or `done`").toLowerCase();
}
console.log(TaskTitle2, ": ", TaskStatus2);

// Check if status is done or not with unique message in console

if (statusTask2 !== "done") {
    console.log("No tasks completed, let's get to work!");
} else {
    console.log("Title: Make corrections to JSL02, status: done");
}
