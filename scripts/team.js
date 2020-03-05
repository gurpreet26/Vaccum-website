$(document).ready(function() {
    // end click
       
       $("#teamDescribe h2").click(function() {
           $(this).toggleClass("minus");
           if ($(this).attr("class") == "minus") {
                  $(this).next().slideDown(1000, "easeOutBounce");
              }
              else {
               $(this).next().slideUp(1000, "easeInBounce");
              }
       }); // end click
   }); // end ready