import { Component } from "solid-js";
import { A } from '@solidjs/router';
import styles from './_Card.module.scss';

const Card: Component = (props) => {
  return (
    <div class={styles['card']}>
      <div class={styles['title']}>
        <h2><A href={props.link}>{props.title}</A></h2>
        <h4>{props.subtitle}</h4>
      </div>
      <ul class={styles['tags']}>
        {props.tags.map(
          (tag) => <li>
            {tag}
          </li>
        )}
      </ul>
      <p>{props.description}</p>
    </div>
  );
}

export default Card
