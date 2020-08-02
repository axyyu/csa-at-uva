import Head from "next/head";

import MainLayout from "../layouts/MainLayout";
import HomeView from "../components/HomeView";

const Home = () => {
  return (
    <MainLayout>
      <Head>
        <title>CSA@UVA</title>
      </Head>

      <HomeView />
    </MainLayout>
  );
};

export default Home;
