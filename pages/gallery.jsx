import Head from 'next/head';

import MainLayout from '../layouts/MainLayout';

const Gallery = () => {
  return (
    <MainLayout>
      <Head>
        <title>CSA Gallery</title>
      </Head>
      <h1 className='title'>Gallery</h1>
      <p className='subtitle'>Lots of pictures wow so cool</p>
    </MainLayout>
  );
};

export default Gallery;
