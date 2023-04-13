import { FriendCard } from './FriendCard';

export const FriendList = ({ friends }) => {
  return (
    <ul class="friend-list">
      {friends.map(friend => (
        <li key={friend.id}>
          <FriendCard friend={friend}></FriendCard>
        </li>
      ))}
    </ul>
  );
};
