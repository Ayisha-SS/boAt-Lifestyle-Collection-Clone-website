import React, { useState } from 'react';

function Chatbot() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([]);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  const handleMessageSubmit = (message) => {
    setMessages([...messages, { text: message, sender: 'user' }]);
    // Call function to handle chatbot response
    handleChatbotResponse(message);
  };

  const handleChatbotResponse = (message) => {
    // Implement chatbot logic here to generate a response
    // For now, let's just echo the user's message
    setMessages([...messages, { text: `You said: ${message}`, sender: 'chatbot' }]);
  };

  return (
    <div className='fixed bottom-[10px] right-[10px] w-12'>
      <img src="src\assets\images\Chat-Icon.jpg" alt="Chatbot" className='rounded-full' onClick={toggleChat} />
      {isChatOpen && (
        <div className="px-4 py-2 border-b border-gray-200">
          <div className="px-4 py-2 overflow-y-auto' style={{ maxHeight: '300px' }}">
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
          </div>
          <div className="chat-input">
            <input type="text" placeholder="Type your message..." className='w-full text-black px-4 py-2 border-t border-gray-200 focus:outline-none' onKeyDown={(e) => {
              if (e.key === 'Enter' && e.target.value.trim() !== '') {
                handleMessageSubmit(e.target.value);
                e.target.value = '';
              }
            }} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Chatbot;

