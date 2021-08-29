import React from "react";
import Layout from "../components/Layout";
import { Helmet } from "react-helmet";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { StaticImage } from "gatsby-plugin-image";

export default function About() {
  return (
    
    <Layout>
      <Header />
    <Helmet>
    <title>About me</title>
    <meta name="description" content="Photography & Videography Website" />
    </Helmet>
    
    <main>  
      <div className="title text-center display-1">about</div>
    <div className="d-flex">
    <StaticImage src="../images/photographer.jpg" alt="Photographer photo" className="img-fluid px-5 py-5" />
      <div className="px-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at felis vitae nulla pulvinar bibendum. Nunc vehicula magna lobortis ligula aliquam malesuada. In lorem sapien, suscipit non justo vel, auctor congue ipsum. Pellentesque fermentum, justo laoreet tristique pulvinar, mauris risus consequat massa, ac rutrum nisl risus nec nisi. Nulla faucibus accumsan augue. Suspendisse faucibus ipsum quam. Ut et congue nunc, ut rutrum risus. Duis venenatis, sapien id tempor pharetra, magna lectus sollicitudin arcu, sed volutpat augue metus id lectus. Maecenas elementum ante dapibus quam dictum condimentum. Pellentesque vel massa suscipit, congue ligula sit amet, tincidunt tortor. Duis pulvinar nisi a enim aliquet, et aliquam sapien condimentum. Fusce molestie augue vitae orci luctus, nec lobortis justo egestas. Curabitur nibh tortor, fermentum in pellentesque imperdiet, consequat at neque.
      <br /><br />
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at felis vitae nulla pulvinar bibendum. Nunc vehicula magna lobortis ligula aliquam malesuada.
      </div>
    </div><br /><br />
<div className="blockquote">Mauris aliquet ipsum non turpis congue, vitae auctor magna accumsan. In non est vel turpis blandit iaculis id at massa. Phasellus augue mauris, scelerisque nec vestibulum sed, rutrum id velit. Suspendisse sit amet ultricies risus. Sed dictum dictum libero, eget maximus urna dapibus ac. Morbi laoreet purus id odio interdum maximus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla quis semper nunc. Nulla ultricies bibendum ipsum. Phasellus sit amet turpis auctor, elementum velit vel, eleifend sapien. Vestibulum sapien mauris, aliquam id enim eu, egestas dignissim arcu. Suspendisse faucibus elit turpis. Curabitur non fermentum lorem. Pellentesque dui dui, elementum sit amet ante sit amet, malesuada laoreet purus. Cras sit amet ultricies massa. Morbi eget justo arcu.
</div>
</main>
    <Footer />
    </Layout>
  );
}