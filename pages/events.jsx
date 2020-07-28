import { FunctionComponent } from 'react';
import axios from 'axios';
import Head from 'next/head';

import MainLayout from '../layouts/MainLayout';
import EventsTimelineView from '../components/EventsTimelineView';

type EventsProps = {
  events: [];
};

const Events: FunctionComponent<EventsProps> = () => {
  return (
    <MainLayout>
      <Head>
        <title>CSA Events</title>
      </Head>
      <h1 className='title'>Upcoming Events</h1>
      <p className='subtitle'>List of events wow so cool</p>

      <EventsTimelineView events={[]}></EventsTimelineView>
    </MainLayout>
  );
};

export async function getServerSideProps(context) {
  const res = await axios.get('/api/events');
  return {
    props: { events: res.items }, // will be passed to the page component as props
  };
}

export default Events;
