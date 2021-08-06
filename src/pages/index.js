import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { photos } from "../components/photos";
import Layout from "../components/Layout";
import { Helmet } from "react-helmet";
import Header from "../components/Header";

export default function Home() {
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
    <main>
    <Helmet>
<title>The Last Batten - Home</title>
<meta name="description" content="Photography & Videography Website" />
    </Helmet>
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
  )}