import css from './friendList-styles.module.css';

export const FriendCard = ({ friend: { avatar, name, isOnline } }) => {
  return (
    <>
      {isOnline ? (
        <span className={css.isOnline}></span>
      ) : (
        <span className={css.isOffline}></span>
      )}

      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </>
  );
};
