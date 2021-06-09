//Set of questions and answers -DONE
//Give each answer an identifier -DONE
//Each identifier will increment through each question
//St the end the identifier with the highest number is the winner 
//Display the answer and rest the quiz

//pass results frm previous question to the next page usig localcache

//Randomise the background of the quiz for each questiion

//Possible - Personality Traits
// 15 -21- You Need Help
// 10 - 15 - Good Soul
// 5- 10 - Meh 
// 5 - Are You Even Real


let currentQuestion = 0;
let score = [];
let selectedAnswersData = [];
const totalQuestions =questions.length;

const container = document.querySelector('.quiz-container');
const questionEl = document.querySelector('.question');
const option1 = document.querySelector('.option1');
const option2 = document.querySelector('.option2');
const option3 = document.querySelector('.option3');
const option4 = document.querySelector('.option4');
const nextButton = document.querySelector('.next');
const previousButton = document.querySelector('.previous');
const restartButton = document.querySelector('.restart');
const result = document.querySelector('.result');

//Function to generate question 
function generateQuestions (index) {
    //Select each question by passing it a particular index
    const question = questions[index];
    const option1Total = questions[index].answer1Total;
    const option2Total = questions[index].answer2Total;
    const option3Total = questions[index].answer3Total;
    const option4Total = questions[index].answer4Total;
    //Populate html elements 
    questionEl.innerHTML = `${question.question}`
    option1.setAttribute('data-total', `${option1Total}`);
    option2.setAttribute('data-total', `${option2Total}`);
    option3.setAttribute('data-total', `${option3Total}`);
    option4.setAttribute('data-total', `${option4Total}`);
    option1.innerHTML = `${question.answer1}`
    option2.innerHTML = `${question.answer2}`
    option3.innerHTML = `${question.answer3}`
    option4.innerHTML = `${question.answer4}`
}

function modeString(array) {
  if (array.length == 0) return null;

  var modeMap = {},
    maxEl = array[0],
    maxCount = 1;

  for (var i = 0; i < array.length; i++) {
    var el = array[i];

    if (modeMap[el] == null) modeMap[el] = 1;
    else modeMap[el]++;

    if (modeMap[el] > maxCount) {
      maxEl = el;
      maxCount = modeMap[el];
    } else if (modeMap[el] == maxCount) {
      maxEl += " & " + el;
      maxCount = modeMap[el];
    }
  }
  return maxEl;
}

function loadNextQuestion () {
    const selectedOption = document.querySelector('input[type="radio"]:checked');
    //Check if there is a radio input checked
    if(!selectedOption) {
        alert('Please select your answer!');
        return;
    }
    //Get value of selected radio
    //const answerScore = Number(selectedOption.nextElementSibling.getAttribute('data-total'));
    var answerScore = String(selectedOption.nextElementSibling.getAttribute('data-total'));

    ////Add the answer score to the score array
    score.push(answerScore);

    selectedAnswersData.push()
    

    //const totalScore = score.reduce((total, currentNum) => total + currentNum);
    

    //Finally we incement the current question number ( to be used as the index for each array)
    currentQuestion++;

        //once finished clear checked
        selectedOption.checked = false;
    //If quiz is on the final question
    if(currentQuestion == totalQuestions - 1) {
        nextButton.textContent = 'Finish';
    }
    //If the quiz is finished then we hide the questions container and show the results 
    if(currentQuestion == totalQuestions) {
        container.style.display = 'none';
        var totalScore = modeString(score);
        if(totalScore == "X"){
           result.innerHTML =
         `<h1 class="final-score">You are Karl Marx</h1>
         <div class="summary">
            <p>You love to work, but not just any type of work, you love the skill and care it takes in making the final product. You prefer to get things done now rather than just postpone and procrastinate. This may lead to an uneven work-life balance, but it is through work where you feel at ease and comfort.</p>
            <a href="https://www.britannica.com/biography/Karl-Marx" target="_top">Click this to learn more about Karl Marx</a>
        </div>
        <button class="restart">Restart Quiz</button>
         `; 
            } else if(totalScore == "P"){
           result.innerHTML =
         `h1 class="final-score">You are Plato</h1>
         <div class="summary">
            <p>You focus on the abstract, on the ideals, rather than the tangible, and the realistic. You are perfectionist in nature, focusing on the details that make up the big picture. Order is very important to you, from the workflow process, to the hierarchy and status of people. You prefer to prioritize the creation of ideas, and let other execute them. You prefer to think rather than to work.</p>
            <a href="https://www.britannica.com/biography/Plato" target="_top">Click this to learn more about Plato</a>
        </div>
        <button class="restart">Restart Quiz</button>
         `; 
            }else if(totalScore == "I"){
           result.innerHTML =
         `<h1 class="final-score">You are Niccolo Machiavelli</h1>
         <div class="summary">
            <p>You are pragmatic when it comes to making choices. You strict only when you have to be, but at the same time you have a bit of a soft side. You always try to be on top, and are competitive in nature. You want your group to be the best, and constantly push your groupmates to do better. This can sometimes yield positive results, but can be a bit suffocating at times for others.</p>
            <a href="https://www.britannica.com/biography/Niccolo-Machiavelli" target="_top">Click this to learn more about Niccolo Machiavelli</a>
        </div>
        <button class="restart">Restart Quiz</button>
         `; 
            }else {
           result.innerHTML =
         `<h1 class="final-score">You are John Stuart Mill</h1>
         <div class="summary">
            <p>You like to keep your groupmates happy. You boost each other’s morale, and keep things positive for the rest of the journey. You find the joy in the things you do, may it be in the work you do, or the breaks you take. You aren’t hesitant to make decisions, because you solely rely on the pros and cons when given a choice.</p>
            <a href="https://www.britannica.com/biography/John-Stuart-Mill" target="_top">Click this to learn more about John Stuart Mill</a>
        </div>
        <button class="restart">Restart Quiz</button>
         `; 
            }
        
        return;
    }
    generateQuestions(currentQuestion);
}

//Function to load previous question
function loadPreviousQuestion() {
    //Decrement quentions index
    currentQuestion--;
    //remove last array value;
    score.pop();
    //Generate the question
    generateQuestions(currentQuestion);
}

//Fuction to reset and restart the quiz;
function restartQuiz(e) {
    if(e.target.matches('button')) {
    //reset array index and score
    currentQuestion = 0;
    score = [];
    //Reload quiz to the start
    location.reload();
    }

}


generateQuestions(currentQuestion);
nextButton.addEventListener('click', loadNextQuestion);
previousButton.addEventListener('click',loadPreviousQuestion);
result.addEventListener('click',restartQuiz);


