let leaderboard = [
    { name: "Alice", score: 25 },
    { name: "Bob", score: 22 },
    { name: "Charlie", score: 20 }
];

// DOM Elements
const leaderboardSection = document.getElementById('leaderboard-section');
const leaderboardContainer = document.getElementById('leaderboard-container');
const adminControls = document.getElementById('admin-controls');
const addWinnerInput = document.getElementById('add-winner');
const addWinnerBtn = document.getElementById('add-winner-btn');
const removeWinnerBtn = document.getElementById('remove-winner-btn');

// Initialize page
function init() {
    displayLeaderboard();
    setupEventListeners();
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
