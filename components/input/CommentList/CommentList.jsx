import s from './CommentList.module.css';

function CommentList(props) {
  const { items } = props;

  return (
    <ul className={s.comments}>
      {items.map((items) => (
        <li key={items._id}>
          <p>{items.text}</p>
          <div>
            By <address>{items.name}</address>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default CommentList;
