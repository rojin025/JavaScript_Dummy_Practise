// var list = ["Buy New Turtule "];
// var i = 0;
// var input = prompt("What would you like to do?");
//
// while(input !== "quit"){
//   if(input === "list") {
//     listTodos();
//   } else if(input === "delete"){
//     var index = prompt("Enter index of todo to delect.");
//     list.splice(index,i);
//     console.log("Successfully Delected");
//   } else if(input === "new") {
//     var newTodo = prompt("Enter New Todo");
//     list.push(newTodo);
//     console.log("Added New todos")
//   }
// }
//
// function listTodos () {
//   console.log("    *******To Do List's*******    ")
//   list.forEach(funtion(todo, i){
//     console.log(i + ": " + todo);
//   });
//   console.log("    **************************    ")
// }

var num = [1,2,3,4,5,6,7,8,9,10];

// console.log("solution");
//
// function printReverse(x){
//   for ( var i = x.length-1 ; i >= 0 ; i--){
//     console.log(x[i]);
//   }
// }
//
// printReverse(num);

// isUniform

// console.log("isUniform()");

// function isUniform(num) {
//   var count = 0;
//   for( var i = 1 ; i < num.length ; i ++){
//     if ( num[0] === num[i]) {
//       count ++;
//     }
//   }
//   if ( num.length == count) {
//     console.log("true");
//   } else {
//     console.log("false");
//   }
// }

// // 2
// function isUniform2(x) {
//   var num1=x[0];
//   for ( var i = 1 ; i < x.length ; i ++) {
//     if ( num1 !== x[i])
//     return false;
//   }
//     return true;
// }

function sumArray(x) {
  var sum = 0;
  x.forEach(function(y){
    // var sum = sum + y;
    sum += y;
  });
  console.log(sum);
}
