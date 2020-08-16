import Head from 'next/head';
import Link from 'next/link';
import { FaChevronLeft } from 'react-icons/fa';
import moment from 'moment';

import MainLayout from '../../layouts/MainLayout';
import PhotosView from '../../components/views/PhotosView';

const Photos = (props) => {
  return (
    <MainLayout>
      <Head>
        <title>{props.name}</title>
      </Head>

      <Link href='/gallery'>
        <a className='breadcrumb'>
          <FaChevronLeft />
          Back to Gallery
        </a>
      </Link>

      <h1 className='title'>{props.name}</h1>
      <p className='subtitle'>
        Published {moment(props.datetime).format('MMMM Do, YYYY')}
      </p>

      <PhotosView images={props.images}></PhotosView>
    </MainLayout>
  );
};

export async function getStaticProps(context) {
  const galleryId = context.params.id;
  const res = await fetch(
    `https://csa-at-uva-cms.uk.r.appspot.com/api/gallery/${galleryId}`
  );
  const gallery = await res.json();

  return {
    props: gallery,
  };
}

export async function getStaticPaths() {
  const res = await fetch(
    'https://csa-at-uva-cms.uk.r.appspot.com/api/gallery'
  );
  const galleries = await res.json();

  const paths = galleries.map((gallery) => ({
    params: { id: gallery.id },
  }));

  return { paths, fallback: false };
}

export default Photos;
