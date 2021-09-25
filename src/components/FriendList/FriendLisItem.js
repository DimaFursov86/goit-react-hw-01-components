import defaulImage from './default.jpg';

import styles from './FriendListStyle.module.css';

export default function FriendsList({ avatar = defaulImage, name, isOnline }) {
  return (
    <li className={styles.item}>
      <span
        className={styles.status}
        style={{ color: isOnline ? 'green' : 'red' }}
      >
        ּּ
      </span>
      <img className={styles.avatar} src={avatar} alt={name} width="48" />
      <p className={styles.name}>{name}</p>
    </li>
  );
}
