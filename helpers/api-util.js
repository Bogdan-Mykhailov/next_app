export const getAllEvents = async () => {
	const response = await fetch('https://nextjs-course-5635a-default-rtdb.europe-west1.firebasedatabase.app/events.json');
  const data = await response.json();
  const events = [];

  for (const eventsKey in data) {
    events.push({
      id: eventsKey,
      ...data[eventsKey]
    })
  }

  return events;
}

export const getFeaturedEvents =  async () => {
  const allEvents = await getAllEvents();

  return allEvents.filter((event) => event.isFeatured);
}


export const getEventById = async (id) => {
  const allEvents = await getAllEvents();

  return allEvents.find((event) => event.id === id);
}
