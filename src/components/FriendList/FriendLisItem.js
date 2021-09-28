import defaulImage from './default.jpg';

import styles from './FriendListStyle.module.css';

export default function FriendsList({ avatar = defaulImage, name, isOnline }) {
  return (
    <li className={styles.item}>
      <span className={isOnline ? styles.status : styles.offline}>ּּ</span>
      <img className={styles.avatar} src={avatar} alt={name} width="48" />
      <p className={styles.name}>{name}</p>
    </li>
  );
}
