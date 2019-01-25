import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Components
import Message from '../Message/Message';
import MessageList from '../Message/MessageList';

import './Chat.css';

class Chat extends Component {

    onMessage = message => {

        this.props.onMessage(this.props.user.username, message);
    };

    render() {

        const { messages, user, removeMessage } = this.props;

        return(
            <div className="chat-window">
            <h2>Super Awesome Chat</h2>
            <div className="name sender">{user.username}</div>

            {messages.length > 0 && <MessageList 
                messages={messages}
                user={user}
                removeMessage={removeMessage} 
            />}

            <Message 
                onMessage={this.onMessage}              
            />
          </div>
        );
    }
}

Chat.propTypes = {
    onMessage: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
    messages: PropTypes.array.isRequired,
};

export default Chat;