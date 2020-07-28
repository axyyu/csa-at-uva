import Head from 'next/head';

import MainLayout from '../layouts/MainLayout';

const Officers = () => {
  return (
    <MainLayout>
      <Head>
        <title>CSA Officers</title>
      </Head>
      <h1 className='title'>Our Officers</h1>
      <p className='subtitle'>List of Officers wow so cool</p>
    </MainLayout>
  );
};

export default Officers;
