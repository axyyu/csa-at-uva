import Head from 'next/head';

import MainLayout from '../../layouts/MainLayout';
import GalleryView from '../../components/views/GalleryView';

const Gallery = (props) => {
  return (
    <MainLayout>
      <Head>
        <title>CSA Gallery</title>
      </Head>
      <h1 className='title'>Gallery</h1>
      <p className='subtitle'>
        A collection of photo albums from past events and activities.
      </p>
      <GalleryView galleries={props.galleries}></GalleryView>
    </MainLayout>
  );
};

export async function getStaticProps(context) {
  const res = await fetch(
    'https://csa-at-uva-cms.uk.r.appspot.com/api/gallery'
  );
  const galleries = await res.json();

  return {
    props: { galleries },
  };
}

export default Gallery;
