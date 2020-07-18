import { FunctionComponent } from "react";
import Head from "next/head";

import Navbar from "./Navbar";

type MainLayoutProps = {};

const MainLayout: FunctionComponent<MainLayoutProps> = ({ children }) => {
  return (
    <div className="layout">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Julius+Sans+One&family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Navbar></Navbar>
      {children}
    </div>
  );
};

export default MainLayout;
