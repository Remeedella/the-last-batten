import React from "react";
import Layout from "../../components/Layout";
import Header from "../../components/Header";
import { Helmet } from "react-helmet";

export default function lifestyle() {
 
  return (
    <Layout>
      <Header />
    <Helmet>
    <title>Lifestyle Gallery</title>
    <meta name="description" content="Photography & Videography Website" />
    </Helmet> 
    <main>  
        <div className="title text-center display-1">
    lifestyle <span className="fs-2 text-secondary">gallery</span></div>
    <h2>some text to put about</h2>
    </main>
    </Layout>
  );
}