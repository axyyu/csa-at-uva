import { FunctionComponent } from "react";
import Head from "next/head";

import MainLayout from "../layouts/MainLayout";

type HomeProps = {};

const Home: FunctionComponent<HomeProps> = () => {
  return (
    <MainLayout>
      <Head>
        <title>CSA@UVA</title>
      </Head>
    </MainLayout>
  );
};

export default Home;
