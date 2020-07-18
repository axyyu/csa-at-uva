import { FunctionComponent } from "react";
import Head from "next/head";

import MainLayout from "../layouts/MainLayout";

type FamiliesProps = {};

const Families: FunctionComponent<FamiliesProps> = () => {
  return (
    <MainLayout>
      <Head>
        <title>CSA Families</title>
      </Head>
    </MainLayout>
  );
};

export default Families;
