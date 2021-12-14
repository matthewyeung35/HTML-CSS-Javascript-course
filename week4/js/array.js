// var array = new Array();
// array[0] = "matthew";
// array[1] = 2;
// array[2] = function (name){
//     console.log("hello " + name);
// };
// array[3] = {course: "html"};
// console.log(array);
// console.log(array[1]);
// array[2](array[0]);
// console.log(array[3].course)

//short hand array creation
// var names= ['mattew', "john", "joe"];
// console.log(names);
// names[100]="Jim"
// for (var i = 0; i<names.length; i++){
//     console.log("Hello " + names[i])
// }

// var name2 = ['mattew', "john", "joe"];
// var myObj = {
//     name: "matthew",
//     course: "Html",
//     platform: "Coursera"
// };
// for (var prop in myObj){
//     console.log(prop + ": " + myObj[prop]);
// }

// for (var name in name2){
//     console.log("Hello " + name2[name]);
// }

// Closures
// function makeMultiplier (multiplier) {

//     function b(){
//         console.log("Multiplier is: " + multiplier);
//     }
//     b();

//     return (
//         function (x){
//             return multiplier * x;
//         }
//     );
// }
// var doubleAll = makeMultiplier(2);
// console.log(doubleAll(10));

