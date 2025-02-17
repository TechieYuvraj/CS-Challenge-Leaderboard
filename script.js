let leaderboard = [
    { name: "Alice", score: 25 },
    { name: "Bob", score: 22 },
    { name: "Charlie", score: 20 }
];

// DOM Elements
const leaderboardSection = document.getElementById('leaderboard-section');
const pastQuestionsSection = document.getElementById('past-questions-section');
const pastWinnersSection = document.getElementById('past-winners-section');
const navLeaderboard = document.getElementById('nav-leaderboard');
const navPastQuestions = document.getElementById('nav-past-questions');
const navPastWinners = document.getElementById('nav-past-winners');
const leaderboardContainer = document.getElementById('leaderboard-container');
const adminControls = document.getElementById('admin-controls');
const addWinnerInput = document.getElementById('add-winner');
const addWinnerBtn = document.getElementById('add-winner-btn');
const removeWinnerBtn = document.getElementById('remove-winner-btn');

// Initialize page
function init() {
    displayLeaderboard();
    displayPastQuestions();
    displayPastWinners();
    setupEventListeners();
}

// Display past questions
function displayPastQuestions() {
    const questionsHTML = pastQuestions.map(q => `
        <div class="question-item">
            <h3>Day ${q.day}</h3>
            <p><strong>Question:</strong> ${q.question}</p>
            <p><strong>Answer:</strong> ${q.answer}</p>
            <p><strong>Winners:</strong> ${q.winners.join(', ')}</p>
        </div>
    `).join('');
    document.getElementById('past-questions-container').innerHTML = questionsHTML;
}

// Display past winners
function displayPastWinners() {
    const winners = {};
    pastQuestions.forEach(q => {
        q.winners.forEach(winner => {
            if (!winners[winner]) winners[winner] = 0;
            winners[winner]++;
        });
    });

    const winnersHTML = Object.entries(winners)
        .sort((a, b) => b[1] - a[1])
        .map(([name, wins]) => `
            <div class="winner-item">
                <span class="winner-name">${name}</span>
                <span class="wins-count">${wins} wins</span>
            </div>
        `).join('');
    document.getElementById('past-winners-container').innerHTML = winnersHTML;
}

// Switch between sections
function switchSection(sectionToShow) {
    document.querySelectorAll('main section').forEach(section => {
        section.classList.add('hidden');
    });
    sectionToShow.classList.remove('hidden');
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
    addWinnerBtn.addEventListener('click', addWinner);
    removeWinnerBtn.addEventListener('click', removeLastWinner);
    
    // Navigation events
    navLeaderboard.addEventListener('click', () => switchSection(leaderboardSection));
    navPastQuestions.addEventListener('click', () => switchSection(pastQuestionsSection));
    navPastWinners.addEventListener('click', () => switchSection(pastWinnersSection));
    
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
