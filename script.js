const intro = document.getElementById('intro')
const startBtn = document.getElementById('start-btn')
const submitBtn = document.getElementById('submit')
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
  quiz.style.display = "block";
  intro.style.display= "none";
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

submitBtn.addEventListener('click', () => {
  const answer = getSelected()
  
  if(answer) {
      if(answer === quizData[currentQuiz].correct) {
          score++
      }

      currentQuiz++

      if(currentQuiz < quizData.length) {
          loadQuiz()
      } else {
          quiz.innerHTML = `
              <h2>You answered ${score}/${quizData.length} questions correctly</h2>
              <button onclick="location.reload()">Reload</button>
          `
      }
  }
})


const quizData = [
  {
    question: "What is the HTML tag is used when writing JavaScript code?",
    a: "<javascript>",
    b: "<javaScript>",
    c: "<script>",
    d: "<js>",
    correct: "c",
  },
  {
    question: "JavaScript is a ________ Side Scripting Language.",
    a: "Server",
    b: "Browser",
    c: "Far",
    d: "ISP",
    correct: "b",
  },
  {
    question: "Which built-in method sorts the elements of an array?",
    a: "changeOrder(order)",
    b: "order()",
    c: "sort()",
    d: "array_sorter",
    correct: "c",
  },
  {
    question: "Which of the following function of Array object reverses the order of the elements of an array?",
    a: "reverse()",
    b: "push()",
    c: "reduce()",
    d: "reuseRecycle()",
    correct: "a",
  },
  {
    question: "Which of the following is not a reserved word in JavaScript?",
    a: "interface",
    b: "throws",
    c: "program",
    d: "short",
    correct: "c",
  },
];
