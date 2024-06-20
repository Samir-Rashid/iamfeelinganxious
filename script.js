document.addEventListener("DOMContentLoaded", () => {
    const chat = document.getElementById("chat");
    const messages = chat.querySelectorAll(".message");
    let index = 0;

    function showNextMessage() {
        if (index < messages.length) {
            const message = messages[index];
            message.style.display = "block";
            index++;
            setTimeout(showNextMessage, 1000);
        }
    }

    messages.forEach(message => {
        message.style.display = "none";
    });

    setTimeout(showNextMessage, 500);
});
