let title1 = prompt("Enter task 1 title:");

let description1 = prompt("Enter task 1 description:");

let status1 = prompt("Enter task 1 status:");
console.log(status1.toLowerCase());

if (status1 === "todo" || "doing" || "done") {
    console.log(status1);
} else {
    alert("Invalid status. Please enter `todo`, `doing`, or `done`.");
}

let title2 = prompt("Enter task 2 title:");

let description2 = prompt("Enter task 2 description:");

let status2 = prompt("Enter task 2 status:");
console.log(status2.toLowerCase());

if (status1 === "todo" || "doing" || "done") {
    console.log(status2);
} else {
    alert("Invalid status. Please enter `todo`, `doing`, or `done`.");
}




