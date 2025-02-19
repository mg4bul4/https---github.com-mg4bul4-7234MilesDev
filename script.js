const chatBox = document.getElementById("chat-box");
const choicesContainer = document.getElementById("choices");
const notifSound = document.getElementById("notif-sound");


// Chat storyline
const storyline = {
    start: {
        message: "Hey?",
        choices: [
            { text: "What's wrong?", next: "interesting" },
            { text: "Leave me alone.", next: "standoff" }
        ]
    },

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
