import { useState } from "react";
import ChatHeader from "../components/chat-header";
import ChatInput from "../components/chat-input";
import Message from "../components/message";
import MessageLoader from "../components/message-loader";
import "./chat.css";

const ChatPage = () => {
  const [waitingForResponse, setWaitingForResponse] = useState(false);
  const [messages, setMessages] = useState([
    {
      content:
        "Hello, i am the Internet Technologies Chatbot, how can i help you?",
      author: "xeno",
      timestamp: new Date(),
    },
  ]);

  const sendMessage = (message) => {
    const newMessage = {
      content: message,
      author: "you",
      timestamp: new Date(),
    };
    let messageArray = [...messages];
    messageArray.unshift(newMessage);
    setMessages(messageArray);
    setWaitingForResponse(true);
    setTimeout(() => {
      messageArray.unshift({
        content: "Hi",
        author: "xeno",
        timestamp: new Date(),
      });
      setMessages(messageArray);
      setWaitingForResponse(false);
    }, 2000);
  };
  return (
    <div className="chat-page">
      <ChatHeader />
      <div className="chat-messages">
        {waitingForResponse && <MessageLoader className="message-loader" />}
        {messages.map((message, index) => (
          <Message
            content={message.content}
            key={index}
            author={message.author}
            timestamp={message.timestamp}
          />
        ))}
      </div>
      <ChatInput sendMessage={sendMessage} />
    </div>
  );
};

export default ChatPage;
