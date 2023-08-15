import React from 'react';
import EventList from "@/components/events/EventList/EventList";
import {getFeaturedEvents} from "@/helpers/api-util";
import Head from "next/head";
import NewsletterRegistration from "@/components/input/NewsletterRegistration/NewsletterRegistration";

const HomePage = (props) => {
  return (
    <div>
      <Head>
        <title>NextJS Events</title>
        <meta name="description" content="Find a lot of great events that allow you to evolve..."/>
      </Head>

      <NewsletterRegistration />

      <EventList events={props.events}/>
    </div>
  );
};

export const getStaticProps = async () => {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      events: featuredEvents
    }, revalidate: 1800
  }
}

export default HomePage;
