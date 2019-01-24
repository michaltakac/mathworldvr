import React from "react";
import App, { Container } from "next/app";
import ReactGA from "react-ga";

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }: any) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  componentDidMount() {
    // Google Analytics
    ReactGA.initialize("UA-39924303-2");
    ReactGA.pageview(window.location.pathname + window.location.search);

    // A-frame Components by community
    require("aframe");
    require("aframe-teleport-controls");
    // Libraries used by MathworldVR (Three.js, custom A-Frame components, etc.)
    require("../src/lib");
    // Initialize aframe-physics-system
    require("aframe-physics-system");
    require("aframe-extras");
    require("super-hands");
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Component {...pageProps} />
      </Container>
    );
  }
}
