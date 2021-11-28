// var message = "in global";
// console.log("global:message= "+ message);

// var a = function () {
//     var message = "inside a";
//     console.log("a: message= " + message);

//     var c = function () {
//         console.log("c: message = " + message);
//     }
//     c();
// }
// function  b(){
//     console.log("b: message = " + message);
// }
// a();
// b();

//lec42
// var x;
// console.log(x);
// if (x == undefined){
//     console.log("x is undefined");
// }
// else{
//     console.log("x is defined");
// }

// //lec 43
// var string = "Hello ";
// string += "World";
// console.log(string)
// var no1 = 1;
// no1 +=3
// console.log(no1+4);
// console.log(undefined/1);

// equality
function equality (){
    var x=4, y=4;
    if (x==y){
        console.log("x is equal to y");
    }
    x="4";
    if (x==y){
        console.log("x is equal to y");
    }

    // strick equality

        x="4", y=4;
        if (x===y){
            console.log("x is equal to y");
        }
        else{
            console.log("x is NOT equal to y");
        }
}
//equality()
function bootlean_test(){
// Boolean
    if (false|| null || undefined || "" || 0 || NaN){
        console.log("Wont execute");
    }
    else{
        console.log("All false");
    }

    if (true && "hello" && 1 && -1 && "false"){
        console.log("All true");
    }
}
//bootlean_test()

//does curly brace matters
function curly_brace(){
    function a()
    {
        return  //nothing right behind return, js turned it to return;
        {
            name: "matthew"
        };
    }
    function b(){
        return {
            name: "Matthew"
        };
    }
    console.log(a());
    console.log(b());
}
//curly_brace()

// for loop
function loop(){
    var sum=0;
    for (var i=0; i<10; i++){
        sum = sum +i;
    }
    console.log("sum of 0 through 9 is " + sum)
}
//loop()

//lec44
// function orderChickenWith(sideDish){
//     sideDish = sideDish || "whatever";
//     console.log("Chicken with " + sideDish );
// }
// orderChickenWith();
// orderChickenWith("noodles");