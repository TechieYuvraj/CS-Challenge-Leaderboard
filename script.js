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
        const { getFirestore, collection, getDocs, addDoc, serverTimestamp } = await import('https://www.gstatic.com/firebasejs/11.3.1/firebase-firestore.js');
        
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

// Load leaderboard from Firestore
async function loadLeaderboard() {
    try {
        const leaderboardCollection = collection(db, 'leaderboard');
        const snapshot = await getDocs(leaderboardCollection);
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
        const questionsCollection = collection(db, 'questions');
        const snapshot = await getDocs(questionsCollection);
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

// Setup day navigation
function setupDayNavigation() {
    const nav = document.getElementById('day-navigation');
    if (nav) {
        nav.innerHTML = pastQuestions.map(q => `
            <li><a href="#" data-day="${q.day}">Day ${q.day}</a></li>
        `).join('');
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
                const questionsCollection = collection(db, 'questions');
                await addDoc(questionsCollection, {
                    day: pastQuestions.length + 1,
                    question: question,
                    answer: answer,
                    timestamp: serverTimestamp()
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
                const leaderboardCollection = collection(db, 'leaderboard');
                await addDoc(leaderboardCollection, {
                    name: winnerName,
                    score: 0,
                    timestamp: serverTimestamp()
                });
                loadLeaderboard();
                document.getElementById('winner-name').value = '';
            } catch (error) {
                alert('Error adding winner: ' + error.message);
            }
        }
    });
}

// Initialize the app
init();
