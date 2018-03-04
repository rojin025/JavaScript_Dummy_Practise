// // var userFName = prompt("What is your First Name?");
// // var userLName = prompt("What is your Last Name?");
// // var userAge = prompt("What is your Age?");
// // alert("Your name is " + userFName + userLName + ".");
// // alert("Your age is " + userAge + ".");
// // console.log("Nice to meet you " + userFName + userLName);
// // var a = 10;
// // var b = "c";
// //
// // b === "c" || a >= 11;
// //
// // var x = 3;
// // var y = 8;
// //
// // !(x == "3" || x === y) && !(y != 8 && x <= y)
// //
// // var str ="";
// // var msg = "haha!"
// // var isFunny = "false"
// //
// // !(( str || msg ) && isFunny)
//
// // // guessing game
// // var ans =3;
// //
// // var stringNum = prompt("Guess the number:");
// // var num = Number(stringNum);
// //
// // if (num === ans) {
// //   alert("Corrent Number Yes");
// // } else if (num > ans) {
// //   alert("Too High Guess Again");
// // } else {
// //   alert("Too Low Guess Again")
// // }
//
// // Whiele exerisce
// var n = -10 ;
// console.log("Print all numbers between -10 and 19")
// while (n < 20){
//   console.log(n);
//   n++;
// }
//
// var n = 10;
// console.log("Print all ever number 10 and 40");
// while (n < 41) {
//   if ((n%2)==0) {
//     console.log(n);
//   }
//   n++;
// }
//
// var a = 300;
// console.log("print all odd numbers between 300 and 333");
// while (a < 334) {
//   if ((a%3)==0) {
//     console.log(a);
//   }
//   a++;
// }
//
// var b = 5;
// console.log("Print all NUmbers divisible by 5 and 3 between 5 and 50");
// while (b < 50) {
//   if(((b % 3)==0) && ((b % 5)==0)) {
//     console.log(b);
//   }
//   b++;
// }

// TO CHECK WHEATHER THE STRING CONTAIN Yes
var ans = prompt("Are we there yet?");
while (ans.indexOf("yes") === -1 && ans.indexOf("yup") === -1) {
  var ans = prompt("Are we there yet?");
}
alert("Yes we Made it!")
