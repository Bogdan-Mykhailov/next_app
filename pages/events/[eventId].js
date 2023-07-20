import React from 'react';
import {useRouter} from "next/router";
import {getEventById} from "@/data";
import EventSummary from "@/components/events/eventDetail/EventSummary/EventSummary";
import EventLogistics from "@/components/events/eventDetail/EventLogistics/EventLogistics";
import EventContent from "@/components/events/eventDetail/EventContent/EventContent";

const EventDetailPage = () => {
  const router = useRouter();
  const id = router.query.eventId;
  const currentEvent = getEventById(id)

  if (!currentEvent) {
    return <p>No event found!</p>
  }
  const {
    description,
    title,
    date,
    location,
    image
  } = currentEvent;

  return (
    <>
      <EventSummary title={title} />

      <EventLogistics
        date={date}
        address={location}
        image={image}
        imageAlt={title}
      />

      <EventContent>
        <p>{ description }</p>
      </EventContent>
    </>
  );
};

export default EventDetailPage;
