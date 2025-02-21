console.log("Custom cursor element created.");

// Create custom cursor element
const cursor = document.createElement('div');
cursor.classList.add('custom-cursor');
document.body.appendChild(cursor);

console.log("Mouse move event listener added.");

// Track mouse movement
document.addEventListener('mousemove', (e) => {
    console.log(`Mouse moved to: ${e.pageX}, ${e.pageY}`);
    cursor.style.left = `${e.pageX}px`;
    cursor.style.top = `${e.pageY}px`;
    console.log("Custom cursor position updated.");
});

// Global Leaderboard Data
const globalLeaderboard = [
    { name: "Abhinav Upadhyay", score: 120 },
    { name: "Daivik Pratap Singh", score: 95 },
    { name: "Pranav Sharma", score: 90 },
    { name: "Ayushi Maheshwari", score: 85 },
    { name: "Chitransh Mittal", score: 80 },
    { name: "Nitya Patel", score: 75 },
    { name: "Amrit Kumawat", score: 70 },
    { name: "Milan Jain", score: 65 },
    { name: "Vineet Kumar", score: 60 },
    { name: "Ritika Suman", score: 55 }
];

// Static Data Storage
const challengeData = {
    days: [
        {
            day: 1,
            question: "Where do all deleted files go?",
            answer: "Nowhere {Deleted files don't really get deleted!}",
            winners: [
                { position: "🔹", name: "Ritika Suman" },
                { position: "🔹", name: "Suman Singh" },
                { position: "🔹", name: "Vineet Kumar" },
                { position: "🔹", name: "Sahil Vaishnav" },
                { position: "🔹", name: "Manish Jangid" },
                { position: "🔹", name: "Abhinav Upadhyay" },
                { position: "🔹", name: "Shyam Ji Singh" }
            ]
        },
        {
            day: 2,
            question: "What's the only secure password?",
            answer: "The only truly secure password is... well, one that doesn't exist!",
            winners: [
                { position: "🔹", name: "Abhinav Upadhyay" },
                { position: "🔹", name: "Pranav Sharma" },
                { position: "🔹", name: "Milan Jain" },
                { position: "🔹", name: "Daivik Pratap Singh" },
                { position: "🔹", name: "Aditya Agrawal" },
                { position: "🔹", name: "Tanushka Saxena" }
            ]
        },
        {
            day: 3,
            question: "What's the most common vulnerability?",
            answer: "The most common vulnerability is... the human factor!",
            winners: [
                { position: "🔹", name: "Abhinav Upadhyay" },
                { position: "🔹", name: "Milan Sharma" }
            ]
        },
        {
            day: 4,
            question: "Where should you enter your password without checking the URL?",
            answer: "The only right answer was: Nowhere! ❌🔑 Always check the URL before entering your password!",
            winners: [
                { position: "🔹", name: "Abhinav Upadhyay" },
                { position: "🔹", name: "Pranav Sharma" },
                { position: "🔹", name: "Vineet Kumar" },
                { position: "🔹", name: "Ayushi Maheshwari" },
                { position: "🔹", name: "Kartik Maheshwari" },
                { position: "🔹", name: "Chitransh Mittal" },
                { position: "🔹", name: "Daivik Pratap Singh" }
            ]
        },
        {
            day: 5,
            question: "What's the safest way to store your passwords?",
            answer: "While password managers are highly recommended for security, their insights remind us that no system is perfect, and using multi-layered protection (like 2FA & strong memory skills) is also crucial!",
            winners: [
                { position: "🔹", name: "Chitransh Mittal" },
                { position: "🔹", name: "Ayushi Maheshwari" },
                { position: "🔹", name: "Nitya Patel" },
                { position: "🔹", name: "Amrit Kumawat" },
                { position: "🔹", name: "Pranav Sharma" }
            ]
        },
        {
            day: 6,
            question: "If a website's URL starts with 'http' instead of 'https', what risk are you facing?",
            answer: "Data transmission is not encrypted, making it vulnerable to Man-in-the-Middle (MITM) attacks.",
            winners: [
                { position: "🔹", name: "Abhinav Upadhyay" },
                { position: "🔹", name: "Daivik Pratap Singh" },
                { position: "🔹", name: "Ayushi Maheshwari" },
                { position: "🔹", name: "Tanshi Arora" },
                { position: "🔹", name: "Nitya Patel" },
                { position: "🔹", name: "Saksham Garg" },
                { position: "🔹", name: "Ayushman Bosu Roy" },
                { position: "🔹", name: "Anjali Jain" },
                { position: "🔹", name: "Charvi Chittora" },
                { position: "🔹", name: "Akash Jain" },
                { position: "🔹", name: "Daksh Jain" },
                { position: "🔹", name: "Anshita Gautam" },
                { position: "🔹", name: "Tanushka Saxena" },
                { position: "🔹", name: "Shruti Jain" }
            ]
        },
        {
            day: 7,
            question: "What is the most common type of malware delivered through email attachments?",
            answer: "Trojan malware is the #1 cyber threat via email attachments! Stay alert, verify links, and never open unknown files. Hackers love tricking people—don't fall for it!",
            winners: [
                { position: "🔹", name: "Abhinav Upadhyay" },
                { position: "🔹", name: "Parul Sharma" },
                { position: "🔹", name: "Kovid Gupta" },
                { position: "🔹", name: "Amrit Kumawat" },
                { position: "🔹", name: "Akash Jain" },
                { position: "🔹", name: "Nitya Patel" },
                { position: "🔹", name: "Anjali Jain" },
                { position: "🔹", name: "Daksh Jain" },
                { position: "🔹", name: "Khushal Gupta" },
                { position: "🔹", name: "Ayushi Swami" },
                { position: "🔹", name: "Daivik Pratap Singh" },
                { position: "🔹", name: "Anshita Gautam" },
                { position: "🔹", name: "Manish Jangid" },
                { position: "🔹", name: "Gourav Dubey" },
                { position: "🔹", name: "Shruti Jain" },
                { position: "🔹", name: "Anirudh Gandhi" },
                { position: "🔹", name: "Akash Kumar" },
                { position: "🔹", name: "Alok Kumar" }
            ]
        },
        {
            day: 8,
            question: "I can track your online activity, collect your data, and display targeted ads—without you even noticing me. What am I?",
            answer: "Spyware,Adware, and Tracking Cookie",
            winners: [
                { position: "🔹", name: "Abhinav Upadhyay" },
                { position: "🔹", name: "Tanshi Arora" },
                { position: "🔹", name: "Daivik Pratap Singh" },
                { position: "🔹", name: "Ayushi Maheshwari" },
                { position: "🔹", name: "Ashok Kumar" },
                { position: "🔹", name: "Nitya Patel" },
                { position: "🔹", name: "Rahul Kumawat" },
                { position: "🔹", name: "Ayushi Swami" },
                { position: "🔹", name: "Kovid Gupta" },
                { position: "🔹", name: "Pranav Sharma" },
                { position: "🔹", name: "Anjali Jain" },
                { position: "🔹", name: "Abhidha Joshi" },
                { position: "🔹", name: "Ayush Joshi" },
                { position: "🔹", name: "Mehul Suthar" },
                { position: "🔹", name: "Tanushka Saxena"},
                { position: "🔹", name: "Riya Srivastava" },
                { position: "🔹", name: "Daksh Duhlani"}
            ]
        },
        {
            day: 9,
            question: "I can hijack your browser, change your search results, redirect you to shady websites, and flood you with pop-up ads—without you even installing me knowingly. What am I?",
            answer: "Browser Hijacker",
            winners: [
                { position: "🔹", name: "Shruti Jain" },
                { position: "🔹", name: "Pranav Sharma" },
                { position: "🔹", name: "Anjali Jain" },
                { position: "🔹", name: "Nitya Patel" },
                { position: "🔹", name: "Abhidha Joshi" },
                { position: "🔹", name: "Kovid Gupta" },
                { position: "🔹", name: "Daksh Duhlani" },
                { position: "🔹", name: "Anand Kumar Sharma" },
                { position: "🔹", name: "Nikhil Sharma" },
                { position: "🔹", name: "Yashashvi Audhichya" },
                { position: "🔹", name: "Anshita Gautam" },
                { position: "🔹", name: "Tanshi Arora" }
            ]
        },
        {
            day: 10,
            question: "You receive an urgent email from your bank, stating that your account will be suspended unless you verify your identity immediately. The email contains a link directing you to a website that looks exactly like your bank’s official site. You notice one small but critical detail that exposes the scam. What is it? 🤔💡",
            answer: "Comming Soon...",
            winners: [
                { position: "🔹", name: "Waiting to announce" }
            ]
        }
    ],
    currentDay: 10
};

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initPage);

// Initialize page
function initPage() {
    displayGlobalLeaderboard();
    displayTimeline();
    setupNavigation();
    setupEventListeners();
}

// Display global leaderboard
function displayGlobalLeaderboard() {
    const leaderboardList = document.querySelector('.leaderboard-list');
    if (!leaderboardList) return;
    
    leaderboardList.innerHTML = globalLeaderboard.map((entry, index) => `
        <li>
            <span class="position">${index + 1}</span>
            <span class="name">${entry.name}</span>
            <span class="score">${entry.score} pts</span>
        </li>
    `).join('');
}

// Display timeline
function displayTimeline() {
    const timelineContainer = document.querySelector('.timeline-container');
    if (!timelineContainer) return;

    timelineContainer.innerHTML = challengeData.days.reverse().map(day => `
        <div class="timeline-item" data-day="${day.day}">
            <h3>Day ${day.day}</h3>
            <p class="question-preview">${day.question}</p>
            <button class="view-details">View Details</button>
        </div>
    `).join('');
}

// Show modal with day details
function showDayDetails(day) {
    const modalContent = document.querySelector('.modal-content');
    const modalOverlay = document.querySelector('.modal-overlay');
    
    if (!modalContent || !modalOverlay) return;

    modalContent.innerHTML = `
        <h2>Day ${day.day}</h2>
        <div class="question">
            <h3>Question:</h3>
            <p>${day.question}</p>
        </div>
        <div class="answer">
            <h3>Answer:</h3>
            <p>${day.answer}</p>
        </div>
        <div class="winners">
            <h3>Winners:</h3>
            ${day.winners.length > 0 ? 
                day.winners.map(winner => `
                    <div class="winner-item">
                        <span class="position">${winner.position}</span>
                        <span class="name">${winner.name}</span>
                    </div>
                `).join('') :
                '<p>No winners yet!</p>'
            }
        </div>
    `;
    
    modalOverlay.style.display = 'flex';
}

// Update navigation to show day counts
function setupNavigation() {
    const nav = document.getElementById('day-navigation');
    if (nav) {
        nav.innerHTML = challengeData.days.map(day => `
            <li>
                <a href="#" data-day="${day.day}" class="${day.day === challengeData.currentDay ? 'active' : ''}">
                    Day ${day.day}
                </a>
            </li>
        `).join('');
    }
}

// Setup event listeners
function setupEventListeners() {
    // Timeline item click handlers
    document.querySelectorAll('.timeline-item').forEach(item => {
        item.addEventListener('click', (e) => {
            if (!e.target.classList.contains('view-details')) return;
            
            const dayNumber = parseInt(item.dataset.day);
            const day = challengeData.days.find(d => d.day === dayNumber);
            if (day) {
                showDayDetails(day);
            }
        });
    });

    // Modal close button
    const closeModal = document.querySelector('.close-modal');
    if (closeModal) {
        closeModal.addEventListener('click', () => {
            const modalOverlay = document.querySelector('.modal-overlay');
            if (modalOverlay) {
                modalOverlay.style.display = 'none';
            }
        });
    }

    // Modal overlay click to close
    const modalOverlay = document.querySelector('.modal-overlay');
    if (modalOverlay) {
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) {
                modalOverlay.style.display = 'none';
            }
        });
    }
}
