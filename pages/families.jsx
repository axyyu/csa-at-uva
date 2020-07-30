import Head from 'next/head';

import MainLayout from '../layouts/MainLayout';
import FamilyView from '../components/FamilyView';

const families = [
  {
    name: 'Sleepy Sloths',
    animalIcon: 'families/slothIcon.png',
    animalImg: 'families/slothImg.png',
    image: 'families/group-photo.png',
    desc: 'Sloths are sleepy',
  },
  {
    name: 'Cheeky Chipmunks',
    animalIcon: 'families/chipmunkIcon.png',
    animalImg: 'families/chipmunkImg.png',
    image: 'families/group-photo.png',
    desc: 'Chipmunks are cheeky',
  },
  {
    name: 'Pouncing Penguins',
    animalIcon: 'families/penguinIcon.png',
    animalImg: 'families/penguinImg.png',
    image: 'families/group-photo.png',
    desc: 'Penguins are pouncing',
  },
];

const Families = () => {
  return (
    <MainLayout>
      <Head>
        <title>CSA Families</title>
      </Head>
      <h1 className='title'>Meet Our Families</h1>
      <p className='subtitle'>Wow so cool</p>
      <FamilyView families={families}></FamilyView>
    </MainLayout>
  );
};

export default Families;
