import React, { Component } from 'react';

import './Message.css';

class Message extends Component {

    state = {
      message: '',
    };

    handleInputChange = event => {
        const { value } = event.target;
        this.setState(() => ({
            message: value,
        }));
    };

    handleSubmit = event => {
        event.preventDefault();
        this.props.onMessage(this.state.message);
        this.setState(() => ({
            message: '',
        }));
    };

    /*
    If the user did not type anything, he/she should not be
    allowed to submit.
    */
    isDisabled = () => {
        return this.state.message === '';
    };

    render() {

        const { message } = this.state;

        return(
            <div>
                <form onSubmit={this.handleSubmit} className="input-group">
                <input 
                    type="text" 
                    className="form-control" 
                    value={message}
                    placeholder="Enter your message..." 
                    onChange={this.handleInputChange}
                />
                <div className="input-group-append">
                  <button 
                    className="btn submit-button" 
                    disabled={this.isDisabled()}>
                    SEND
                  </button>
                </div>
              </form>
            </div>
        )
    }
}

export default Message;