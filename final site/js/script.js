document.addEventListener("DOMContentLoaded",
    function (event){

        document.querySelector(".navbar-toggler")
        .addEventListener("blur", function(){
            var screenWidth = window.innerWidth;
            if (screenWidth <992){
                ("#collapsable-nav").collapse("hide")
            };

        });

    });

(function(global){
var dc = {};

var homeHtml = "snippets/home-snippet.html";

// for insreting innerHTMl for select
var insertHtml = function (selector, html){
    var targetElem = document.querySelector(selector);
    targetElem.innerHTML = html;
};
// show loading inside element
var showLoading = function (selector){
    var html = "<div class= 'text-center'>";
    html += "<img src='images/ajax-loader.gif'></div>";
    insertHtml(selector,html);
};

document.addEventListener("DOMContentLoaded", function (event){
showLoading("#main-content");
$ajaxUtils.sendGetRequest(
    homeHtml,
    function (responseText){
        document.querySelector("#main-content")
        .innerHTML = responseText;
    },
    false);
});

global.$dc = dc;

})(window);



