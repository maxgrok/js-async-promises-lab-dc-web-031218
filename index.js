const questions = [
  {questionText: "Lightning never strikes in the same place twice", answer: false},
  {questionText: "Humans can distinguish between over one trillion different smells", answer: true},
  {questionText: "Goldfish only have a memory of about three seconds", answer: false}
]

let question;

let questionContainer = document.querySelector('.question-container')

function appendQuestion(){
	let q = document.createElement('p')
	q.innerText = questions[0].questionText
	questionContainer.appendChild(q)
}

function askQuestionThen(time){
	
}