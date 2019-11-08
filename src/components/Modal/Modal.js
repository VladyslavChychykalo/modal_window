import React, { Component } from 'react';
import ModalWindow from './ModalWindow/ModalWindow';

export default class App extends Component {
  state = { isModalOpen: false };

  openModal = () =>
    this.setState({
      isModalOpen: true,
    });

  closeModal = () =>
    this.setState({
      isModalOpen: false,
    });

  render() {
    return (
      <div>
        <button onClick={this.openModal}>Open</button>
        {this.state.isModalOpen && (
          <ModalWindow onClose={this.closeModal}>
            <h1>Modal Content</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
              saepe!
            </p>
            <button onClick={this.closeModal}>Close</button>
          </ModalWindow>
        )}
      </div>
    );
  }
  // toggleModal = () => {
  //   this.setState(state => ({
  //     isModalOpen: !state.isModalOpen,
  //   }));
  // }
}
