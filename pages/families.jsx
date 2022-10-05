import Head from 'next/head';

import MainLayout from '../layouts/MainLayout';
import FamilyView from '../components/views/FamilyView';

const Families = (props) => {
  return (
    <MainLayout>
      <Head>
        <title>CSA Families</title>
      </Head>
      <h1 className='title'>Meet Our Families</h1>
      <p className='subtitle'>
        Every year, all CSA members are assigned to different families. Families
        play a major role in building the CSA community.
      </p>
      <FamilyView families={props.families}></FamilyView>
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

export default Families;
