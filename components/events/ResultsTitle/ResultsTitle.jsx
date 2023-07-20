import s from './ResultsTitle.module.css';
import Button from "@/components/ui/Button/Button";

function ResultsTitle(props) {
  const { date } = props;

  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  });

  return (
    <section className={s.title}>
      <h1>Events in {humanReadableDate}</h1>

      <Button link='/events'>
        Show all events
      </Button>
    </section>
  );
}

export default ResultsTitle;
