import s from './EventContent.module.css';

function EventContent({ children }) {
  return (
    <section className={s.content}>
      { children }
    </section>
  );
}

export default EventContent;
