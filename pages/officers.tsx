import { FunctionComponent } from "react";
import Head from "next/head";

import MainLayout from "../layouts/MainLayout";

type OfficersProps = {};

const Officers: FunctionComponent<OfficersProps> = () => {
  return (
    <MainLayout>
      <Head>
        <title>CSA Officers</title>
      </Head>
      <h1 className="title">Our Officers</h1>
      <p className="subtitle">List of Officers wow so cool</p>
    </MainLayout>
  );
};

export default Officers;
