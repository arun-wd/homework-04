var quiz = document.getElementById('quiz');
var results = document.getElementById('results');
var submit = document.getElementById('submit');

var myQuestions = [
	{
		question: "Commonly used data types DO NOT include:",
		answers: {
			a: 'strings',
			b: 'booleans',
            c: 'alerts',
            d: 'numbers'
		},
		correctAnswer: 'c'
	},
	{
		question: "What does CSS stand for?",
		answers: {
			a: 'Computer Style Sheets',
			b: 'Creative Style Sheets',
            c: 'Colorful Style Sheets',
            d: 'Cascading Style Sheets'
		},
		correctAnswer: 'd'
    },
    {
		question: "Which HTML attribute is used to define inline styles?",
		answers: {
			a: 'class',
			b: 'font',
            c: 'styles',
            d: 'style'
		},
		correctAnswer: 'd'
    },
    {
		question: "Which CSS property is used to change the text color of an element?",
		answers: {
			a: 'text-color',
			b: 'color',
            c: 'fgcolor',
            d: 'font-color'
		},
		correctAnswer: 'b'
    },
    {
		question: "Which CSS property controls the text size?",
		answers: {
			a: 'font-style',
			b: 'text-style',
            c: 'text-size',
            d: 'font-size'
		},
		correctAnswer: 'd'
	}
];





function makeQuiz(questions, quiz, results, submit){

	function getQuestions(questions, quiz){
		var output = [];
	    var answers;

        for(var i=0; i<questions.length; i++){
            
            answers = [];

            for(letter in questions[i].answers){

                answers.push(
                    '<label>'
                        + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                        + letter + ': '
                        + questions[i].answers[letter]
                    + '</label>'
                );
            };

            output.push(
                '<div class="question">' + questions[i].question + '</div>'
                + '<div class="answers">' + answers.join('') + '</div>'
            );
        };

        quiz.innerHTML = output.join('');
    
	}

	function getResults(questions, quiz, results){
		var answerContainers = quiz.querySelectorAll('.answers');
	
        var userAnswer = '';
        var numCorrect = 0;
        
        for(var i=0; i<questions.length; i++){

            userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
            
            if(userAnswer===questions[i].correctAnswer){
                numCorrect++;
            }
        }

        results.innerHTML = numCorrect + ' out of ' + questions.length;
    }
    

	getQuestions(questions, quiz);

	submit.onclick = function(){
		getResults(questions, quiz, results);
	};
};
makeQuiz(myQuestions, quiz, results, submit);

function timer(){
    var sec = 75;
    var timer = setInterval(function(){
        document.getElementById('timerDisplay').innerHTML='00:'+sec;
        sec--;
        if (sec < 0) {
			clearInterval(timer);
			alert("Time is up!");
        }
    }, 1000);
}

timer();