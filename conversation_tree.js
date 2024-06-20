// JSON table with all conversation routes
// Each route must have a unique id, description, and list of messages
// The messages array contains strings which are sent by bot. Messages that
// start with a slash are treated as image paths and are displayed as images
// Arrays are options that the user can select from. Arrays contain colon
// separated data which are strings that the bot will respond with before
// continuing.

const conversationTree = {
    "routes": {
        // GREETINGS
        // welcome messages to user
        "greetings": [
            {
                "id": 1,
                "description": "first conversation to welcome user",
                "messages": [
                    "Hello! It's so nice to meet you 👋",
                    "/hello.gif",
                    "So, how can I help you?",
                    ["I'm feeling stressed:stress", ],
                ]
            }
        ],

        // STRESS
        "stress": [
            {
                "id": 1,
                "description": "intro breathing exercise",
                "messages": [
                    {
                        "sender": "bot",
                        "text": "Let's try a breathing excercise. Have you ever done one before?"
                    }
                ]
            }
        ],

        // WORRY
        "worry": [

        ],

        // PANIC
        "panic": [

        ],

        // CANNOT SLEEP
        "sleep": [

        ],

        // PROCRASTINATE
        "procrastinate": [

        ],

        // GOOD MOOD
        "good": [

        ],
    }
};

export default conversationTree;
