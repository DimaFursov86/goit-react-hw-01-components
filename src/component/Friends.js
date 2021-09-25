import FriendListItem from './FriendList';
// import friends from '../../friends.json'
export default function FriendList({ friends }) {
  return (
    <ul>
      {friends.map(friend => (
        <li key={friend.id}>
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        </li>
      ))}
    </ul>
  );
}
