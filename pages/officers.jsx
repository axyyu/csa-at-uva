import Head from "next/head";

import MainLayout from "../layouts/MainLayout";
import OfficersView from "../components/OfficersView";

const officers = [
  {
    officerId: "1",
    officerName: "Bimothy Ban",
    officerImg:
      "https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/people19.png",
    roleName: "Example Role",
    exec: true,
  },
  {
    officerId: "2",
    officerName: "Bimothy Ban",
    officerImg:
      "https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/people19.png",
    roleName: "Exec role",
    exec: false,
  },
  {
    officerId: "3",
    officerName: "Bimothy Ban",
    officerImg:
      "https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/people19.png",
    roleName: "Historian",
    exec: false,
  },
  {
    officerId: "4",
    officerName: "Bimothy Ban",
    officerImg:
      "https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/people19.png",
    roleName: "Culture",
    exec: false,
  },
];

const Officers = (props) => {
  return (
    <MainLayout>
      <Head>
        <title>CSA Officers</title>
      </Head>
      <h1 className="title">Our Officers</h1>
      <p className="subtitle">List of Officers wow so cool</p>
      <OfficersView officers={officers}></OfficersView>
    </MainLayout>
  );
};

export default Officers;
