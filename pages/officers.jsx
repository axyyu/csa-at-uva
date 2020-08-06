import Head from 'next/head';

import MainLayout from '../layouts/MainLayout';
import OfficersView from '../components/views/OfficersView';

const Officers = (props) => {
  return (
    <MainLayout>
      <Head>
        <title>CSA Officers</title>
      </Head>
      <h1 className='title'>Our Officers</h1>
      <p className='subtitle'>
        Here are the officers that organize all the CSA events!
      </p>
      <OfficersView officers={props.officers}></OfficersView>
    </MainLayout>
  );
};

export async function getStaticProps(context) {
  const res = await fetch(
    'https://csa-at-uva-cms.uk.r.appspot.com/api/officers'
  );
  const officers = await res.json();

  return {
    props: { officers },
  };
}

export default Officers;
