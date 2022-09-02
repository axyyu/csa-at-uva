import Head from 'next/head';

import MainLayout from '../layouts/MainLayout';

const Forms = (props) => {
  return (
    <MainLayout>
      <Head>
        <title>Forms</title>
      </Head>
      <h1 className='title'>Important Forms/Links</h1>
      <p className='subtitle'>
        Find all the current signup sheets and forms for members here!
      </p>
    </MainLayout>
  );
};

export async function getStaticProps(context) {
  const res = await fetch(
    'https://csa-at-uva-cms.uk.r.appspot.com/api/families'
  );
  const families = await res.json();

  return {
    props: { families },
  };
}

export default Forms;