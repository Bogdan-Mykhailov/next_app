import React from 'react';
import {useRouter} from "next/router";
import {getFilteredEvents} from "@/data";
import EventList from "@/components/events/EventList/EventList";
import ResultsTitle from "@/components/events/ResultsTitle/ResultsTitle";
import Button from "@/components/ui/Button/Button";
import ErrorAlert from "@/components/ui/ErrorAlert/ErrorAlert";

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
    return (
      <>
        <ErrorAlert>
          <p>Invalid filter. Please adjust your values</p>
        </ErrorAlert>

        <div className={'center'}>
          <Button link={'/events'}>Show All Events</Button>
        </div>
      </>
    )
  }

  const filteredEvents = getFilteredEvents({
    year: filteredYear,
    month: filteredMonth
  });

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <>
        <ErrorAlert>
          <p>No events found for chosen filter!</p>
        </ErrorAlert>

        <div className={'center'}>
          <Button link={'/events'}>Show All Events</Button>
        </div>
      </>
    );
  }

  const date = new Date(filteredYear, filteredMonth - 1);

  return (
    <>
      <ResultsTitle date={date}/>
      <EventList events={filteredEvents}/>
    </>
  );
};

export default FilteredEventsPage;
