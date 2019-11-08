import React, { Component, createRef } from 'react';
import styles from '../styles/MessageFeed.module.css';

export default class MessageFeed extends Component {
  listRef = createRef();

  getSnapshotBeforeUpdate(prevProps, prevState) {
    // scrollHeight - полная высота контента включая тот который не виден
    // scrollTop - высота невидимого контента сверху
    // offsetHeight - высота элемента

    // Пример: offsetHeight (1000px) - (scrollTop (200px) + scrollHeight(600px))

    // тут мы останавливаем прокрутку в удобном для нас месте
    if (prevProps.items !== this.props.items) {
      const { scrollTop, scrollHeight, offsetHeight } = this.listRef.current;
      const distanceFromButton = scrollHeight - (scrollTop + offsetHeight);

      return { shouldScroll: distanceFromButton < 10 };
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // тут прокрутка опускаяется в самый низ автоматически при условии, что расстояние между нижней точкой и ползунком не превышает 10px
    // snapshot - это тот return, который мы получем из getSnapshotBeforeUpdate()
    if (snapshot && snapshot.shouldScroll) {
      const listRef = this.listRef.current;
      listRef.scrollTop = listRef.scrollHeight;
    }
  }

  render() {
    return (
      <ul ref={this.listRef} className={styles.list}>
        {this.props.items.map(item => (
          <li key={item.id}>
            <p>{item.text}</p>
            <p>
              <b>Created at:</b> {new Date(item.createdAt).toLocaleString()}
              <hr />
            </p>
          </li>
        ))}
      </ul>
    );
  }
}
