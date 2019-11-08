import React, { Component } from 'react';
import styles from '../styles/Editor.module.css';

export default class Editor extends Component {
  state = { text: '' };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onAddMessage(
      this.state.text !== ''
        ? this.state.text
        : `${'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis, ipsam!'}`,
    );

    this.setState({ text: '' });
  };

  handleChange = e => {
    this.setState({
      text: e.target.value,
    });
  };

  render() {
    const { text } = this.state;
    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <input
          className={styles.input}
          type="text"
          value={text}
          onChange={this.handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}
