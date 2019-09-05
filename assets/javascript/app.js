
// Global  Variables 
var count = 10;
//  Variable that will hold our interval ID when we execute
//  the "run" function
var intervalId;
// Arrays
var questionArr = ["from which part of a pig do we get ham?", "what is a bratwurst?", "cheery,plum and grape are all variety of which fruit?"]






// Click FUNCTIONS
$(document).ready(function () {

    // Hide and Show on click
    $("#img").hide();
    $("#Start").on("click", function () {
        $("#img").show();
        $("#Start").hide();

        // Timer
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);

        //  The decrement function.
        function decrement() {

            //  Decrease number by one.
            count--;
            // Log/Debugger
            console.log(count)
            //  Show the number in the #show-number tag.
            $("#show-number").html("<h2>" + count + "</h2>");
            if (count === 0) {

                //  ...run the stop function.
                stop();
        
                //  Alert the user that time is up.
                alert("Time Up!");
              }

            // Loop for questions
            
        };
        function stop() {

            //  Clears our intervalId
            //  We just pass the name of the interval
            //  to the clearInterval function.
            clearInterval(intervalId);
          }
       
          for(i=0; i<questionArr.length; i++){
            questionArr[i];
        



        }


    });







    // If Statements
});









