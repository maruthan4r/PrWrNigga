//Get verschiedene HTML-Elemente
const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const resultBoardElement = document.getElementById('result');
const againButtonElement = document.getElementById('again-btn');
const homeButtonElement = document.getElementById('home-btn');
const introductionElement = document.getElementById('einleit');
const correctTextElement = document.getElementById('correct')
const wrongTextElement = document.getElementById('wrong');

//Counter, der die Anzahl Versuche zählt
let attemptsCounter = 0;

//Counter, der die richtigen Antworten zählt
let correctQuestionCounter = 0;

//shuffledQuestions wird eine zufällige Frage sein, currentQuestionIndex ist der curIndex vom questions Arrays
let shuffledQuestions, currentQuestionIndex;

//Verschiedene EventListener für die Buttons
startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {

    resetText();

    //Entfernt wieder die Klasse "no-click" damit man die Buttons wieder anklicken kann
    document.getElementById('answer-buttons').classList.remove('no-click');

    currentQuestionIndex++;
    setNextQuestion();
});
againButtonElement.addEventListener('click', resetGame);
homeButtonElement.addEventListener('click', home)

//startGame startet das Spiel und wird durch den "Start" Button ausgelöst
function startGame(){

    //Erhöht die Anzahl Versuche
    attemptsCounter++;

    //Versteckt die Einleitung beim Start des Spiels
    introductionElement.classList.add('hidden');

    //Bei Spielstart wird der Counter auf 0 gesetzt
    correctQuestionCounter = 0;
    startButton.classList.add('hide');

    //Gibt eine zufällige Frage zurück und speichert sie in shuffledQuestions
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove('hide');
    questionElement.classList.remove('hide');
    setNextQuestion()
}

//Bereitet alles für das Anzeigen einer Frage vor
function setNextQuestion(){
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

//Entfernt alle Items im Container
function resetState(){

    //Versteckt den "Next" Button
    nextButton.classList.add('hide');

    //Entfernt Buttons aus dem Container, solange welche existieren
    while(answerButtonsElement.firstChild){
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

//Zeigt die Frage an der Website an
function showQuestion(question){

    //Ersetzt den default Text durch die Frage
    questionElement.innerText = question.question;

    //Erstellt so viele Buttons wie es Antworten gibt
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }

        //Erstellt für jeden Button einen EventListener falls er angeklickt wird
        button.addEventListener('click', selectAnswer);

        //Fügt jeden Button in den Container hinzu
        answerButtonsElement.appendChild(button);
    })
}

//Reagiert auf den EventListener eines Antwort-Buttons, Parameter "e" ist der angeklickte Button
function selectAnswer(e){

    //Verhindert das mehrmalige Anklicken einer Antwort
    document.getElementById('answer-buttons').classList.remove('no-click');

    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    /*
    Erstellt ein Array, da die Buttons vorher nicht in einem Array gespeichert werden 
    und führt für jeden Button die Funktion setStatusClass aus
    */
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })

    //Falls die Antwort richtig war wird der Counter erhöht und der dementsprechende Text wird angezeigt
    if(selectedButton.dataset = correct){
        correctQuestionCounter++;
        correctTextElement.classList.remove('hide');
    } else {
        wrongTextElement.classList.remove('hide');
    }

    //Kontrolliert ob noch Fragen übrig sind, falls nicht zeigt es das Resultat-Board an
    if(shuffledQuestions.length > currentQuestionIndex+1){
        nextButton.classList.remove('hide');
    } else {

        //Entfernt richtig oder falsch Text
        resetText();
        questionContainerElement.classList.add('hide');
        resultBoardElement.classList.remove('hide');
    }

    //Ersetzt den default Wert des Resultat-Boards durch Anzahl Fragen und Anzahl richtiger Fragen
    document.getElementById('total-attempts').innerHTML = attemptsCounter;
    document.getElementById('total-question').innerHTML = questions.length;
    document.getElementById('total-correct').innerHTML = correctQuestionCounter;

}

//Setzt für den Button den jeweiligen Status (Richtig oder Falsch)
function setStatusClass(element, correct){
    clearStatusClass(element);
    if(correct){
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');
    }
}

//Entfernt für den Button den jeweiligen Status (Richtig oder Falsch)
function clearStatusClass(element){
    element.classList.remove('correct');
    element.classList.remove('wrong');
}

//Wird durch den EventListener des Buttons "Try Again" ausgeführt und resettet das Quiz
function resetGame(){
    startButton.classList.remove('hide');
    introductionElement.classList.remove('hidden');
    resultBoardElement.classList.add('hide');

    //Da bei der letzten Frage kein Next-Button erscheint muss man die Buttons hier nochmals resetten
    document.getElementById('answer-buttons').classList.remove('no-click');
}

//Wird durch den Eventlistener des Buttons "Go To Home" ausgeführt und führt den User zum File "index.html"
function home(){
    location.href = "index.html";
}

//Entfernt den Richtig oder Falsch Text auf dem Bildschirm
function resetText(){
    correctTextElement.classList.add('hide');
    wrongTextElement.classList.add('hide');
}

//Array von Fragen mit den jeweiligen Antworten
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