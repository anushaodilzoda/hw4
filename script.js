var startButton = document.getElementById('start-btn')
var nextButton = document.getElementById('next-btn')
var questionContainerElement = document.getElementById('question-container')
var questionElement = document.getElementById('question')
var answerButtonsElement = document.getElementById('answer-buttons')

var shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    var button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  var  selectedButton = e.target
  var correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

var questions = [
  {
    question: 'Who was the first president of the United States?',
    answers: [
      { text: 'Abraham Lincoln', correct: false },
      { text: 'James Monroe', correct: false },
      { text: 'George Washington', correct: true},
      { text: 'Thomas Jefferson', correct: false }
    ]
  },
  {
    question: 'When was the Declaration of Independence signed?',
    answers: [
      { text: '1670', correct: false },
      { text: '1776', correct: true },
      { text: '1870', correct: false },
      { text: '1920', correct: false }
    ]
  },
  {
    question: 'Who was the youngest president of the USA?',
    answers: [
      { text: 'Barack Obama', correct: false },
      { text: 'Theodore Roosevelt', correct: true },
      { text: 'Andrew Jackson', correct: false },
      { text: 'John Tyler', correct: false }
    ]
  },
  {
    question: 'What is the largest State in the USA?',
    answers: [
      { text: 'Texas', correct: false },
      { text: 'New York', correct: false },
      { text: 'California', correct: false },
      { text: 'Alaska', correct: true }

    ]
  }
]