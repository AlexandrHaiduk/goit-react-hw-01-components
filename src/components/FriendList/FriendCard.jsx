import css from './friendList-styles.module.css';

export const FriendCard = ({ friend: { avatar, name, isOnline } }) => {
  return (
    <>
      <span className={css.status}>{isOnline}</span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </>
  );
};
