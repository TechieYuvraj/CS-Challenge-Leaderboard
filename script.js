// Initialize Firebase
let db;
let auth;
let currentUser = null;

// Initialize Firebase when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    import('https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js')
    .then(() => import('https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js'))
    .then(() => import('https://www.gstatic.com/firebasejs/11.3.1/firebase-firestore.js'))
    .then(() => {
        const firebaseConfig = {
            apiKey: "AIzaSyC-GTspIThGlYbuE0zoLST3b9No2tkLwmw",
            authDomain: "cs-challenge-leaderboard.firebaseapp.com",
            projectId: "cs-challenge-leaderboard",
            storageBucket: "cs-challenge-leaderboard.appspot.com",
            messagingSenderId: "955629714923",
            appId: "1:955629714923:web:435d1982eb6042d12a2dae",
            measurementId: "G-B9ZZG440B6"
        };
        
        const app = firebase.initializeApp(firebaseConfig);
        auth = firebase.auth();
        db = firebase.firestore();
        init();
    });
});

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
    // Check auth state
    auth.onAuthStateChanged(user => {
        currentUser = user;
        if (user) {
            // User is signed in
            document.getElementById('login-form').classList.add('hidden');
            document.getElementById('admin-panel').classList.remove('hidden');
        } else {
            // No user is signed in
            document.getElementById('login-form').classList.remove('hidden');
            document.getElementById('admin-panel').classList.add('hidden');
        }
    });

    // Load data
    loadLeaderboard();
    loadPastQuestions();
    displayPastWinners();
    setupEventListeners();
}

// Load leaderboard from Firestore
async function loadLeaderboard() {
    const snapshot = await db.collection('leaderboard').orderBy('score', 'desc').get();
    leaderboard = snapshot.docs.map(doc => doc.data());
    displayLeaderboard();
}

// Load past questions from Firestore
async function loadPastQuestions() {
    const snapshot = await db.collection('questions').orderBy('day', 'desc').get();
    pastQuestions = snapshot.docs.map(doc => doc.data());
    displayPastQuestions();
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
    // Admin login
    document.getElementById('login-btn').addEventListener('click', async () => {
        const email = document.getElementById('admin-email').value;
        const password = document.getElementById('admin-password').value;
        try {
            await auth.signInWithEmailAndPassword(email, password);
        } catch (error) {
            alert('Login failed: ' + error.message);
        }
    });

    // Add question
    document.getElementById('add-question-btn').addEventListener('click', async () => {
        const question = document.getElementById('new-question').value;
        const answer = document.getElementById('correct-answer').value;
        if (question && answer) {
            try {
                await db.collection('questions').add({
                    day: pastQuestions.length + 1,
                    question: question,
                    answer: answer,
                    timestamp: firebase.firestore.FieldValue.serverTimestamp()
                });
                loadPastQuestions();
                document.getElementById('new-question').value = '';
                document.getElementById('correct-answer').value = '';
            } catch (error) {
                alert('Error adding question: ' + error.message);
            }
        }
    });

    // Add winner
    document.getElementById('add-winner-btn').addEventListener('click', async () => {
        const winnerName = document.getElementById('winner-name').value;
        if (winnerName) {
            try {
                await db.collection('leaderboard').add({
                    name: winnerName,
                    score: 0,
                    timestamp: firebase.firestore.FieldValue.serverTimestamp()
                });
                loadLeaderboard();
                document.getElementById('winner-name').value = '';
            } catch (error) {
                alert('Error adding winner: ' + error.message);
            }
        }
    });

    // Navigation events
    navLeaderboard.addEventListener('click', () => switchSection(leaderboardSection));
    navPastQuestions.addEventListener('click', () => switchSection(pastQuestionsSection));
    navPastWinners.addEventListener('click', () => switchSection(pastWinnersSection));
    navAdmin.addEventListener('click', () => switchSection(adminSection));
}

// Initialize the app
init();
