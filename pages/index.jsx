import Head from "next/head";

import MainLayout from "../layouts/MainLayout";

const Home = () => {
  return (
    <MainLayout>
      <Head>
        <title>CSA@UVA</title>
      </Head>

      <div className="home-view">
        {/* <div className="home-img-container">
          <img
            src="https://images.unsplash.com/photo-1508804185872-d7badad00f7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
            alt="Home image"
          />
        </div> */}
        <h1>
          Welcome to <span className="highlight">CSA at UVA</span>
        </h1>
        <p className="mission-statement">
          The Chinese Student Association (CSA), as one of the largest
          Asian-American cultural organizations on grounds, seeks to promote
          awareness and appreciation for traditional and modern Chinese culture
          within the University and greater Charlottesville community. CSA hosts
          an array of cultural and social events designed to reach out to and
          bring together both native and ethnic Chinese, as well as the
          non-Chinese populations of UVA, in order to share and celebrate
          Chinese culture.
        </p>

        <div className="next-week"></div>

        <section className="family">
          <h2>Join a Family</h2>
        </section>
        <section className="officers">
          <h2>Talk to Our Officers</h2>
        </section>

        <section className="gallery">
          <h2>View Our Past Events</h2>
        </section>
      </div>
    </MainLayout>
  );
};

export default Home;
