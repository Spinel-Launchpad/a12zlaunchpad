"use client";
import NextDocument, { Head, Html, Main, NextScript } from "next/document";
import { Images } from "../shared/const/Images";

const { FAVICON } = Images;

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="description" content="Apex AI" />
          <link rel="stylesheet" href="/static/css/satoshi.css" />
          <link rel="shortcut icon" href={FAVICON} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
