const answerCounter = {
    correct: 0,
    total: 0
}

window.onload = function () {
    //const firstQuestions = document.getElementById("first-quest").children;
    let randomOrder = ["1", "2", "3", "4"];
    shuffle(randomOrder);
    //Hide feedback
    let feedbackText = document.getElementsByClassName("answer-feedback");
    for (let i = 0; i < feedbackText.length; i++) {
        feedbackText[i].style.visibility = "hidden";
    }
    console.log(answerCounter.correct);
}

function clickEvent() {
    let questionCounter = document.getElementsByClassName("question").length
    if (answerCounter.total == 0) {
        answerCounter.total = questionCounter;
    }
    for (let i = 0; i < questionCounter; i++) {
        let elementName = "name" + (i + 1);
        let answer = document.getElementById("quest-" + (i + 1)).elements[elementName].value;
        validateAnswer(answer, (i + 1));
    }
    alert("You have " + answerCounter.correct + " correct answers from " +
        answerCounter.total + " total answers.");
}

function validateAnswer(answerName, answerNumber) {
    let feedback = document.getElementById("feedback-" + answerNumber);
    if (answerName == "") {
        alert("Please fill the form");
        console.log("Not completed");
        feedback.style.visibility = "visible";
        feedback.style.color = "red";
        feedback.innerHTML = "Falta responder esta pregunta";
    } else if (answerName == "false") {
        console.log("Wrong answer");
        feedback.style.visibility = "visible";
        feedback.style.color = "red";
        feedback.innerHTML = "Respuesta Incorrecta";
    } else if (answerName == "true") {
        console.log("Rigth answer");
        feedback.style.visibility = "visible";
        feedback.style.color = "green";
        feedback.innerHTML = "Respuesta Correcta";
        answerCounter.correct = answerCounter.correct + 1;
    }
}

function shuffleAnswers(answerElements, numberOrder) {
    console.log("Trying");
    for (let index = 0; index < answerElements.length; index++) {
        answerElements[index].style.order = numberOrder;
    }
}

function shuffle(array) {
    let counter = array.length;

    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        let index = Math.floor(Math.random() * counter);

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        let temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }

    return array;
}