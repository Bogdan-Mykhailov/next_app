import React from 'react';
import {getEventById, getFeaturedEvents} from "@/data";
import EventList from "@/components/events/EventList/EventList";

const HomePage = () => {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <EventList events={featuredEvents}/>
    </div>
  );
};

export default HomePage;
