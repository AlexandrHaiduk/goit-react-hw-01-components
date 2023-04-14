import { FriendCard } from './FriendCard';
import css from './friendList-styles.module.css';

export const FriendList = ({ friends }) => {
  return (
    <ul class={css.friend__list}>
      {friends.map(friend => (
        <li key={friend.id} className={css.friend__item}>
          <FriendCard friend={friend}></FriendCard>
        </li>
      ))}
    </ul>
  );
};
