import React from 'react';
import SingleMessage from './SingleMessage';

const Chat = ({ messages, replyMessage }) => {
  return (
    <div className="grow1">
      {messages.map((msg, index) => (
        <SingleMessage key={index} index={index} msg={msg} replyMessage={replyMessage} />
      ))}
    </div>
  );
};

export default Chat;
