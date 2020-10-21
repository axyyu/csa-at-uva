import Head from 'next/head';

import MainLayout from '../../layouts/MainLayout';
import AlumniYearView from '../../components/views/AlumniYearView';

const alumniList = [
  'Anna Wang #^*',
  'Brandon Liu ^*',
  'Carolyn Louie ^',
  'Charles Chen ^',
  'Christopher Liu ^',
  'Grace Chu ^',
  'Hiu Hiu Sau',
  'Jeffrey Ding ^*',
  'Jennifer Zhou #^',
  'Kevin Wu ^*',
  'Lily Zhang',
  'Melissa E ^*',
  'Rachel Yi',
  'Rahul Taludhar #^',
  'Samantha Mori ^',
  'Sean Hong #^*',
  'Sherry Chan',
  'Sophia Lam ^',
  'Stephanie Ham ^*',
  'Talia Lee *',
  'Tanya Yoon',
  'Vivien Ho ^',
];

const AlumniYear = (props) => {
  return (
    <MainLayout>
      <Head>
        <title>CSA 2018 - 2019</title>
      </Head>
      <h1 className='title'>CSA 2018 - 2019</h1>
      <p className='subtitle'>What a cool year</p>
      <AlumniYearView
        currentYear={props.currentYear}
        alumniList={props.alumniList}
      ></AlumniYearView>
    </MainLayout>
  );
};

export async function getStaticProps(context) {
  const res = await fetch('https://csa-at-uva-cms.uk.r.appspot.com/api/alumni');
  const pastYears = await res.json();

  const years = [2018, 2019];

  const currentYear = pastYears.filter(
    (obj) => years[0] == obj.startYear && years[1] == obj.endYear
  )[0];

  return {
    props: { currentYear },
  };
}

export default AlumniYear;
