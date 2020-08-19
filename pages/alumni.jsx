import Head from 'next/head';

import MainLayout from '../layouts/MainLayout';
import AlumniView from '../components/views/AlumniView';

const Alumni = (props) => {
  return (
    <MainLayout>
      <Head>
        <title>CSA Alumni</title>
      </Head>
      <h1 className='title'>Alumni</h1>
      <p className='subtitle'>
        Feeling nostalgic? View CSA's past years, including officers, families,
        and more to relive those memories.
      </p>
      <AlumniView pastYears={props.pastYears}></AlumniView>
    </MainLayout>
  );
};

export async function getStaticProps(context) {
  const res = await fetch('https://csa-at-uva-cms.uk.r.appspot.com/api/alumni');
  const pastYears = await res.json();

  return {
    props: { pastYears },
  };
}

export default Alumni;
