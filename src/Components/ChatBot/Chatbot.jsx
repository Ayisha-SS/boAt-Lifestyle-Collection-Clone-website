// import React from 'react';

// import ChatBot from "react-simple-chatbot"
// import { Segment } from 'semantic-ui-react';


// function Chatbot() {
//     const steps = [
// 		{
// 			id:"Greet",
// 			message:"Hello,Welcome to oru website",
// 			trigger:"Ask Name"
// 		},
// 		{
// 			id:"Ask Name",
// 			message:"enter name",
// 			trigger:"Waiting1"
// 		},
//         {
//             id:"Waiting2",
//             user:true,
//             trigger:"Name"
//         },
//         {
//             id:"Name",
//             message:"Hi {previousValue}, Please select your issue",
//             trigger:"issues"
//         },
//         {
//             id:"issues",
//             option:[
//                 {value:"React",label:"React",trigger:"React"},
//                 {value:"Angular",label:"Angular",trigger:"Angular"}
//             ],
//         },
//         {
//             id:"React",
//             message:"Thanks for telling your react issue",
//             end:true
//         },
//         {
//             id:"Angular",
//             message:"Thanks for telling your angular issue",
//             end:true
//         },
// 	]
//   return (
//     <>
//         <Segment floated='right'>
//             <ChatBot steps = {steps}/>
//             console.log("hello");
//         </Segment>
//     </>  
//   )
// }

// export default Chatbot

import React, { useState } from 'react';

function Chatbot() {
  const [messages, setMessages] = useState([]);

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
    <div className="chatbot">
      <div className="chat-history">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input type="text" placeholder="Type your message..." onKeyDown={(e) => {
          if (e.key === 'Enter' && e.target.value.trim() !== '') {
            handleMessageSubmit(e.target.value);
            e.target.value = '';
          }
        }} />
      </div>
    </div>
  );
}

export default Chatbot;
