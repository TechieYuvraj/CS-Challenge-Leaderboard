// Sample data
let currentQuestion = {
    question: "What is the most common type of phishing attack?",
    answer: "Email phishing",
    explanation: "Email phishing is the most common type, where attackers send fraudulent emails to trick users."
};

let leaderboard = [
    { name: "Alice", score: 25 },
    { name: "Bob", score: 22 },
    { name: "Charlie", score: 20 }
];

// DOM Elements
const questionContainer = document.getElementById('question-container');
const answerForm = document.getElementById('answer-form');
const answerInput = document.getElementById('answer-input');
const resultMessage = document.getElementById('result-message');
const showLeaderboardBtn = document.getElementById('show-leaderboard');
const leaderboardSection = document.getElementById('leaderboard-section');
const leaderboardContainer = document.getElementById('leaderboard-container');
const adminControls = document.getElementById('admin-controls');
const addWinnerInput = document.getElementById('add-winner');
const addWinnerBtn = document.getElementById('add-winner-btn');
const removeWinnerBtn = document.getElementById('remove-winner-btn');

// Initialize page
function init() {
    displayQuestion();
    displayLeaderboard();
    setupEventListeners();
}

// Display current question
function displayQuestion() {
    questionContainer.innerHTML = `
        <p><strong>Question:</strong> ${currentQuestion.question}</p>
        <p class="hidden" id="correct-answer"><strong>Correct Answer:</strong> ${currentQuestion.answer}</p>
        <p class="hidden" id="explanation"><strong>Explanation:</strong> ${currentQuestion.explanation}</p>
    `;
}

// Handle form submission
function handleFormSubmit(e) {
    e.preventDefault();
    const userAnswer = answerInput.value.trim();
    
    if (userAnswer.toLowerCase() === currentQuestion.answer.toLowerCase()) {
        resultMessage.textContent = "Correct! 🎉";
        resultMessage.style.color = "#238636";
    } else {
        resultMessage.textContent = "Incorrect. Try again!";
        resultMessage.style.color = "#f85149";
    }
    
    document.getElementById('correct-answer').classList.remove('hidden');
    document.getElementById('explanation').classList.remove('hidden');
    answerInput.value = '';
}

// Display leaderboard
function displayLeaderboard() {
    leaderboardContainer.innerHTML = leaderboard
        .map((user, index) => `
            <div class="leaderboard-item">
                <span class="position">${index + 1}</span>
                <span class="name">${user.name}</span>
                <span class="score">${user.score} points</span>
            </div>
        `)
        .join('');
}

// Toggle leaderboard visibility
function toggleLeaderboard() {
    leaderboardSection.classList.toggle('hidden');
    showLeaderboardBtn.textContent = leaderboardSection.classList.contains('hidden') ? 
        "View Leaderboard" : "Hide Leaderboard";
}

// Add winner to leaderboard
function addWinner() {
    const winnerName = addWinnerInput.value.trim();
    if (winnerName) {
        leaderboard.push({ name: winnerName, score: 0 });
        displayLeaderboard();
        addWinnerInput.value = '';
    }
}

// Remove last winner from leaderboard
function removeLastWinner() {
    if (leaderboard.length > 0) {
        leaderboard.pop();
        displayLeaderboard();
    }
}

// Setup event listeners
function setupEventListeners() {
    answerForm.addEventListener('submit', handleFormSubmit);
    showLeaderboardBtn.addEventListener('click', toggleLeaderboard);
    addWinnerBtn.addEventListener('click', addWinner);
    removeWinnerBtn.addEventListener('click', removeLastWinner);
    
    // Show admin controls on triple click
    let clickCount = 0;
    document.addEventListener('click', () => {
        clickCount++;
        if (clickCount === 3) {
            adminControls.classList.remove('hidden');
            clickCount = 0;
        }
    });
}

// Initialize the app
init();
