const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', ()=>{
    currentQuestionIndex++
    setNextQuestion()
})

const questionContainerElement = document.getElementById("question-container")
const questionElement = document.getElementById('question')
const answerButtonElement = document.getElementById('answer-buttons')

let shuffledQuestions,  currentQuestionIndex

function startGame(){
    startButton.classList.add('hide');
    shuffledQuestions = questions.sort(()=>Math.random()-0.5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion(){
    resetState()
   showQuestion(shuffledQuestions[currentQuestionIndex ])  
}
function showQuestion(question){
       questionElement.innerText = question.question
      question.answers.forEach(answer => {
        const button = document.createElement('button')
         button.innerText = answer.text
          button.classList.add("btn")
        if (answer.correct){
            button.dataset.correct = answer.correct
          }
         button.addEventListener('click', selectAnswer)
          answerButtonElement.appendChild(button)
      });
}
function resetState(){
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while(answerButtonElement.firstChild){
        answerButtonElement.removeChild(answerButtonElement.firstChild)
    }
}

function selectAnswer(e){
    const selectedButtton = e.target
    const correct = selectedButtton.dataset.correct
    setStatusClass(document.body,correct)
    Array.from(answerButtonElement.children).forEach(button =>{ 
        setStatusClass(button,button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'restart'
        startButton.classList.remove('hide')
    }
   
}


function setStatusClass(element,correct ){
    clearStatusClass(element)
    if(correct){
        element.classList.add('correct')
    }else{
        element.classList.add('wrong')
    }
}

function clearStatusClass(element){
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [
    {
        question :'what is 2 + 2 ?',
        answers:[
            {text:'4',correct:true},
            {text:'22',correct:false}
        ]
    },
    {
        question :'what is the best game ?',
        answers:[
            {text:'sudoku',correct:false},
            {text:'ludo',correct:false},
            {text:'inono',correct:false},
            {text:'footbal',correct:true}
        ]
    },
    {
        question :'is web development fun ?',
        answers:[
            {text:'idk',correct:false},
            {text:'yes',correct:true},
            {text:'lic',correct:false},
            {text:'no',correct:false}
        ]
    }, {
        question :'which of this is an outdoor spor† ?',
        answers:[
            {text:'sudoku',correct:false},
            {text:'ludo',correct:false},
            {text:'footbal',correct:true},
            {text:'inono',correct:false}
        ]
    },
]