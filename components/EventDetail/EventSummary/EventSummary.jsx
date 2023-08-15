import s from './EventSummary.module.css';

function EventSummary({ title }) {

  return (
    <section className={s.summary}>
      <h1>{title}</h1>
    </section>
  );
}

export default EventSummary;
