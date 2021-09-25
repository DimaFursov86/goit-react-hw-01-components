import styles from './FriendListStyle.module.css';
export default function Section({ children }) {
  return <div className={styles.friendsSection}>{children}</div>;
}
