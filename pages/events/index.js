import React from 'react';
import EventList from "@/components/events/EventList/EventList";
import EventsSearch from "@/components/events/EventsSearch/EventsSearch";
import {useRouter} from "next/router";
import {getAllEvents} from "@/helpers/api-util";
import Head from "next/head";

const EventsPage = (props) => {
  const router = useRouter();
  const {events} = props;

  const handleFindEvents = (year, month) => {
    const path = `/events/${year}/${month}`;

    router.push(path)
  }

  return (
    <>
      <Head>
        <title>All Events</title>
        <meta name="description" content="Find a lot of great events that allow you to evolve..."/>
      </Head>
      <EventsSearch onSearch={handleFindEvents}/>
      <EventList events={events}/>
    </>
  );
};

export const getStaticProps = async () => {
  const events = await getAllEvents();

  return {
    props: { events },
    revalidate: 60
  }
}

export default EventsPage;
