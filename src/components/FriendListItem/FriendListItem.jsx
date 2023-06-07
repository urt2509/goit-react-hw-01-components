import PropTypes from 'prop-types';
import { Status, AvatarFriend, NameFriend } from './FriendListItem.styled';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <>
      <Status isOnline={isOnline}></Status>
      <AvatarFriend src={avatar} alt="User avatar" width="48" />
      <NameFriend>{name}</NameFriend>
    </>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.string.isRequired,
};

export { FriendListItem };
