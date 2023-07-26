import LogisticsItem from '../LogisticsItem/LogisticsItem';
import s from './EventLogistics.module.css';
import DateIcon from "@/components/icons/DateIcon";
import AddressIcon from "@/components/icons/AddressIcon";
import Image from 'next/image';

function EventLogistics(props) {
  const { date, address, image, imageAlt } = props;

  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  const addressText = address.replace(', ', '\n');

  return (
    <section className={s.logistics}>
      <div className={s.image}>
        <Image
          src={`/${image}`}
          alt={imageAlt}
          width={400}
          height={400}
        />
      </div>
      <ul className={s.list}>
        <LogisticsItem icon={DateIcon}>
          <time>{humanReadableDate}</time>
        </LogisticsItem>
        <LogisticsItem icon={AddressIcon}>
          <address>{addressText}</address>
        </LogisticsItem>
      </ul>
    </section>
  );
}

export default EventLogistics;
