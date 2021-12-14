(function (window){
    var hiGreeter = {};
    hiGreeter.name = "John";
    var greeting = "Hi ";
    hiGreeter.sayHi = function(){
        console.log(greeting + hiGreeter.name);
    }
    window.hiGreeter = hiGreeter;

})(window);

