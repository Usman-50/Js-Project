let question = document.querySelector(".question")

let option = document.querySelector(".option-element")

let correctOption = document.querySelector(".correct-option")

let submit = document.querySelector(".submit")

let index = 0

let questionBank = [
    {
        question: "Which car company manufactures the famous 'Mustang' model?",
        option: ["Chevrolet","Dodge","Ford","Toyota"],
        correctOption: "Ford"
    },
    {
        question: "What is widely considered to be the first commercially produced automobile in the world?",
        option: ["Ford Model T","Benz Patent-Motorwagen","Oldsmobile Curved Dash","Rolls-Royce Silver Ghost"],
        correctOption: "Benz Patent-Motorwagen"
    },
    {
        question: "Which country is the home of the luxury supercar brand Ferrari?",
        option: ["Germany","France","United Kingdom","Italy"],
        correctOption: "Italy"
    },
    {
        question: "What is the best-selling car model of all time worldwide?",
        option: ["Volkswagen Beetle","Toyota Corolla","Honda Civic","Ford F-Series"],
        correctOption: "Toyota Corolla"
    },
    {
        question: "What do the four interlocking rings in the Audi logo represent?",
        option: ["Four seasons of the year","Four driving wheels (All-Wheel Drive)","Four original merging car companies","Four major racing tracks in Germany"],
        correctOption: "Four original merging car companies"
    }
]

function displayQuestion(index) {
    let currentQuestion = questionBank[index]
    question.innerText = currentQuestion.question
    option.innerHTML = ""
    currentQuestion.option.forEach((optionDisplay) => {
        option.innerHTML += `<button class="option">${optionDisplay}</button>`
    });
    // correctOption.innerText = currentQuestion.correctOption
    
}
displayQuestion(index)
option.addEventListener("click" , (e) =>{
    if (e.target.classList.contains("option")) {
        let selectedOption = e.target.innerText
        console.log(selectedOption)
        let correctAnswer = questionBank[index].correctOption
        console.log(correctOption)
        if (selectedOption === correctOption) {
            correctOption.innerText = "correct"
        }
        else {
            correctOption.innerText = "incorrect"
        }
    }
})
submit.addEventListener("click" , () =>{
    index++
    displayQuestion(index)
})