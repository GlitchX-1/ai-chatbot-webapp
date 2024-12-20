<dependencies>
    <!-- Spring Boot Starter Web -->
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-web</artifactId>
    </dependency>

    <!-- Tomcat Embed Jasper (JSP Support) -->
    <dependency>
        <groupId>org.apache.tomcat.embed</groupId>
        <artifactId>tomcat-embed-jasper</artifactId>
    </dependency>

    <!-- Servlet API -->
    <dependency>
        <groupId>javax.servlet</groupId>
        <artifactId>javax.servlet-api</artifactId>
        <scope>provided</scope>
    </dependency>
</dependencies>

// Chatbot interaction logic
const messagesDiv = document.getElementById("messages");
const userInput = document.getElementById("userInput");
const sendButton = document.getElementById("sendButton");

// Mock chatbot response
function getChatbotResponse(userMessage) {
    const responses = {
        "hello": "Hi there! How can I help you?",
        "how are you": "I'm just a bot, but I'm functioning perfectly!",
        "bye": "Goodbye! Have a great day!",
    };

    return responses[userMessage.toLowerCase()] || "Sorry, I didn't understand that.";
}

// Add a message to the chatbox
function addMessage(sender, text) {
    const message = document.createElement("div");
    message.className = sender === "user" ? "user-message" : "bot-message";
    message.textContent = text;
    messagesDiv.appendChild(message);
}

// Handle user input
sendButton.addEventListener("click", () => {
    const userMessage = userInput.value.trim();
    if (userMessage) {
        addMessage("user", userMessage);
        const botResponse = getChatbotResponse(userMessage);
        addMessage("bot", botResponse);
        userInput.value = "";
    }
});

userInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        sendButton.click();
    }
});
