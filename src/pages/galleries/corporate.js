import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { photos } from "../../components/photosCorporate";
import Layout from "../../components/Layout";
import Header from "../../components/Header";
import Other from "../../components/Other";
import Footer from "../../components/Footer";
import { Helmet } from "react-helmet";
import { Link } from "gatsby"

export default function Corporate() {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };
  return (
    <Layout>
      <Header />
    <Helmet>
    <title>Corporate Gallery</title>
    <meta name="description" content="Photography & Videography Website" />
    </Helmet> 
    <main>  
        <div className="title text-center">
    <h1 className="display-1">corporate <span className="display-5 text-secondary">gallery</span></h1></div>
    <div className="container px-xs-1 py-xs-1 px-md-3 py-5-md"><br /></div>
    <Gallery style={{padding: '10px'}} photos={photos} direction={"column"} onClick={openLightbox} />
    <div>
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
    <br />
    
    
    </main>
    <Other>
      <u>
        <ul className="nav justify-content-center"><li className="nav-item"><Link to="/galleries/corporate" className="nav-link">firstOne</Link></li>
        <li className="nav-item"><Link to="/" className="nav-link">secondOne</Link></li>
        </ul>
        <ul className="nav justify-content-center">
        <li className="nav-item"><Link to="/" className="nav-link">thirdOne</Link></li>
        <li className="nav-item"><Link to="/" className="nav-link">fourthOne</Link></li>
        </ul>
    </u>
    </Other>
    <Footer />
    </Layout>
  );
}