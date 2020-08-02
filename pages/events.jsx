import Head from 'next/head';

import MainLayout from '../layouts/MainLayout';
import EventsTimelineView from '../components/EventsTimelineView';

const Events = (props) => {
  return (
    <MainLayout>
      <Head>
        <title>CSA Events</title>
      </Head>
      <h1 className='title'>Upcoming Events</h1>
      <p className='subtitle'>List of events wow so cool</p>

      <EventsTimelineView events={props.events}></EventsTimelineView>
    </MainLayout>
  );
};

export async function getServerSideProps(context) {
  const proto = context.req.connection.encrypted ? 'https' : 'http';
  const baseUrl = `${proto}://${context.req.headers.host}/api/events`;
  const res = await fetch(baseUrl);
  let data = null;
  try {
    data = await res.json();
    data = data.items;
  } catch (err) {
    data = [];
  }
  return {
    props: { events: data }, // will be passed to the page component as props
  };
}

export default Events;