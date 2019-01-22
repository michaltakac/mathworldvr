import React from "react";
import Document, { Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <html>
        <Head>
          <meta name="description" content="MathworldVR" />
          <meta
            name="keywords"
            content="webvr, vr, dimensionlab, mathworld, mathworldvr"
          />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
        <style jsx global>
          {`
            .body {
              background-color: #030404;
            }
          `}
        </style>
      </html>
    );
  }
}
