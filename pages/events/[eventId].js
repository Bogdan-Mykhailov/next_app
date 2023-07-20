import React from 'react';
import {useRouter} from "next/router";
import {getEventById} from "@/data";
import EventSummary from "@/components/eventDetail/EventSummary/EventSummary";
import EventLogistics from "@/components/eventDetail/EventLogistics/EventLogistics";
import EventContent from "@/components/eventDetail/EventContent/EventContent";
import ErrorAlert from "@/components/ui/ErrorAlert/ErrorAlert";

const EventDetailPage = () => {
  const router = useRouter();
  const id = router.query.eventId;
  const currentEvent = getEventById(id)

  if (!currentEvent) {
    return (
      <ErrorAlert>
        <p>No event found!</p>
      </ErrorAlert>
    )
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
