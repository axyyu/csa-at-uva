import { FunctionComponent } from "react";
import Head from "next/head";

import Navbar from "./Navbar";

type MainLayoutProps = {};

const MainLayout: FunctionComponent<MainLayoutProps> = ({ children }) => {
  return (
    <div className="layout">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Julius+Sans+One&Quicksand:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Navbar></Navbar>
      <div className="content">{children}</div>
      <footer></footer>
    </div>
  );
};

export default MainLayout;
