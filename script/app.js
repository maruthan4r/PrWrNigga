const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const resultBoardElement = document.getElementById('result');
const againButtonElement = document.getElementById('again-btn');
const homeButtonElement = document.getElementById('home-btn');
let correctQuestionCounter = 0;

let shuffledQuestions, currentQuestionIndex;

startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    setNextQuestion();
});
againButtonElement.addEventListener('click', resetGame);
homeButtonElement.addEventListener('click', home)

function startGame(){
    correctQuestionCounter = 0;
    console.log('Started');
    startButton.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove('hide');
    questionElement.classList.remove('hide');
    setNextQuestion()
}

function setNextQuestion(){
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}


function showQuestion(question){
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    })
}

function resetState(){
    nextButton.classList.add('hide');
    while(answerButtonsElement.firstChild){
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(e){
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    
    if(shuffledQuestions.length > currentQuestionIndex+1){
        nextButton.classList.remove('hide');
    } else {
        questionContainerElement.classList.add('hide');
        resultBoardElement.classList.remove('hide');
    }

    if(selectedButton.dataset = correct){
        correctQuestionCounter++;
    }
    document.getElementById('total-question').innerHTML = questions.length;
    document.getElementById('total-correct').innerHTML = correctQuestionCounter;
}

function setStatusClass(element, correct){
    clearStatusClass(element);
    if(correct){
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');
    }
}

function clearStatusClass(element){
    element.classList.remove('correct');
    element.classList.remove('wrong');
}

function resetGame(){
    startButton.classList.remove('hide');
    resultBoardElement.classList.add('hide');
}

function home(){
    location.href = "index.html";
}

const questions = [
    {
        question: "Ist Patrick fett?",
        answers: [
            { text: 'Ja', correct: true },
            { text: 'Nein', correct: false }
        ]
    },
    {
        question: "Ist das Quiz gut?",
        answers: [
            { text: 'Ja', correct: true },
            { text: 'Nein', correct: false }
        ]
    }
]