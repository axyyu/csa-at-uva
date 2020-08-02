import Head from "next/head";

import MainLayout from "../layouts/MainLayout";
import OfficersView from "../components/OfficersView";

const Officers = (props) => {
  return (
    <MainLayout>
      <Head>
        <title>CSA Officers</title>
      </Head>
      <h1 className="title">Our Officers</h1>
      <p className="subtitle">List of Officers wow so cool</p>
      <OfficersView officers={props.officers}></OfficersView>
    </MainLayout>
  );
};

export async function getStaticProps(context) {
  const proto = context.req.connection.encrypted ? "https" : "http";
  const baseUrl = `${proto}://${context.req.headers.host}/api/officers`;
  const res = await fetch(baseUrl);
  let data = null;
  try {
    data = await res.json();
  } catch (err) {
    data = [];
  }
  return {
    props: { officers: data }, // will be passed to the page component as props
  };
}

export default Officers;
