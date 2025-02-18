// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyC-GTspIThGlYbuE0zoLST3b9No2tkLwmw",
    authDomain: "cs-challenge-leaderboard.firebaseapp.com",
    projectId: "cs-challenge-leaderboard",
    storageBucket: "cs-challenge-leaderboard.appspot.com",
    messagingSenderId: "955629714923",
    appId: "1:955629714923:web:435d1982eb6042d12a2dae",
    measurementId: "G-B9ZZG440B6"
};

// Initialize Firebase
let db;
let auth;
let currentUser = null;
let currentDay = 1;
let leaderboard = [];
let pastQuestions = [];

async function initializeFirebase() {
    try {
        const { initializeApp } = await import('https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js');
        const { getAuth } = await import('https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js');
        const { getFirestore } = await import('https://www.gstatic.com/firebasejs/11.3.1/firebase-firestore.js');
        
        const app = initializeApp(firebaseConfig);
        auth = getAuth(app);
        db = getFirestore(app);
        init();
    } catch (error) {
        console.error('Firebase initialization failed:', error);
        showError('Failed to initialize Firebase. Please try again later.');
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeFirebase);

// Generate day navigation
function generateDayNavigation(totalDays) {
    const dayNav = document.getElementById('day-navigation');
    dayNav.innerHTML = '';
    for (let day = 1; day <= totalDays; day++) {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = '#';
        a.textContent = day;
        a.addEventListener('click', () => showDayDetails(day));
        li.appendChild(a);
        dayNav.appendChild(li);
    }
}

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

    // Load data with loading states
    showLoading('leaderboard-container');
    showLoading('past-questions-container');
    
    Promise.all([
        loadLeaderboard(),
        loadPastQuestions()
    ])
    .then(() => {
        setupDayNavigation();
        showCurrentDay();
        setupEventListeners();
    })
    .catch(error => {
        console.error('Initialization error:', error);
        showError('Failed to load data. Please try again later.');
    });
}

// Show loading state
function showLoading(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.innerHTML = '<div class="loading">Loading...</div>';
    }
}

// Show error message
function showError(message) {
    const errorContainer = document.getElementById('error-container');
    if (errorContainer) {
        errorContainer.textContent = message;
        errorContainer.classList.remove('hidden');
    }
}

// Show current day's question and leaderboard
function showCurrentDay() {
    if (pastQuestions.length > 0) {
        const currentQuestion = pastQuestions[pastQuestions.length - 1];
        document.getElementById('today-question-container').innerHTML = `
            <h3>Day ${currentQuestion.day}</h3>
            <p><strong>Question:</strong> ${currentQuestion.question}</p>
            <p><strong>Answer:</strong> ${currentQuestion.answer}</p>
        `;
    }
}

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

    // Load data and setup navigation
    loadAllData().then(() => {
        setupDayNavigation();
        setupEventListeners();
        showCurrentDay();
    });
}

// Load all necessary data
async function loadAllData() {
    await Promise.all([
        loadLeaderboard(),
        loadPastQuestions()
    ]);
}

// Setup day navigation
function setupDayNavigation() {
    const nav = document.getElementById('day-navigation');
    nav.innerHTML = pastQuestions.map(q => `
        <li><a href="#" data-day="${q.day}">${q.day}</a></li>
    `).join('');
}

// Show current day's question
function showCurrentDay() {
    const currentDay = pastQuestions.length;
    const todayQuestion = pastQuestions[currentDay - 1];
    
    document.getElementById('today-question-container').innerHTML = `
        <h3>Day ${todayQuestion.day}</h3>
        <p>${todayQuestion.question}</p>
    `;
}

// Show specific day's details
function showDayDetails(day) {
    const dayData = pastQuestions.find(q => q.day === day);
    if (dayData) {
        document.getElementById('day-number').textContent = day;
        document.getElementById('day-question-container').innerHTML = `
            <h3>Question</h3>
            <p>${dayData.question}</p>
            <h3>Answer</h3>
            <p>${dayData.answer}</p>
        `;
        document.getElementById('day-winners-container').innerHTML = `
            <h3>Winners</h3>
            <ul>
                ${dayData.winners.map(winner => `<li>${winner}</li>`).join('')}
            </ul>
        `;
        document.getElementById('day-details').classList.remove('hidden');
    }
}
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

    // Load data and setup navigation
    loadAllData().then(() => {
        setupDayNavigation();
        setupEventListeners();
        showCurrentDay();
    });
}

// Load all necessary data
async function loadAllData() {
    await Promise.all([
        loadLeaderboard(),
        loadPastQuestions()
    ]);
}

// Setup day navigation
function setupDayNavigation() {
    const nav = document.getElementById('day-navigation');
    nav.innerHTML = pastQuestions.map(q => `
        <li><a href="#" data-day="${q.day}">${q.day}</a></li>
    `).join('');
}

// Show current day's question
function showCurrentDay() {
    const currentDay = pastQuestions.length;
    const todayQuestion = pastQuestions[currentDay - 1];
    
    document.getElementById('today-question-container').innerHTML = `
        <h3>Day ${todayQuestion.day}</h3>
        <p>${todayQuestion.question}</p>
    `;
}

// Show specific day's details
function showDayDetails(day) {
    const dayData = pastQuestions.find(q => q.day === day);
    if (dayData) {
        document.getElementById('day-number').textContent = day;
        document.getElementById('day-question-container').innerHTML = `
            <h3>Question</h3>
            <p>${dayData.question}</p>
            <h3>Answer</h3>
            <p>${dayData.answer}</p>
        `;
        document.getElementById('day-winners-container').innerHTML = `
            <h3>Winners</h3>
            <ul>
                ${dayData.winners.map(winner => `<li>${winner}</li>`).join('')}
            </ul>
        `;
        document.getElementById('day-details').classList.remove('hidden');
    }

// Load leaderboard from Firestore
async function loadLeaderboard() {
    try {
        const snapshot = await db.collection('leaderboard')
            .orderBy('score', 'desc')
            .get();
            
        leaderboard = snapshot.docs.map(doc => doc.data());
        displayLeaderboard();
    } catch (error) {
        console.error('Error loading leaderboard:', error);
        showError('Failed to load leaderboard. Please try again later.');
    }
}

// Load past questions from Firestore
async function loadPastQuestions() {
    try {
        const snapshot = await db.collection('questions')
            .orderBy('day', 'desc')
            .get();
            
        pastQuestions = snapshot.docs.map(doc => doc.data());
        displayPastQuestions();
    } catch (error) {
        console.error('Error loading past questions:', error);
        showError('Failed to load past questions. Please try again later.');
    }
}

// Display leaderboard
function displayLeaderboard() {
    const container = document.getElementById('leaderboard-container');
    if (!container) return;

    container.innerHTML = leaderboard
        .map((user, index) => `
            <div class="leaderboard-item">
                <span class="position">${index + 1}</span>
                <span class="name">${user.name}</span>
                <span class="score">${user.score} points</span>
            </div>
        `)
        .join('');
}

// Display past questions
function displayPastQuestions() {
    const container = document.getElementById('past-questions-container');
    if (!container) return;

    container.innerHTML = pastQuestions
        .map(q => `
            <div class="question-item">
                <h3>Day ${q.day}</h3>
                <p><strong>Question:</strong> ${q.question}</p>
                <p><strong>Answer:</strong> ${q.answer}</p>
                <p><strong>Winners:</strong> ${q.winners.join(', ')}</p>
            </div>
        `)
        .join('');
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
