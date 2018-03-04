var list = ["Buy New Turtule "];
var i = 0;
var input = prompt("What would you like to do?");

while(input !== "quit"){
  if(input === "list") {
    listTodos();
  } else if(input === "delete"){
    var index = prompt("Enter index of todo to delect.");
    list.splice(index,i);
    console.log("Successfully Delected");
  } else if(input === "new") {
    var newTodo = prompt("Enter New Todo");
    list.push(newTodo);
    console.log("Added New todos")
  }
}

function listTodos () {
  console.log("    *******To Do List's*******    ")
  list.forEach(funtion(todo, i){
    console.log(i + ": " + todo);
  });
  console.log("    **************************    ")
}
