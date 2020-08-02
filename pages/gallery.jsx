import Head from 'next/head';

import MainLayout from '../layouts/MainLayout';
import GalleryView from '../components/GalleryView';

const galleries = [
  {
    name: 'Sleepy Sloths',
    galleryImg:
      'https://images.unsplash.com/photo-1518998053901-5348d3961a04?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
    date: '1596151392154',
  },
  {
    name: 'Sleepy Sloths',
    galleryImg:
      'https://images.unsplash.com/photo-1518998053901-5348d3961a04?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
    date: '1596151392154',
  },
  {
    name: 'Sleepy Sloths',
    galleryImg:
      'https://images.unsplash.com/photo-1518998053901-5348d3961a04?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
    date: '1596151392154',
  },
  {
    name: 'Sleepy Sloths',
    galleryImg:
      'https://images.unsplash.com/photo-1518998053901-5348d3961a04?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
    date: '1596151392154',
  },
  {
    name: 'Sleepy Sloths',
    galleryImg:
      'https://images.unsplash.com/photo-1518998053901-5348d3961a04?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
    date: '1596151392154',
  },
  {
    name: 'Sleepy Sloths',
    galleryImg:
      'https://images.unsplash.com/photo-1518998053901-5348d3961a04?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
    date: '1596151392154',
  },
  {
    name: 'Sleepy Sloths',
    galleryImg:
      'https://images.unsplash.com/photo-1518998053901-5348d3961a04?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
    date: '1596151392154',
  },
];

const Gallery = () => {
  return (
    <MainLayout>
      <Head>
        <title>CSA Gallery</title>
      </Head>
      <h1 className='title'>Gallery</h1>
      <p className='subtitle'>Lots of pictures wow so cool</p>
      <GalleryView galleries={galleries}></GalleryView>
    </MainLayout>
  );
};

export default Gallery;
