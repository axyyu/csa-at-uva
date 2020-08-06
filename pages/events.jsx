import Head from 'next/head';

import MainLayout from '../layouts/MainLayout';
import EventsTimelineView from '../components/views/EventsTimelineView';

const Events = (props) => {
  return (
    <MainLayout>
      <Head>
        <title>CSA Events</title>
      </Head>
      <h1 className='title'>Upcoming Events</h1>
      <p className='subtitle'>
        Save the date! Below is a list of upcoming meetings, performances, and
        activities.
      </p>

      <EventsTimelineView></EventsTimelineView>
    </MainLayout>
  );
};

export default Events;
