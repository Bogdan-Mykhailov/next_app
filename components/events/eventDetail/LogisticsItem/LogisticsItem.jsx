import s from './LogisticsItem.module.css';

function LogisticsItem({ icon: Icon, children }) {

  return (
    <li className={s.item}>
      <span className={s.icon}>
        <Icon />
      </span>
      <span className={s.content}>{children}</span>
    </li>
  );
}

export default LogisticsItem;
