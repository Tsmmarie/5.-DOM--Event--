function button_hide() {
    const textDiv = document.getElementById("text");
    textDiv.style.display = "none"; // Hide the div
}

let score = 0; // Global score variable

// Function to show question and answers
function showQuestion(question, answers, correctAnswerIndex) {
    const questionElement = document.getElementById('question');
    if (questionElement) {
        questionElement.textContent = question; // Show the question text
    }

    const answerElements = document.querySelectorAll('.answer');
    answerElements.forEach((element, index) => {
        element.textContent = answers[index]; // Fill answer divs with options
        element.classList.remove('correct', 'incorrect'); // Remove old styles from previous answers
    });

    // No need to use window.correctAnswerIndex, just pass it directly in checkAnswer
}

// Function to check the selected answer
function checkAnswer(selectedElement) {
    const answerElements = document.querySelectorAll('.answer');
    const selectedAnswerIndex = Array.from(answerElements).indexOf(selectedElement); // Get the index of selected answer

    // Check if the selected answer is correct
    if (selectedAnswerIndex === correctAnswerIndex) {
        selectedElement.classList.add('correct'); // Apply correct style
        score++; // Increase score if the answer is correct
    } else {
        selectedElement.classList.add('incorrect'); // Apply incorrect style
    }

    updateScore(); // Update the score display
}

// Function to update the score display
function updateScore() {
    const scoreElement = document.getElementById('score');
    scoreElement.textContent = `Score: ${score}`; // Update the score text
}

// Initialize question and answers
const question = "What is the capital of Georgia?";
const answers = ["London", "Tbilisi", "Kutaisi", "Paris"];
const correctAnswerIndex = 1; // Correct answer is at index 1 (Tbilisi)

showQuestion(question, answers, correctAnswerIndex);
