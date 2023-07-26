import React, {useEffect, useState} from 'react';
import {useRouter} from "next/router";
import EventList from "@/components/events/EventList/EventList";
import ResultsTitle from "@/components/events/ResultsTitle/ResultsTitle";
import Button from "@/components/ui/Button/Button";
import ErrorAlert from "@/components/ui/ErrorAlert/ErrorAlert";
import useSWR from "swr";
import Head from "next/head";

const FilteredEventsPage = () => {
  const router = useRouter();
  const [loadedEvents, setLoadedEvents] = useState();
  const filteredData = router.query.slug;

  const fetcher = (url) => fetch(url).then(res => res.json())
  const {data, error} = useSWR(
    'https://nextjs-course-5635a-default-rtdb.europe-west1.firebasedatabase.app/events.json',
    fetcher
  );

  useEffect(() => {
    if (data) {
      const events = [];

      for (const eventsKey in data) {
        events.push({
          id: eventsKey,
          ...data[eventsKey]
        })
      }

      setLoadedEvents(events);
    }
  }, [data]);

  let pageHeadData = <Head>
    <title>Filtered Events</title>
    <meta name="description" content="A list of filtered events."/>
  </Head>;

  if (!loadedEvents) {
    return <>
      {pageHeadData}
      <p className='center'>Loading...</p>
    </>
  }

  const filteredYear = +filteredData[0];
  const filteredMonth = +filteredData[1];

  pageHeadData = <Head>
    <title>Filtered Events</title>
    <meta name="description" content={`All events for ${filteredMonth}/${filteredYear}`}/>
  </Head>

  if (
    isNaN(filteredYear) ||
    isNaN(filteredMonth) ||
    filteredYear > 2030 ||
    filteredYear < 2021 ||
    filteredMonth < 1 ||
    filteredMonth > 12 ||
    error
  ) {
    return (
      <>
        {pageHeadData}

        <ErrorAlert>
          <p>Invalid filter. Please adjust your values</p>
        </ErrorAlert>

        <div className={'center'}>
          <Button link={'/events'}>Show All Events</Button>
        </div>
      </>
    )
  }

  const filteredEvents = loadedEvents.filter((event) => {
    const eventDate = new Date(event.date);

    return eventDate.getFullYear()
      === filteredYear && eventDate.getMonth()
      === filteredMonth - 1;
  });

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
        {pageHeadData}

        <ErrorAlert>
          <p>Invalid filter. Please adjust your values</p>
        </ErrorAlert>

        <div className={'center'}>
          <Button link={'/events'}>Show All Events</Button>
        </div>
      </>
    )
  }

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <>
        {pageHeadData}

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
      {pageHeadData}

      <ResultsTitle date={date}/>

      <EventList events={filteredEvents}/>
    </>
  );
};

export default FilteredEventsPage;
