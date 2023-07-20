import React from 'react';
import {getAllEvents} from "@/data";
import EventList from "@/components/events/EventList/EventList";
import EventsSearch from "@/components/events/EventsSearch/EventsSearch";
import {useRouter} from "next/router";

const EventsPage = () => {
  const events = getAllEvents();
  const router = useRouter();

  const handleFindEvents = (year, month) => {
    const path = `/events/${year}/${month}`;

    router.push(path)
  }

  return (
    <>
      <EventsSearch onSearch={handleFindEvents}/>
      <EventList events={events}/>
    </>
  );
};

export default EventsPage;
