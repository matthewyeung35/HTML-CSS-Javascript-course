// Event handling
document.addEventListener("DOMContentLoaded",
  function (event) {
    
    // Unobtrusive event binding
    document.querySelector("button")
      .addEventListener("click", function () {
        
        // Call server to get the name
        $ajaxUtils
          .sendGetRequest("data/data.json", 
            function (res) {
              var message = res.firstName + " " + res.lastName;
              if (res.likeFood){
                message += " likes food ";
              }
                else{
                  message += " doesn't like food ";
                }
                message+= "and uses ";
                message += res.numberOfDisplays;
                message += "displays for coding.";
                document.querySelector("#content")
                .innerHTML= "<h2>" + message + "</h2>"
            });

        
      });
  }
);





