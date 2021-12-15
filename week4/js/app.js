helloGreeter.sayHello();
hiGreeter.sayHi();

//IIFE Immediately Invoked Function Expression
(function (name){
    console.log("Hello " + name);
})("world");
(function(){})();