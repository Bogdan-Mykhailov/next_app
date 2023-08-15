import React from 'react';
import s from './EventItem.module.css'
import Button from "@/components/ui/Button/Button";
import DateIcon from "@/components/icons/DateIcon";
import AddressIcon from "@/components/icons/AddressIcon";
import ArrowRightIcon from "@/components/icons/ArrowRightIcon";
import Image from 'next/image'

const EventItem = ({event}) => {
  const {
    id,
    title,
    location,
    image,
    date,
  } = event;

  const readableDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const formattedAddress = location.replace(', ', '\n');
  const link = `/events/${id}`;

  return (
    <li className={s.item}>
      <Image src={'/' + image} priority={true} alt={title} width={250} height={160}/>

      <div className={s.content}>
        <div>
          <h2>{title}</h2>
        </div>

        <div className={s.date}>
          <DateIcon/>
          <time>{readableDate}</time>
        </div>

        <div className={s.address}>
          <AddressIcon/>
          <address>{formattedAddress}</address>
        </div>

        <div className={s.actions}>
          <Button link={link}>
            <span>Explore Event</span>
            <span className={s.icon}><ArrowRightIcon/></span>
          </Button>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
