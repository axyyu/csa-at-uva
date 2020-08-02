import { Component, cloneElement, Children } from "react";
import Head from "next/head";

import Navbar from "./Navbar";
import Newsletter from "../components/Newsletter";

class MainLayout extends Component {
  constructor(props) {
    super(props);
    this.state = { newsletter: false };
  }
  openNewsletter() {
    this.setState({ newsletter: true });
  }
  closeNewsletter() {
    this.setState({ newsletter: false });
  }
  render() {
    let elements = Children.toArray(this.props.children);

    elements = elements.map((obj) => {
      return cloneElement(obj, {
        openNewsletter: this.openNewsletter.bind(this),
      });
    });
    return (
      <>
        <Head>
          <link rel="shortcut icon" href="/favicon.png" />
          <link
            href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
          ></link>
        </Head>
        <div className="layout">
          <Navbar></Navbar>
          <div className="content-wrapper">
            <div className="content">{elements}</div>
          </div>
        </div>

        {this.state.newsletter && (
          <Newsletter closeNewsletter={this.closeNewsletter.bind(this)} />
        )}
      </>
    );
  }
}

export default MainLayout;
