import React from 'react';
import PropTypes from 'prop-types';

import './MessageList.css';

const MessageList = props => {

    const { messages, user, removeMessage } = props;
  
    return (

        <ul className="message-list">
            {messages.map((message, index) => (
                <li
                    key={index}
                    className={
                        message.username === user.username 
                        ? 'message sender' 
                        : 'message recipient'
                    }
                >
                    <p>
                        {`${message.username}: ${message.text}`}
                        <button onClick={() => removeMessage(message)}>X</button>
                    </p>
                </li>
            ))}
        </ul>
  );
};

MessageList.propTypes = {
    messages: PropTypes.array.isRequired,
    user: PropTypes.object.isRequired,
};

export default MessageList;