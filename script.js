const intro = document.getElementById('intro')
const startBtn = document.getElementById('start-btn')
const quiz = document.getElementById('quiz')

const questionEl = document.getElementById('question')
const answerEls = document.querySelectorAll('.answer')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')


startBtn.addEventListener("click", startQuiz);

let currentQuiz = 0
let score = 0

// startQuiz()

function startQuiz() {
  deselectAnswers()
  const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}




const quizData = [
  {
    question: "?",
    a: "aaaa",
    b: "bbbb",
    c: "ccc",
    d: "dddd",
    correct: "a",
  },
  {
    question: "?",
    a: "",
    b: "",
    c: "",
    d: "",
    correct: "",
  },
  {
    question: "?",
    a: "",
    b: "",
    c: "",
    d: "",
    correct: "",
  },
  {
    question: "?",
    a: "",
    b: "",
    c: "",
    d: "",
    correct: "",
  },
  {
    question: "?",
    a: "",
    b: "",
    c: "",
    d: "",
    correct: "",
  },
];
