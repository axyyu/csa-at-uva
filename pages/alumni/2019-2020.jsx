import Head from 'next/head';

import MainLayout from '../../layouts/MainLayout';
import AlumniYearView from '../../components/views/AlumniYearView';

const alumniList = [
  'Aaron Ho ^',
  'Brian Chin ^',
  'Chealsea Cho ^',
  'Christina Wei ^',
  'Cindy Lin #^',
  'Daniel Wu ^*',
  'Devin Kim *',
  'Dorian Nguyen',
  'Jeewoo Kim ^*',
  'Jerry Lu *',
  'Jessica Xu ^',
  'Katie Shen #^*',
  'Kelly Xie ^*',
  'Kelvin Huynh*',
  'Mark Jeong ^',
  'Raymond Huang ^',
  'Ruolin Chen #^*',
  'Ryan Yi #^*',
  'Sandy Gould *',
  'Selinie Wang ^*',
  'Steve Hong',
  'Thu Tran',
  'Vylan Tran',
];

const AlumniYear = (props) => {
  return (
    <MainLayout>
      <Head>
        <title>CSA 2019 - 2020</title>
      </Head>
      <h1 className='title'>CSA 2019 - 2020</h1>
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

  const years = [2019, 2020];

  const currentYear = pastYears.filter(
    (obj) => years[0] == obj.startYear && years[1] == obj.endYear
  )[0];

  return {
    props: { currentYear },
  };
}

export default AlumniYear;
