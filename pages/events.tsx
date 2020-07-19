import { FunctionComponent } from "react";
import Head from "next/head";

import MainLayout from "../layouts/MainLayout";

type EventsProps = {};

const Events: FunctionComponent<EventsProps> = () => {
  return (
    <MainLayout>
      <Head>
        <title>CSA Events</title>
      </Head>
      <h1 className="title">Upcoming Events</h1>
      <p className="subtitle">List of events wow so cool</p>
    </MainLayout>
  );
};

export default Events;
