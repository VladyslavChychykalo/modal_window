import React, { Component, createRef } from 'react';
import { backdrop, modal } from '../styles/Modal.module.css';

export default class Modal extends Component {
  backdropRef = createRef();

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress = e => {
    if (e.code !== `Escape`) return;

    this.props.onClose();
  };

  handleBackdropClick = e => {
    const { current } = this.backdropRef;

    if (current && e.target !== current) return;

    this.props.onClose();

    // console.log(e.target);
    // console.log(this.backdropRef);
  };

  render() {
    return (
      <div
        className={backdrop}
        ref={this.backdropRef}
        onClick={this.handleBackdropClick}
      >
        <div className={modal}>{this.props.children}</div>
      </div>
    );
  }
}
