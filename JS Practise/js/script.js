// var userFName = prompt("What is your First Name?");
// var userLName = prompt("What is your Last Name?");
// var userAge = prompt("What is your Age?");
// alert("Your name is " + userFName + userLName + ".");
// alert("Your age is " + userAge + ".");
// console.log("Nice to meet you " + userFName + userLName);
// var a = 10;
// var b = "c";
//
// b === "c" || a >= 11;
//
// var x = 3;
// var y = 8;
//
// !(x == "3" || x === y) && !(y != 8 && x <= y)
//
// var str ="";
// var msg = "haha!"
// var isFunny = "false"
//
// !(( str || msg ) && isFunny)

// guessing game
var ans =3;

var stringNum = prompt("Guess the number:");
var num = Number(stringNum);

if (num === ans) {
  alert("Corrent Number Yes");
} else if (num > ans) {
  alert("Too High Guess Again");
} else {
  alert("Too Low Guess Again")
}
