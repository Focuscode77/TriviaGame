
// Global  Variables 
var count = 10;
var currentQuestion = 0;
var score = 0;
var lose = 0;
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


        function newQuestion() {
            var isQuestionOver = (questionArr.length - 1)

            if (isQuestionOver === currentQuestion) {
                console.log("Game over")
                displayResult()
            } else {

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
            if (count === 0) {

                //  Alert the user that time is up.
                timeUp();
            }
            //  Show the number in the #show-number tag.
            $("#show-number").html("<h3>" + "Time Reamining:" + "" + count + "</h3>");


        };


        function timeUp() {
            //  to the clearInterval function.
            clearInterval(intervalId);
            lose++;
            newQuestion();
        }


        // Function for questions
        function startQuestion() {
            var question = questionArr[currentQuestion].question;
            var choices = questionArr[currentQuestion].choices;
            // Check debug
            console.log(question)
            console.log(choices)


            count = 10;
            intervalId = setInterval(decrement, 1000);

            $("#game").html(`<h4> ${question} </h4> ${loadChoices(choices)}`)

            // $("#answer").html('<p>' + choices + '</p>'

        };

        // Function for choices(and timer)
        function loadChoices(choices) {
            var result = '';
            for (let i = 0; i < choices.length; i++) {

                result += `<p class="choice" data-answer="${choices[i]}">${choices[i]} </p>`;
                // Check Debug
                console.log(result)

            }
            return result;

        };

        // Go to next question rather right or wrong
        $(document).on('click', '.choice', function () {
            clearInterval(intervalId);
            const selectedAnswer = $(this).attr('data-answer');
            var rightAnswer = questionArr[currentQuestion].correctAnswer;
            if (rightAnswer === selectedAnswer) {
                // User win
                score++;
                newQuestion();
                console.log("Win");

            } else {
                lose++;
                newQuestion();
                console.log("loss");
            }

            console.log('period', selectedAnswer);

        });

        // display
        function displayResult() {
            const result = `
              <p> You got ${score} question right! </p>
              <p> You missed ${lose} questions! </p>
              <p> Total questions ${questionArr.length}! </p>
                 <button class="btn btn-primary" id = reset> Reset Game </button>
            `;

            $('#game').html(result);
        }

        startQuestion();

        // If Statements
    });




});

