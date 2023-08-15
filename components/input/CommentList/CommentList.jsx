import s from './CommentList.module.css';

function CommentList(props) {
  const { items } = props;

  return (
    <ul className={s.comments}>
      {items.map(({ id, name, text }) => (
        <li key={id}>
          <p>{text}</p>
          <div>
            By <address>{name}</address>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default CommentList;
