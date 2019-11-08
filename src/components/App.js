import React, { Component } from 'react';
import Modal from './Modal/Modal';

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
          <Modal onClose={this.closeModal}>
            <h1>Modal Content</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
              saepe!
            </p>
            <button onClick={this.closeModal}>Close</button>
          </Modal>
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
