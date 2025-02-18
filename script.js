// Static Data Storage
const challengeData = {
    days: [
        {
            day: 1,
            question: "Where do all deleted files go?",
            answer: "Nowhere {Deleted files don't really get deleted!}",
            winners: [
                { position: "🥇", name: "Ritika Suman" },
                { position: "🥈", name: "Suman Singh" },
                { position: "🥉", name: "Vineet Kumar" },
                { position: "🎖", name: "Sahil Vaishnav" },
                { position: "🎖", name: "Manish Jangid" },
                { position: "🎖", name: "Abhinav Upadhyay" },
                { position: "🎖", name: "Shyam Ji Singh" }
            ]
        },
        {
            day: 2,
            question: "What's the only secure password?",
            answer: "The only truly secure password is... well, one that doesn't exist!",
            winners: [
                { position: "🥇", name: "Abhinav Upadhyay" },
                { position: "🥈", name: "Pranav Sharma" },
                { position: "🥉", name: "Milan Jain" },
                { position: "🎖", name: "Daivik Pratap Singh" },
                { position: "🎖", name: "Aditya Agrawal" },
                { position: "🎖", name: "Tanushka Saxena" }
            ]
        },
        {
            day: 3,
            question: "What's the most common vulnerability?",
            answer: "The most common vulnerability is... the human factor!",
            winners: [
                { position: "🥇", name: "Abhinav Upadhyay" },
                { position: "🥈", name: "Milan Sharma" }
            ]
        },
        {
            day: 4,
            question: "Where should you enter your password without checking the URL?",
            answer: "The only right answer was: Nowhere! ❌🔑 Always check the URL before entering your password!",
            winners: [
                { position: "🥇", name: "Abhinav Upadhyay" },
                { position: "🥈", name: "Pranav Sharma" },
                { position: "🥉", name: "Vineet Kumar" },
                { position: "🎖", name: "Ayushi Maheshwari" },
                { position: "🎖", name: "Kartik Maheshwari" },
                { position: "🎖", name: "Chitransh Mittal" },
                { position: "🎖", name: "Daivik Pratap Singh" }
            ]
        },
        {
            day: 5,
            question: "What's the safest way to store your passwords?",
            answer: "While password managers are highly recommended for security, their insights remind us that no system is perfect, and using multi-layered protection (like 2FA & strong memory skills) is also crucial!",
            winners: [
                { position: "🥇", name: "Chitransh Mittal" },
                { position: "🥈", name: "Ayushi Maheshwari" },
                { position: "🥉", name: "Nitya Patel" },
                { position: "🎖", name: "Amrit Kumawat" },
                { position: "🎖", name: "Pranav Sharma" }
            ]
        },
        {
            day: 6,
            question: "If a website's URL starts with 'http' instead of 'https', what risk are you facing?",
            answer: "Data transmission is not encrypted, making it vulnerable to Man-in-the-Middle (MITM) attacks.",
            winners: [
                { position: "🥇", name: "Abhinav Upadhyay" },
                { position: "🥈", name: "Daivik Pratap Singh" },
                { position: "🥉", name: "Ayushi Maheshwari" },
                { position: "🎖", name: "Tanshi Arora" },
                { position: "🎖", name: "Nitya Patel" },
                { position: "🎖", name: "Saksham Garg" },
                { position: "🎖", name: "Ayushman Bosu Roy" },
                { position: "🎖", name: "Anjali Jain" },
                { position: "🎖", name: "Charvi Chittora" },
                { position: "🎖", name: "Akash Jain" },
                { position: "🎖", name: "Daksh Jain" },
                { position: "🎖", name: "Anshita Gautam" },
                { position: "🎖", name: "Tanushka Saxena" },
                { position: "🎖", name: "Shruti Jain" }
            ]
        },
        {
            day: 7,
            question: "What is the most common type of malware delivered through email attachments?",
            answer: "Coming soon...",
            winners: []
        }
    ],
    currentDay: 7
};

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initPage);

// Initialize page
function initPage() {
    displayCurrentDay();
    setupNavigation();
    setupEventListeners();
}

// Display current day's content
function displayCurrentDay() {
    const currentDayData = challengeData.days.find(day => day.day === challengeData.currentDay);
    if (!currentDayData) return;

    const container = document.getElementById('current-day-container');
    if (container) {
        container.innerHTML = `
            <h2>Day ${currentDayData.day}</h2>
            <div class="question">
                <h3>Question:</h3>
                <p>${currentDayData.question}</p>
            </div>
            <div class="answer">
                <h3>Answer:</h3>
                <p>${currentDayData.answer}</p>
            </div>
            <div class="winners">
                <h3>Winners:</h3>
                ${currentDayData.winners.length > 0 ? 
                    currentDayData.winners.map(winner => `
                        <div class="winner">
                            <span class="position">${winner.position}</span>
                            <span class="name">${winner.name}</span>
                        </div>
                    `).join('') :
                    '<p>No winners yet!</p>'
                }
            </div>
        `;
    }
}

// Setup navigation
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
    // Day navigation click handlers
    document.querySelectorAll('#day-navigation a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const day = parseInt(e.target.dataset.day);
            if (day) {
                challengeData.currentDay = day;
                displayCurrentDay();
                setupNavigation();
            }
        });
    });
}
