import React from "react";
import Layout from "../components/Layout";
import { Helmet } from "react-helmet";
import Header from "../components/Header";

export default function About() {
  return (
    
    <Layout>
      <Header />
    <Helmet>
    <title>About me</title>
    <meta name="description" content="Photography & Videography Website" />
    </Helmet>
    
    <main>  
      <div className="title text-center display-1">
        about
    </div>
    <h2>some text to put about</h2>
    </main>
    </Layout>
  );
}