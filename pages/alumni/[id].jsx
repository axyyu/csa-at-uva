import Head from 'next/head';
import Link from 'next/link';
import { FaChevronLeft } from 'react-icons/fa';

import MainLayout from '../../layouts/MainLayout';
import AlumniYearView from '../../components/views/AlumniYearView';

const AlumniYear = (props) => {
  return (
    <MainLayout>
      <Head>
        <title>CSA Class of {props.endYear}</title>
      </Head>

      <Link href='/alumni'>
        <a className='breadcrumb'>
          <FaChevronLeft />
          Back to Alumni
        </a>
      </Link>

      <h1 className='title'>CSA Class of {props.endYear}</h1>
      <p className='subtitle'>A Walk Down Memory Lane</p>
      <AlumniYearView
        chinafest={props.chinafestImg}
        alumniList={props.people}
      ></AlumniYearView>
    </MainLayout>
  );
};

export async function getStaticProps(context) {
  const alumniId = context.params.id;
  const res = await fetch(
    `https://csa-at-uva-cms.uk.r.appspot.com/api/alumni/${alumniId}`
  );
  const pastYear = await res.json();

  return {
    props: pastYear,
  };
}

export async function getStaticPaths() {
  const res = await fetch('https://csa-at-uva-cms.uk.r.appspot.com/api/alumni');
  const pastYears = await res.json();

  const paths = pastYears.map((alumni) => ({
    params: { id: alumni.id },
  }));

  return { paths, fallback: false };
}

export default AlumniYear;
