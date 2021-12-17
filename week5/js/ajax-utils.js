(function(global){

// set up namespace
var ajaxUtils = {};

function getRequestObject(){
    if (window.XMLHttpRequest){
        return (new XMLHttpRequest());
    }
    else if (window.ActiveXObject){
        return (new ActiveXObject("Microsoft.XMLHTTP"));
    }
    else{
        global.alert("Ajax is not supported!")
        return (null);
    }
}

// makes an ajax get request to requesturl
ajaxUtils.sendGetRequest =
function(requestUrl, responseHandler){
    var request = getRequestObject();
    request.onreadystatechange=
    function(){
        handleResponse(request, responseHandler);
    };
    request.open("GET", requestUrl, true);
    request.send(null); 
};

function handleResponse(request, responseHandler){
    if ((request.readyState == 4) && (request.status == 200)){
        responseHandler(request);
    }
}



//expose utility to global
global.$ajaxUtils = ajaxUtils;

})(window);