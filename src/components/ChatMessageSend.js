import React, { useRef } from 'react';

const ChatMessageSend = ({ sendMessage }) => {
  const nameRef = useRef();
  const messageRef = useRef();

  const send = () => {
    const msg = {
      user: nameRef.current.value,
      message: messageRef.current.value,
    };

    sendMessage(msg);
  };

  return (
    <div>
      <input ref={nameRef} type="text" placeholder="name" />
      <textarea ref={messageRef} name="" id="" cols="30" rows="3 " placeholder="message"></textarea>
      <button onClick={send}>Send Message</button>
    </div>
  );
};

export default ChatMessageSend;
