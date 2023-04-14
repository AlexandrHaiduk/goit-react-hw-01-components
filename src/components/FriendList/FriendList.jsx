import { FriendCard } from './FriendCard';
import PropTypes from 'prop-types';
import css from './friendList-styles.module.css';

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friend__list}>
      {friends.map(friend => (
        <li key={friend.id} className={css.friend__item}>
          <FriendCard friend={friend}></FriendCard>
        </li>
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};
