import Head from 'next/head';

import MainLayout from '../layouts/MainLayout';
import HomeView from '../components/views/HomeView';

const Home = (props) => {
  return (
    <MainLayout>
      <Head>
        <title>CSA@UVA</title>
      </Head>

      <HomeView home={props.home} />
    </MainLayout>
  );
};

export async function getStaticProps(context) {
  const res = await fetch('https://csa-at-uva-cms.uk.r.appspot.com/api/home');
  const home = await res.json();

  return {
    props: { home },
  };
}

export default Home;
