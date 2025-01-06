# Crustdata API Support Chatbot

This is a simple chatbot built using React that answers frequently asked questions about the Crustdata APIs. The chatbot is designed to understand questions asked in natural language and provide responses related to the Crustdata API documentation.

## Features

- Natural Language Processing (NLP)-like behavior for understanding questions.
- Supports a variety of FAQs about Crustdata APIs.
- Provides formatted code examples and clickable links for easier navigation.
- Simple and interactive UI for easy integration.

## Requirements

- Node.js (v12 or higher)
- npm or yarn for package management

## Installation

### Step 1: Clone the repository

```bash
git clone https://github.com/your-username/crustdata-chatbot.git
cd crustdata-chatbot
```

### Step 2: Install Dependencies

```bash
npm install
```

or if you use `yarn`:

```bash
yarn install
```

### Step 3: Start the Application

```bash
npm start
```

or if using `yarn`:

```bash
yarn start
```

This will start the application in development mode, and you can view it in your browser at `http://localhost:3000`.

## Usage

Once the app is running, a chatbot interface will be displayed. You can type questions related to Crustdata APIs such as:

- "How do I search for people?"
- "What are the region values for Crustdata?"
- "Tell me about Crustdata APIs"

The chatbot will automatically recognize these questions and return relevant answers, such as API examples, documentation links, and more.

### Example Questions:

1. **How do I search for people?**

   - The chatbot will provide an example API request with code formatting.

2. **What are the standard region values?**

   - The chatbot will provide a link to the region values JSON and further instructions.

3. **Can you help me with API documentation?**
   - The chatbot will give you a link to the official Crustdata API documentation.

## Customizing the Chatbot

- You can add more FAQ responses in the `generateBotResponse` function.
- To add more advanced NLP handling, you can expand the regular expressions or use a more sophisticated natural language processing library (e.g., `compromise` or `nlp.js`).

## Code Explanation

1. **State Management:**

   - `messages`: An array that stores the list of messages (both user and bot).
   - `userInput`: The current input from the user.

2. **Message Handling:**

   - When the user submits a message, the input is processed and added to the `messages` state.
   - The bot response is generated based on the user input and displayed in the chat.

3. **Bot Responses:**

   - Responses are generated based on matching the user's message with predefined patterns using regex.
   - If a match is found, the appropriate response is returned.

4. **Formatting Responses:**
   - Responses can contain formatted text, such as code blocks and links, which are displayed using the `dangerouslySetInnerHTML` method.

## Contributing

Feel free to fork the repository and contribute by submitting pull requests. You can help by:

- Adding more FAQ responses.
- Enhancing the natural language understanding.
- Improving the UI design or adding features.
