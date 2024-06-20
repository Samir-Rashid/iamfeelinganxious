document.addEventListener("DOMContentLoaded", () => {
    const chat = document.getElementById("chat");
    const messages = chat.querySelectorAll(".message");
    let index = 0;

    function showNextMessage() {
        if (index < messages.length) {
            const message = messages[index];
            const content = message.textContent;
            message.textContent = "";

            const typingAnimation = setInterval(() => {
                message.textContent += content.charAt(message.textContent.length);
                if (message.textContent === content) {
                    clearInterval(typingAnimation);
                    index++;
                    setTimeout(showNextMessage, 1000);
                }
            }, 50);

            message.style.display = "block";
        }
    }

    messages.forEach(message => {
        message.style.display = "none";
    });

    setTimeout(showNextMessage, 500);
});
