// Global Leaderboard Data
const globalLeaderboard = [
    { name: "Abhinav Upadhyay", score: 0 },
    { name: "Daivik Pratap Singh", score: 0 },
    { name: "Pranav Sharma", score: 0 },
    { name: "Ayushi Maheshwari", score: 0 },
    { name: "Chitransh Mittal", score: 0 },
    { name: "Nitya Patel", score: 0 },
    { name: "Amrit Kumawat", score: 0 },
    { name: "Milan Jain", score: 0 },
    { name: "Vineet Kumar", score: 0 },
    { name: "Ritika Suman", score: 0 }
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
                { position: "🔹", name: "Tanushka Saxena" },
                { position: "🔹", name: "Riya Srivastava" },
                { position: "🔹", name: "Daksh Duhlani" }
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
            answer: "URL Mismatch (Look for a Fake Domain!)",
            winners: [
                { position: "🔹", name: "Shruti Jain" },
                { position: "🔹", name: "Rahul Kumawat" },
                { position: "🔹", name: "Anshita Gautam" },
                { position: "🔹", name: "Nikhil Sharma" },
                { position: "🔹", name: "Anuj Sharma" },
                { position: "🔹", name: "Anjali Jain" },
                { position: "🔹", name: "Nitya Patel" },
                { position: "🔹", name: "Pranav Sharma" },
                { position: "🔹", name: "Ayushi Swami" },
                { position: "🔹", name: "Daksh Duhlani" }
            ]
        },
        {
            day: 11,
            question: "You're using public WiFi at a coffee shop when you receive a pop-up saying: \"Security Alert! Your device is at risk. Click here to fix the issue immediately.\" What should you do next? 🤔 A. Click the link immediately to remove the threat. B. Download an antivirus suggested in the pop-up. C. Ignore it—it’s just a random pop-up. D. None of the above. (If so, explain why?)",
            answer: "Option D (This pop-up is most likely a fake security alert—a scareware tactic used by hackers to trick users into clicking malicious links or downloading malware.)",
            winners: [
                { position: "🔹", name: "Daivik Pratap Singh" },
                { position: "🔹", name: "Anshita Gautam" },
                { position: "🔹", name: "Pranav Sharma" },
                { position: "🔹", name: "Nikhil Sharma" },
                { position: "🔹", name: "Nitya Patel" },
                { position: "🔹", name: "Anjali Jain" },
                { position: "🔹", name: "Ayushi Swami" },
                { position: "🔹", name: "Daksh Duhlani" },
                { position: "🔹", name: "Shruti Jain" },
                { position: "🔹", name: "Swaraj Kamewal" }
            ]
        },
        {
            day: 12,
            question: "A hacker gains access to your email account. What’s the FIRST thing you should do? 🤔 A. Call your friend for advice. B. Send an email to warn your contacts. C. Create a new email account and forget about the old one. D. None of the above. (Explain Why?)",
            answer: "Best Response Instead (What to Do First!) 1️. Immediately change your email password. (Use a strong, unique password). 2️. Enable Two-Factor Authentication (2FA). (This adds an extra security layer).",
            winners: [
                { position: "🔹", name: "Shruti Jain" },
                { position: "🔹", name: "Milan Jain" },
                { position: "🔹", name: "Sahil Vaishnav" },
                { position: "🔹", name: "Pranav Sharma" },
                { position: "🔹", name: "Nikhil Sharma" },
                { position: "🔹", name: "Anjali Jain" },
                { position: "🔹", name: "Ayushi Swami" },
                { position: "🔹", name: "Ajmeri" }
            ]
        },
        {
            day: 13,
            question: "You're setting up a new online account, and the website forces you to use a long, complex password that includes uppercase, lowercase, numbers, and special characters. However, you find it difficult to remember. What should you do? 🤔 A. Write it down on a piece of paper and keep it safe. B. Use the same password you've used before to make it easier to remember. C. Store it in your browser's autofill. D. None of the above. (If so, explain why?)",
            answer: "D. Use a trusted password manager (e.g., Bitwarden, 1Password, or KeePass) to securely store and autofill passwords.",
            winners: [
                { position: "🔹", name: "Pranav Sharma" },
                { position: "🔹", name: "Ayushi Swami" },
                { position: "🔹", name: "Anjali Jain" },
                { position: "🔹", name: "Kanchan Prajapat" }
            ]
        },
        {
            day: 14,
            question: "You're logging into an important online account, but you realize that Two-Factor Authentication (2FA) is not enabled. What’s the BEST action to take? 🤔 A. It’s fine, my password is strong enough. B. Enable 2FA using SMS verification. C. Enable 2FA using an authenticator app (e.g., Google Authenticator, Authy). D. None of the above. (If so, explain why?)",
            answer: "C. Enable 2FA using an authenticator app (e.g., Google Authenticator, Authy).",
            winners: [
                { position: "🔹", name: "Pranav Sharma" },
                { position: "🔹", name: "Nikhil Sharma" },
                { position: "🔹", name: "Krishna Sharma" },
                { position: "🔹", name: "Harshit Rajguru" },
                { position: "🔹", name: "Anjali Jain" },
                { position: "🔹", name: "Akash Kumar" },
                { position: "🔹", name: "Shruti Jain" }
            ]
        },
        {
            day: 15,
            question: "You're setting up a new online account, and the website asks you to create a password. Which of the following is the WORST choice? 🤔 A. P@$$w0rd123 B. MyDogCharlie2024 C. jX8$2nD!qY7%tZ D. A randomly generated password from a password manager",
            answer: "A. \"P@$$w0rd123\" (Worst Choice!) → This looks complex but is actually weak because: It follows common password patterns (e.g., replacing letters with symbols). \"Password123\" is one of the most commonly used and hacked passwords. Hackers use dictionary attacks to easily guess such variations.",
            winners: [
                { position: "🔹", name: "Pranav Sharma" },
                { position: "🔹", name: "Swaraj Kamewal" },
                { position: "🔹", name: "Rishabh Dadhich" },
                { position: "🔹", name: "Anjali Jain" },
                { position: "🔹", name: "Daksh Duhlani" }
            ]
        },
        {
            day: 16,
            question: "You're browsing the internet when a pop-up appears saying: \"Congratulations! You've won a brand-new iPhone 🎉! Click here to claim your prize now!\" What should you do? 🤔 A. Click the link immediately—free stuff is always great! B. Enter your details to see if it's real. C. Ignore the pop-up and close the tab. D. Report it as a scam and warn others.",
            answer: "The correct answers are: C. Ignore the pop-up and close the tab. D. Report it as a scam and warn others. 💡 Why? 🚨 Fake giveaway scams are one of the most common phishing tactics used by cybercriminals to steal personal data.",
            winners: [
                { position: "🔹", name: "Priyansh Sehgal" },
                { position: "🔹", name: "Shruti Jain" },
                { position: "🔹", name: "Milan Jain" },
                { position: "🔹", name: "Rudra Pratap" },
                { position: "🔹", name: "Rishabh Dadhich" },
                { position: "🔹", name: "Anjali Jain" },
                { position: "🔹", name: "Chitransh Mittal" },
                { position: "🔹", name: "Pranav Sharma" },
                { position: "🔹", name: "Krishna Sharma" },
                { position: "🔹", name: "Kanchan Prajapat" },
                { position: "🔹", name: "Lakshya Limba" },
                { position: "🔹", name: "Amrit Kumawat" },
                { position: "🔹", name: "Harshit Rajguru" },
                { position: "🔹", name: "Ashok Kumar" },
                { position: "🔹", name: "Nikhil Sharma" },
                { position: "🔹", name: "Daksh Duhlani" }
            ]
        },
        {
            day: 17,
            question: "A hacker tricks you into running a seemingly harmless file, but in the background, it silently installs malware on your system. What is this attack technique called? 🤔",
            answer: "Winners: Mrityunjay Singh, Pranav Sharma, Krishna Sharma, Abhinav Upadhyay, Tanya Namdev, Nikhil Sharma, Anjali Jain, Amrit Kumawat, Surendra Singh, Daksh Duhlani",
            winners: [
                { position: "🔹", name: "Mrityunjay Singh" },
                { position: "🔹", name: "Pranav Sharma" },
                { position: "🔹", name: "Krishna Sharma" },
                { position: "🔹", name: "Abhinav Upadhyay" },
                { position: "🔹", name: "Tanya Namdev" },
                { position: "🔹", name: "Nikhil Sharma" },
                { position: "🔹", name: "Anjali Jain" },
                { position: "🔹", name: "Amrit Kumawat" },
                { position: "🔹", name: "Surendra Singh" },
                { position: "🔹", name: "Daksh Duhlani" }
            ]
        },
        {
            day: 18,
            question: "A hacker tricks you into revealing your bank details by pretending to be your bank’s official representative. What type of cyber attack is this? 🤔",
            answer: "Phishing Attack",
            winners: [
                { position: "🔹", name: "Shruti Jain" },
                { position: "🔹", name: "Sahil Yaduvanshi" },
                { position: "🔹", name: "Surendra Singh" },
                { position: "🔹", name: "Pranav Sharma" },
                { position: "🔹", name: "Anjali Jain" },
                { position: "🔹", name: "Krishna Sharma" },
                { position: "🔹", name: "Amrit Kumawat" },
                { position: "🔹", name: "Ayushi Swami" },
                { position: "🔹", name: "Abhinav Upadhyay" },
                { position: "🔹", name: "Rishabh Dadhich" },
                { position: "🔹", name: "Daksh Duhlani" },
                { position: "🔹", name: "Ashwin Yadav" }
            ]
        },
        {
            day: 19,
            question: "A company’s internal database was breached, but there was no malware detected, no phishing attack reported, and no sign of brute force attempts. The attackers simply logged in with valid employee credentials.",
            answer: "Since Credential Stuffing Attack is the most direct answer but Insider Attack is also a reasonable cybersecurity risk in this scenario, you can consider both as correct. ✔️ Primary Answer: Credential Stuffing Attack ✔️ Also Acceptable: Insider Attack (since an insider could intentionally misuse credentials)",
            winners: [
                { position: "🔹", name: "Pranav Shaarma" },
                { position: "🔹", name: "Amrit Kumawat" },
                { position: "🔹", name: "Ashwani Yadav" },
                { position: "🔹", name: "Anjali Jain" },
                { position: "🔹", name: "Daksh Duhlani" },
                { position: "🔹", name: "Shruti Jain" }
            ]
        },
        {
            day: 20,
            question: "Which cybersecurity technique involves adding random data to passwords before hashing them to make them more resistant to attacks? A) Salting B) Hashing C) Encryption D) Tokenization",
            answer: "Yet to reveal...",
            winners: [
                { position: "🔹", name: "Waiting..." }
            ]
        }
    ],
    currentDay: 20
};

function updateLeaderboardScores() {
    const nameCount = {};

    // Count occurrences of each name in challengeData
    challengeData.days.forEach(day => {
        day.winners.forEach(winner => {
            nameCount[winner.name] = (nameCount[winner.name] || 0) + 1;
        });
    });

    // Update scores in the global leaderboard, ensuring max score does not exceed 200
    globalLeaderboard.forEach(entry => {
        if (nameCount[entry.name]) {
            const occurrences = nameCount[entry.name];
            const scoreToAdd = Math.min(occurrences * 10); // Ensure score does not exceed 200
            entry.score += scoreToAdd; // Add calculated score
        }
    });

    // Sort leaderboard by score (Highest first)
    globalLeaderboard.sort((a, b) => b.score - a.score);

}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initPage);

// Initialize page
function initPage() {
    updateLeaderboardScores(); // Update scores on page load
    displayGlobalLeaderboard(); // Display updated leaderboard
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

    timelineContainer.innerHTML = challengeData.days.slice().reverse().map(day => `
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
            ${day.winners.length > 0 ? day.winners.map(winner => `
                <div class="winner-item">
                    <span class="position">${winner.position}</span>
                    <span class="name">${winner.name}</span>
                </div>
            `).join('') : '<p>No winners yet!</p>'}
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
    document.querySelectorAll('.timeline-item .view-details').forEach(button => {
        button.addEventListener('click', (e) => {
            const dayNumber = parseInt(button.closest('.timeline-item').dataset.day);
            const day = challengeData.days.find(d => d.day === dayNumber);
            if (day) showDayDetails(day);
        });
    });

    // Close modal on click
    const closeModal = document.querySelector('.close-modal');
    if (closeModal) {
        closeModal.addEventListener('click', () => {
            document.querySelector('.modal-overlay').style.display = 'none';
        });
    }

    // Close modal when clicking outside content
    const modalOverlay = document.querySelector('.modal-overlay');
    if (modalOverlay) {
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) {
                modalOverlay.style.display = 'none';
            }
        });
    }
}
