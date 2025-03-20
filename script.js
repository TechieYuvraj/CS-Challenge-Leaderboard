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
                { position: "🔹", name: "Pranav Sharma" },
                { position: "🔹", name: "Amrit Kumawat" },
                { position: "🔹", name: "Ashwin Yadav" },
                { position: "🔹", name: "Anjali Jain" },
                { position: "🔹", name: "Daksh Duhlani" },
                { position: "🔹", name: "Shruti Jain" }
            ]
        },
        {
            day: 20,
            question: "Which cybersecurity technique involves adding random data to passwords before hashing them to make them more resistant to attacks? A) Salting B) Hashing C) Encryption D) Tokenization",
            answer: "(A) Salting is the process of adding random data (a unique \"salt\") to a password before hashing it. This makes it much harder for attackers to use precomputed hash tables (like rainbow tables) to crack passwords. Even if two users have the same password, their hashes will be different due to unique salts.",
            winners: [
                { position: "🔹", name: "Pranav Sharma" },
                { position: "🔹", name: "Ashwin Yadav" },
                { position: "🔹", name: "Ayushi Swami" },
                { position: "🔹", name: "Anjali Jain" },
                { position: "🔹", name: "Daksh Duhlani" },
                { position: "🔹", name: "Tannu" },
                { position: "🔹", name: "Abhinav Upadhyay" }
            ]
        },
        {
            day: 21,
            question: "You're analyzing network traffic and notice an unusual amount of DNS requests being sent from a single device to random domain names. 🤔 What could this indicate?",
            answer: "[DNS tunneling]:- is a method cybercriminals use to exfiltrate data or establish communication with a remote server by encoding information within DNS queries and responses. Since DNS traffic is often allowed through firewalls, attackers exploit it to bypass security controls and maintain covert communication with their malicious infrastructure. [Botnet Activity]:– Many botnets leverage DNS Tunneling to remain hidden and communicate with their C2 servers, making this a partially correct response.",
            winners: [
                { position: "🔹", name: "Pranav Sharma" },
                { position: "🔹", name: "Ashwin Yadav"  },
                { position: "🔹", name: "Shruti Jain" },
                { position: "🔹", name: "Amrit Kumawat" }
            ]
        },
        {
            day: 22,
            question: "A hacker tricks you into entering your login credentials on a fake website that looks identical to the real one. However, instead of just stealing your password, the hacker also intercepts your multi-factor authentication (MFA) code in real-time. 🔍 What is this attack called?",
            answer: `"Real-Time Phishing (AiTM - Adversary-in-the-Middle Attack)"`,
            winners: [
                { position: "🔹", name: "Pranav Sharma" },
                { position: "🔹", name: "Ashwin Yadav" },
                { position: "🔹", name: "Anjali Jain" },
                { position: "🔹", name: "Abhishek Kumawat" }
            ]
        },
        {
            day: 23,
            question: `"A company finds that its employees are frequently falling for phishing attacks, despite regular training. What is the most effective long-term solution to minimize the risk? 🤔
                        A) Increase the frequency of phishing awareness training sessions.
                        B) Implement AI-powered email filtering and threat detection systems.
                        C) Fire employees who repeatedly fall for phishing scams.
                        D) Block all external emails to prevent phishing attempts."`,
            answer: `"B) Implement AI-powered email filtering and threat detection systems.
                    While training employees (Option A) is important, humans can still make mistakes. 
                    The best way to reduce phishing risks is by using AI-powered email security solutions that detect and block phishing attempts before they reach employees."`,
            winners: [
                { position: "🔹", name: "Pranav Sharma" },
                { position: "🔹", name: "Ashwin Yadav" },
                { position: "🔹", name: "Anjali Jain" },
                { position: "🔹", name: "Shruti Jain" }
            ]
        },
        {
            day: 24,
            question: `A hacker managed to access an encrypted database but couldn’t read any sensitive data. What security measure prevented them from doing so? 🤔`,
            answer: "The security measure that prevented the hacker from reading the sensitive data is Encryption.",
            winners: [
                { position: "🔹", name: "Pranav Sharma" },
                { position: "🔹", name: "Ashwin Yadav" },
                { position: "🔹", name: "Anuj Sharma" },
                { position: "🔹", name: "Anjali Jain" },
                { position: "🔹", name: "Rishabh Dadhich" }
            ]
        },
        {
            day: 25,
            question: `💡 A hacker tricks you into using a fake WiFi network that looks like a real one. What is this type of attack called? 🤔`,
            answer: "The answer is Evil Twin Attack. An Evil Twin Attack is when an attacker sets up a rogue WiFi hotspot that mimics a legitimate network to steal data from unsuspecting users.",
            winners: [
                { position: "🔹", name: "Pranav Sharma" },
                { position: "🔹", name: "Ashwin Yadav" },
                { position: "🔹", name: "Anjali Jain" },
                { position: "🔹", name: "Yashashvi Audhichya" }
            ]
        },
        {
            day: 26,
            question: `A hacker manages to break into a company’s internal network but doesn’t immediately take any action. Instead, they quietly explore the system, gather information, and wait for the perfect moment to strike. 🔍 What is this type of cyberattack called?`,
            answer: "An Advanced Persistent Threat (APT) is a prolonged and targeted cyberattack where an attacker gains unauthorized access to a network and remains undetected for an extended period. The goal is often to steal sensitive information, monitor activities, or prepare for a larger attack.",
            winners: [
                { position: "🔹", name: "Pranav Sharma" },
                { position: "🔹", name: "Shruti jain" },
                { position: "🔹", name: "Anjali Jain" }
            ]
        },
        {
            day: 27,
            question: `🔍 I don’t steal your data directly, but I trick you into giving it to me willingly. What am I? 🤔`,
            answer: "Social engineering is a manipulation technique that exploits human psychology to trick people into revealing sensitive information, such as passwords or financial details. Common examples include phishing emails, pretexting, baiting, and impersonation.",
            winners: [
                { position: "🔹", name: "Aarushi Lodha" },
                { position: "🔹", name: "Nikhil Sharma" }
            ]
        },
        {
            day: 28,
            question: `A hacker successfully steals the hashed passwords of users from a database. What technique might they use to crack these passwords efficiently, and how can users protect themselves from such attacks? 🔐💻`,
            answer: "The hacker might use Rainbow Table Attacks or Brute Force Attacks to crack the hashed passwords. To protect themselves, users should choose strong, unique passwords and use a password manager to securely store them.",
            winners: [
                { position: "🔹", name: "Pranav Sharma" },
                { position: "🔹", name: "Ashwin Yadav" },
                { position: "🔹", name: "Anjali Jain" }
            ]
        },
        {
            day: 29,
            question: `A company experienced a data breach where an attacker gained access to a large amount of sensitive information, but there was no sign of malware, phishing, or brute-force attacks.
                        What type of attack might have been used, and how could it have happened? 🤔`,
            answer: "If no malware, phishing, or brute-force attack was detected, the breach might have been caused by an insider threat, where an employee or contractor with access to sensitive data intentionally or accidentally leaked it.",
            winners: [
                { position: "🔹", name: "Pranav Sharma" },
                { position: "🔹", name: "Ashwin Yadav" },
                { position: "🔹", name: "Anjali Jain" },
                { position: "🔹", name: "Abhinav Upadhyay" },
                { position: "🔹", name: "Shruti Jain" }
            ]
        },
        {
            day: 30,
            question: `A hacker gains access to an organization's internal network and remains undetected for months, slowly exfiltrating data without triggering any security alarms. 🔍 What is this type of cyberattack called?`,
            answer: "An Advanced Persistent Threat (APT) is a prolonged and targeted cyberattack where an attacker infiltrates a network and remains undetected for an extended period, often exfiltrating sensitive data or monitoring activities without triggering security alarms.",
            winners: [
                { position: "🔹", name: "Pranav Sharma" },
                { position: "🔹", name: "Ashwin Yadav" },
                { position: "🔹", name: "Anjali Jain" },
                { position: "🔹", name: "Abhinav Upadhyay" }
            ]
        }
    ],
    currentDay: 0
};

// Global leaderboard data
let globalLeaderboard = [];

// Function to show the current day's question in the modal
function showCurrentDayQuestion() {
    const currentDayData = challengeData.days.find(day => day.day === challengeData.currentDay);
    if (currentDayData) {
        showDayDetails(currentDayData);
    }
}

function updateLeaderboardScores() {
    const nameCount = {};

    // Count occurrences of each name in challengeData
    challengeData.days.forEach(day => {
        day.winners.forEach(winner => {
            nameCount[winner.name] = (nameCount[winner.name] || 0) + 1;
        });
    });

    // Rebuild the leaderboard dynamically
    globalLeaderboard = Object.keys(nameCount).map(name => ({
        name,
        score: nameCount[name] * 10 // Each win = +10 points
    }));

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
    showCurrentDayQuestion(); // Show the current day's question in the modal
}

function displayGlobalLeaderboard() {
    const leaderboardList = document.querySelector('.leaderboard-list');
    if (!leaderboardList) return;

    // Clear existing list
    leaderboardList.innerHTML = '';

    // Only show if there are winners
    if (globalLeaderboard.length === 0) {
        leaderboardList.innerHTML = '<li>No winners yet!</li>';
        return;
    }

    // Slice top 10 players
    const top10Players = globalLeaderboard.slice(0, 10);

    // Dynamically create the leaderboard
    leaderboardList.innerHTML = top10Players.map((entry, index) => `
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
        <div class="instagram-button">
            <a href="https://www.instagram.com/stories/tech_soul_boy" target="_blank" class="button">Answer the Question Here</a>
            <a href="https://wa.me/916394764323?text=I'm%20answering%20the%20Cyber%20Security%20Challenge%20question!%0A%0AMy%20Name%20is%20:-%20%0AAnswer%20is%20:-%20" target="_blank" class="button">Answer on Whatsapp</a>
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
