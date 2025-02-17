const chatBox = document.getElementById("chat-box");
const choicesContainer = document.getElementById("choices");
const notifSound = document.getElementById("notif-sound");

// Chat storyline
const storyline = {
    start: {
        message: "Hey, I need your help! What should I do??",
        choices: [
            { text: "What's wrong?", next: "problem" },
            { text: "Leave me alone.", next: "rude" }
        ]
    },
    problem: {
        message: "I messed up and I don’t know how to fix it.",
        choices: [
            { text: "Tell me more.", next: "confession" },
            { text: "It'll be fine.", next: "comfort" }
        ]
    },
    rude: {
        message: "Wow, okay then...",
        choices: [{ text: "Restart", next: "start" }]
    },
    confession: {
        message: "I accidentally sent a risky text to the wrong person.",
        choices: [
            { text: "Oh no! What did it say?", next: "text_details" },
            { text: "Just apologize.", next: "apology" }
        ]
    },
    comfort: {
        message: "Thanks... I guess I'll figure it out.",
        choices: [{ text: "Good luck!", next: "end_good" }]
    },
    text_details: {
        message: "It was... let’s just say embarrassing.",
        choices: [{ text: "Yikes!", next: "end_bad" }]
    },
    apology: {
        message: "You're right. I'll just be honest.",
        choices: [{ text: "Good luck!", next: "end_good" }]
    },
    end_good: {
        message: "Thanks for the advice! (Good Ending)",
        choices: [{ text: "Restart", next: "start" }]
    },
    end_bad: {
        message: "Oh no... this is bad. (Bad Ending)",
        choices: [{ text: "Restart", next: "start" }]
    }
};

// Function to display a message
function displayMessage(text, className = "") {
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("message");
    if (className) messageDiv.classList.add(className);
    messageDiv.textContent = text;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
    notifSound.play();
}

// Function to display choices
function displayChoices(choices) {
    choicesContainer.innerHTML = ""; 
    choices.forEach(choice => {
        const btn = document.createElement("button");
        btn.classList.add("choice-btn");
        btn.textContent = choice.text;
        btn.onclick = () => loadScene(choice.next);
        choicesContainer.appendChild(btn);
    });
}

// Function to load a scene
function loadScene(sceneKey) {
    const scene = storyline[sceneKey];
    displayMessage(scene.message);
    setTimeout(() => displayChoices(scene.choices), 500);
}

// Start game
loadScene("start");
