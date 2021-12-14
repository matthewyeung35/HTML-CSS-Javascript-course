(function (window){
    var helloGreeter = {};
    helloGreeter.name = "Yaakov";
    var greeting = "Hello ";
    helloGreeter.sayHello = function (){
        console.log(greeting + helloGreeter.name);
    }
    window.helloGreeter = helloGreeter;

})(window);