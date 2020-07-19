import { FunctionComponent } from "react";
import Head from "next/head";

import MainLayout from "../layouts/MainLayout";

type AlumniProps = {};

const Alumni: FunctionComponent<AlumniProps> = () => {
  return (
    <MainLayout>
      <Head>
        <title>CSA Alumni</title>
      </Head>
      <h1 className="title">Past Alumni</h1>
      <p className="subtitle">List of Alumni wow so cool</p>
    </MainLayout>
  );
};

export default Alumni;
