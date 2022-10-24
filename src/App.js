import { useState } from 'react';
import './App.css';
import Chat from './components/Chat';
import ChatMessageSend from './components/ChatMessageSend';
import { post } from './plugins/http';

function App() {
  const [messages, setMessages] = useState([]);

  const sendMessage = async (msg) => {
    const data = await post('addMessage', msg);
    setMessages(data.messages);
  };

  const replyMessage = async (msg) => {
    const data = await post('reply', msg);
    setMessages(data.messages);
  };

  return (
    <div className="chatWrapper d-flex flex-column">
      <Chat messages={messages} replyMessage={replyMessage} />
      <ChatMessageSend sendMessage={sendMessage} />
    </div>
  );
}

export default App;
