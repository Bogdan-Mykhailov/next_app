import React from 'react';
import EventSummary from "@/components/eventDetail/EventSummary/EventSummary";
import EventLogistics from "@/components/eventDetail/EventLogistics/EventLogistics";
import EventContent from "@/components/eventDetail/EventContent/EventContent";
import ErrorAlert from "@/components/ui/ErrorAlert/ErrorAlert";
import { getEventById, getFeaturedEvents } from "@/helpers/api-util";

const EventDetailPage = (props) => {
  const {currentEvent} = props;

  if (!currentEvent) {
    return (
      <div className="center">
        <p>Loading...</p>
      </div>
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
      <EventSummary title={title}/>

      <EventLogistics
        date={date}
        address={location}
        image={image}
        imageAlt={title}
      />

      <EventContent>
        <p>{description}</p>
      </EventContent>
    </>
  );
};

export const getStaticProps = async (context) => {
  const eventId = context.params.eventId;
  const currentEvent = await getEventById(eventId)

  return {
    props: {currentEvent},
    revalidate: 30
  }
}

export const getStaticPaths = async () => {
  const events = await getFeaturedEvents();

  const paths = events.map(({ id }) => (
    { params: { eventId: id } }
  ))

  return {
    paths,
    fallback: true
  }
}

export default EventDetailPage;
