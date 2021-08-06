import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { photos } from "../../components/photos";
import Layout from "../../components/Layout";
import Header from "../../components/Header";
import { Helmet } from "react-helmet";

export default function lifestyle() {
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
    <title>Lifestyle Gallery</title>
    <meta name="description" content="Photography & Videography Website" />
    </Helmet> 
    <main>  
        <div className="title text-center display-1">
    lifestyle <span className="fs-2 text-secondary">gallery</span></div>
    <h2>some text to put about</h2>
    <Gallery photos={photos} direction={"column"} onClick={openLightbox} />
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
    </main>
    </Layout>
  );
}