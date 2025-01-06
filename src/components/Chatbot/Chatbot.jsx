import { useState } from 'react';
import "./Chatbot.css"

const ChatBot = () => {
    const [messages, setMessages] = useState([]);
    const [userInput, setUserInput] = useState('');

    // Improved response patterns with their corresponding functions
    const responsePatterns = [
        {
            pattern: /(how|what|can|tell me).+(about|search|find|get).+(people|person|users|individuals|profiles)/i,
            getResponse: () => `
                You can use the endpoint <code class="inline-code">api.crustdata.com/screener/person/search</code> to search for people based on their title, company, and location.<br><br>
                Here's an example request:<br><br>
                <div class="code-block"><code>curl --location 'https://api.crustdata.com/screener/person/search' \n
                --header 'Content-Type: application/json' \n
                --header 'Authorization: Token $token' \n
                --data '{
                    "filters": [
                        {"filter_type": "CURRENT_COMPANY", "type": "in", "value": ["openai.com"]},
                        {"filter_type": "CURRENT_TITLE", "type": "in", "value": ["engineer"]},
                        {"filter_type": "REGION", "type": "in", "value": ["San Francisco, California, United States"]}
                    ],
                    "page": 1
                }'</code></div>
                <br>
                You can refer to the API documentation for more examples.`
        },
        {
            pattern: /region.*values|standard.*region/i,
            getResponse: () => `
                Yes, there is a specific list of regions available at <a href="https://crustdata-docs-region-json.s3.us-east-2.amazonaws.com/updated_regions.json" target="_blank" class="link">this link</a>. 
                Please use the exact values from the list.<br><br>
                You can also check out the <a href="https://crustdata.com/docs" target="_blank" class="link">official documentation</a> for more details.`
        },
        {
            pattern: /api.*docs|documentation|reference/i,
            getResponse: () => "For detailed API documentation, please refer to the official documentation at <a href='https://crustdata.com/docs' target='_blank' class='link'>Crustdata API Docs</a>."
        },
        {
            pattern: /company|crustdata|what is|who is/i,
            getResponse: () => "Crustdata provides APIs to search, filter, and retrieve information about people, companies, and regions. Feel free to explore the documentation for further details."
        },
        {
            pattern: /help|assist|support|guide|question/i,
            getResponse: () => "I'm here to help! Please let me know your question, and I'll assist you in finding the right API endpoints or details."
        }
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        const trimmedInput = userInput.trim();
        if (trimmedInput === '') return;

        const newMessage = { sender: 'user', text: trimmedInput };
        const botResponse = generateBotResponse(trimmedInput);

        setMessages(prev => [...prev, newMessage, { sender: 'bot', text: botResponse }]);
        setUserInput('');

        // Log for debugging
        console.log('User asked:', trimmedInput);
    };

    const generateBotResponse = (message) => {
        // Try to find a matching pattern
        const matchedPattern = responsePatterns.find(({ pattern }) =>
            pattern.test(message.toLowerCase())
        );

        // Return matched response or fallback
        return matchedPattern
            ? matchedPattern.getResponse()
            : "I'm sorry, I don't have an answer for that. Please refer to the API documentation for more information or rephrase your question.";
    };

    return (
        <div className="chatbot">
            <div className="chatbox">
                <div className="messages">
                    {messages.map((message, index) => (
                        <div
                            key={index}
                            className={`message ${message.sender}`}
                            // Using role attribute for accessibility
                            role={message.sender === 'bot' ? 'status' : 'none'}
                        >
                            <p dangerouslySetInnerHTML={{ __html: message.text }} />
                        </div>
                    ))}
                </div>
                <form onSubmit={handleSubmit} className="user-input">
                    <input
                        type="text"
                        value={userInput}
                        onChange={(e) => setUserInput(e.target.value)}
                        placeholder="Type your message..."
                        aria-label="Message input"
                        required
                    />
                    <button type="submit">Send</button>
                </form>
            </div>
        </div>
    );
};

export default ChatBot;