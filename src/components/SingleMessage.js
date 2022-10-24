import React, { useRef, useState } from 'react';

const SingleMessage = ({ msg, index, replyMessage }) => {
  const [showReply, setShowReply] = useState(false);
  const nameRef = useRef();
  const messageRef = useRef();

  const sendReply = () => {
    const msg = {
      user: nameRef.current.value,
      message: messageRef.current.value,
      index,
    };
    replyMessage(msg);
  };

  return (
    <div>
      <div>
        <b>{msg.message.user}:</b>
        <span className="pl-20">{msg.message.message}</span>
      </div>
      <div className="pl-20">
        {msg.replies.map((reply, index) => (
          <div key={index}>
            <b>{reply.user}:</b>
            <span className="pl-20">{reply.message}</span>
          </div>
        ))}
      </div>
      <button onClick={() => setShowReply(!showReply)}>Show Reply</button>
      {showReply && (
        <div>
          <input ref={nameRef} type="text" placeholder="name" />
          <input ref={messageRef} type="text" placeholder="message" />
          <button onClick={sendReply}>Send</button>
        </div>
      )}
    </div>
  );
};

export default SingleMessage;
