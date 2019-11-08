import React, { Component } from 'react';
import MessageFeed from './MessageFeed/MessageFeed';
import Editor from './Editor/Editor';
import styles from './styles/Chat.module.css';
import shortid from 'shortid';

export default class Chat extends Component {
  state = {
    messages: [],
  };

  addMessage = text => {
    const message = {
      id: shortid.generate(),
      text,
      createdAt: new Date().toISOString(),
    };

    this.setState(state => ({
      messages: [...state.messages, message],
    }));
  };

  render() {
    return (
      <div className={styles.chat}>
        <Editor onAddMessage={this.addMessage}></Editor>
        <MessageFeed items={this.state.messages}></MessageFeed>
      </div>
    );
  }
}
