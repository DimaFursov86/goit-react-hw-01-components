import defaulImage from './default.jpg';
// import PropTypes from 'prop-types'

export default function FriendsList({ avatar = defaulImage, name, isOnline }) {
  return (
    <li className="item">
      <span className="status"></span>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </li>
  );
}

// FriendsList.propTypes = {
//    id: PropTypes.string.isRequired,
//    avatar: PropTypes.string.isRequired,
//    name: PropTypes.string.isRequired,
//    isOnline: PropTypes.bool.isRequired
// }
