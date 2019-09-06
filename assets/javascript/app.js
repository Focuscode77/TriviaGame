
// Global  Variables 
var count = 10;
var currentQuestion = 0;
var score = 0;
var lost = 0;
var result = '';
//  Variable that will hold our interval ID when we execute
//  the "run" function
var intervalId;
// questions array/object
var questionArr = [

    {
        question: "from which part of a pig do we get ham?",

        choices: ["belly", "sparerib", "the hind leg"],

        corretAnswer: "the hind leg"

    },


    {
        question: "what is a bratwurst?",

        choices: ["beef stomach", "liver", "a type of german sausage"],

        correctAnswer: "a type of german sausage"

    },

    {
        question: "cheery,plum and grape are all variety of which fruit?",

        choices: ["mango", "strawberry", "tomato"],

        correctAnswer: "tomato"

    }

];


// Click FUNCTIONS
$(document).ready(function () {

    // Hide and Show on click
    $("#img").hide();
    $("#Start").on("click", function () {
        $("#img").show();
        $("#Start").hide();


        function newQuestion (){
         var isQuestionOver = (questionArr.length -1)
           
         if(isQuestionOver === currentQuestion){
             console.log("Game over")
            }else{

                currentQuestion++;
                startQuestion()
            }


        }

        //  The decrement function.
        function decrement() {
            //  Decrease number by one.
            count--;
            // Log/Debugger
            console.log(count)
            //  Show the number in the #show-number tag.
            $("#show-number").html("<h3>" + "Time Reamining:" + "" + count + "</h3>");
            if (count === 0) {
                //  ...run the stop function.
                
                //  Alert the user that time is up.
                timeUp();
            }

        };
        function timeUp() {
            //  to the clearInterval function.
            clearInterval(intervalId);
            lost++;
            newQuestion();
        }
        // Function for questions
        function startQuestion() {

            var question = questionArr[currentQuestion].question;
            var choices = questionArr[currentQuestion].choices;
            // Check debug
            console.log(question)
            console.log(choices)
            $("#game").html(`<h4> ${question} </h4> ${loadChoices(choices)}`)
     
            // $("#answer").html('<p>' + choices + '</p>'

        };

        // Function for choices(and timer)
        function loadChoices(choices) {
            count = 10;
         intervalId = setInterval(decrement, 1000);
          var result = '';
            for (let i = 0; i < choices.length; i++) {

                result += `<p class="choice" data-answer="${choices[i]}">${choices[i]} </p>`;
// Check Debug
               console.log(result)

            }
            return result;

        };
        

        startQuestion();

        // If Statements
    });




});

