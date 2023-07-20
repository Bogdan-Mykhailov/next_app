import React from 'react';
import {useRouter} from "next/router";
import {getFilteredEvents} from "@/data";
import EventList from "@/components/events/EventList/EventList";

const FilteredEventsPage = () => {
  const router = useRouter();
  const filteredData = router.query.slug;

  if (!filteredData) {
    return <p className='center'>Loading...</p>
  }

  const filteredYear = +filteredData[0];
  const filteredMonth = +filteredData[1];

  if (
    isNaN(filteredYear) ||
    isNaN(filteredMonth) ||
    filteredYear > 2030 ||
    filteredYear < 2021 ||
    filteredMonth < 1 ||
    filteredMonth > 12
  ) {
    return <p>Invalid filter. Please adjust your values</p>
  }

  const filteredEvents = getFilteredEvents({
    year: filteredYear,
    month: filteredMonth
  });

  if (!filteredEvents || filteredEvents.length === 0) {
    return <p>No events found for chosen filter!</p>
  }

  return (
    <div>
      <EventList events={filteredEvents}/>
    </div>
  );
};

export default FilteredEventsPage;
