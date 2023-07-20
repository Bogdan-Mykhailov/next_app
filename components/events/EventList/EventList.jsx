import React from 'react';
import EventItem from "@/components/events/EventItem/EventItem";
import s from './EventList.module.css'

const EventList = (props) => {
  const { events } = props;

  return (
    <ul className={s.list}>
      {events.map(event => <EventItem key={event.id} event={event}/>)}
    </ul>
  );
};

export default EventList;
