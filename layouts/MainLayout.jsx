import Head from 'next/head';

import Navbar from './Navbar';

const MainLayout = ({ children }) => {
  return (
    <>
      <Head>
        <link rel='shortcut icon' href='/favicon.png' />
        <link
          href='https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap'
          rel='stylesheet'
        ></link>
      </Head>
      <div className='layout'>
        <Navbar></Navbar>
        <div className='content-wrapper'>
          <div className='content'>{children}</div>
        </div>
      </div>
    </>
  );
};

export default MainLayout;
