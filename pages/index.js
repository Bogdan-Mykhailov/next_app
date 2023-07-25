import React from 'react';
import EventList from "@/components/events/EventList/EventList";
import {getFeaturedEvents} from "@/helpers/api-util";

const HomePage = (props) => {
  return (
    <div>
      <EventList events={props.events}/>
    </div>
  );
};

export const getStaticProps = async () => {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      events: featuredEvents
    }
  }
}

export default HomePage;
