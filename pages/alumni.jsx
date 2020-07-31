import Head from "next/head";

import MainLayout from "../layouts/MainLayout";
import AlumniView from "../components/AlumniView";

const alumni = [
  {
    year: 2020,
    families: [
      {
        name: "Sleepy Sloths",
        animalImg: "families/slothImg.png",
      },
      {
        name: "Cheeky Chipmunks",
        animalImg: "families/chipmunkImg.png",
      },
      {
        name: "Pouncing Penguins",
        animalImg: "families/penguinImg.png",
      },
    ],
  },
];

const Alumni = () => {
  return (
    <MainLayout>
      <Head>
        <title>CSA Alumni</title>
      </Head>
      <h1 className="title">Past Alumni</h1>
      <p className="subtitle">List of Alumni wow so cool</p>
      <AlumniView pastYears={alumni}></AlumniView>
    </MainLayout>
  );
};

export default Alumni;
