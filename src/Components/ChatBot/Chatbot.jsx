import React from 'react';

import ChatBot from "react-simple-chatbot"
import { Segment } from 'semantic-ui-react';


function Chatbot() {
    const steps = [
		{
			id:"Greet",
			message:"Hello,Welcome to oru website",
			trigger:"Ask Name"
		},
		{
			id:"Ask Name",
			message:"enter name",
			trigger:"Waiting1"
		},
        {
            id:"Waiting2",
            user:true,
            trigger:"Name"
        },
        {
            id:"Name",
            message:"Hi {previousValue}, Please select your issue",
            trigger:"issues"
        },
        {
            id:"issues",
            option:[
                {value:"React",label:"React",trigger:"React"},
                {value:"Angular",label:"Angular",trigger:"Angular"}
            ],
        },
        {
            id:"React",
            message:"Thanks for telling your react issue",
            end:true
        },
        {
            id:"Angular",
            message:"Thanks for telling your angular issue",
            end:true
        },
	]
  return (
    <>
        <Segment floated='right'>
            <ChatBot steps = {steps}/>
            console.log("hello");
        </Segment>
    </>  
  )
}

export default Chatbot