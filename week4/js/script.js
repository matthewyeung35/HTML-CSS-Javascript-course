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

// //lec45 object
// var company = new Object();
// company.name = "Facebook";
// company.ceo = new Object()
// company.ceo.firstName="Mark"
// company.ceo.lastName="Zucc"
// console.log("name of the ceo" +company.ceo.firstName);
// console.log(company["name"]);
// company["$stock of company"] = 110;
// console.log("stock price is: "+ company["$stock of company"])

// object literal
// var facebook = {
//     name: "Facebook",
//     ceo: {
//         firstName:"Mark",
//         lastName:"Zucc"
//     },
//     $stock: 110
// };
// console.log(facebook)

//lec46
// function multiply(x,y){
//     return x*y;
// }


// //function factory
// function makeMultiplier(multiply){
//     var myFunc = function (x){
//         return multiply * x;
//     };
//     return myFunc;
// };
// var multiplyBy3 = makeMultiplier(3)
// console.log(multiplyBy3(10))
// var multiplyBy2 = makeMultiplier(2)
// console.log(multiplyBy2(1000))

// //passing function as arguments
// function doOperationOn(x, operation){
//     return operation(x)
// };
// console.log(doOperationOn(5, multiplyBy3));
// // console.log(multiply(5,3))
// // multiply.version="v1.0.0"
// // console.log(multiply.version)

// // copy by value vs reference
// var a = 7;
// var b = a;
// console.log(b);

// var a = {
//     x: 7
// };
// b = a;
// console.log(a)
// console.log(b)
// b.x=5
// console.log("After update")
// console.log(a)
// console.log(b)

// function changePrimitive(primValue){
//     console.log("in changePrimitive");
//     console.log("before");
//     console.log(primValue);
//     primValue = 5;
//     console.log("after");
//     console.log(primValue);
// }
// var value = 7
// changePrimitive(value)
// console.log("after changePrimitive, orig value:")
// console.log(value);

// function changeObject(objValue){
//     console.log("in changeObject");
//     console.log("before");
//     console.log(objValue);
//     objValue.x = 5;
//     console.log("after");
//     console.log(objValue);
// }
// var value = {x : 7};
// changeObject(value)
// console.log("after changeObject, orig value:")
// console.log(value);


// function test(){
//     console.log(this);
//     this.myName = "Matthew";
// }
// console.log(window.myName);

// // function constructors - create objects
// function Circle (radius){
//     this.radius = radius;

// }
// Circle.prototype.getArea = 
// function () {
//     return Math.PI * Math.pow(this.radius, 2);
// };

// var myCircle = new Circle(10) // new object();
// console.log(myCircle.getArea(), myCircle)


// // Object literals and "this"
// var literalCircle = {
//     radius: 10,
//     getArea: function (){
//         var self = this;
//         console.log(this);

//         var increaseRadius = function (){
//             self.radius = 20;
//         };
//         increaseRadius();
//         console.log(this.radius);

//         return Math.PI * Math.pow(this.radius, 2);
//     }
// };
// console.group(literalCircle.getArea());
