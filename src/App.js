import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Components
import GenerateId from './components/Utils/GenerateId';
import Chat from './components/Chat/Chat';

// Users data
const users = [{ username: 'Amy' }, { username: 'Jon' }];

class App extends Component {

  // constructor
  constructor(props) {

      super(props);

      // default state
      const messages = JSON.parse(
          (window.localStorage.getItem('messages') || '[]')
      );

      this.state = {
        messages: messages
      };
  }

  // Update to local storage
  updateLocalStorage = messages => {

      const stringified = JSON.stringify(messages);
      window.localStorage.setItem('messages', stringified);
  };

  // Remove message and update state
  removeMessage = message => {

      if (window.confirm('You are sure')) {

          let {messages} = this.state;

          messages = messages.filter(u => {
              return u.text !== message.text
          });

          this.updateAndSave(messages);
      }
  };

  // Save/Update messages
  updateAndSave = messages => {

      this.updateLocalStorage(messages);
      this.setState({messages});
  };

  // Receive message onHandlerMessage
  onMessageHandler = (username, text) => {

    let {messages} = this.state;

    const newMessage = {
        id: window.btoa(GenerateId(username + text)),
        username,
        text
    };

    if(newMessage.text){
      messages = messages.concat(newMessage);
      this.updateAndSave(messages);
    }
  };

  render() {

    const { messages } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="container">
          {users.map(user => (
            <Chat 
              key={user.username}
              user={user}
              messages={messages}
              onMessage={this.onMessageHandler}
              removeMessage={this.removeMessage}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
