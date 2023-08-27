import { useState, useEffect } from "react";
import "./GalleryPage.css";
import { galleryData } from "../../utils/dummyData";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const GalleryPage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = (index: number) => {
    setCurrentImageIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? galleryData.length - 1 : prevIndex - 1
    );
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === galleryData.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [modalOpen]);

  return (
    <section className="galleryPage">
      <div className="galleryPage-hero">
        <h2>Gallery</h2>
      </div>
      <div className="container">
        <div className="galleryPage__wrapper">
          <div className="galleryPage-bottom">
            {galleryData.map((galleryImg, index) => (
              <img
                src={galleryImg.img}
                key={galleryImg.id}
                onClick={() => openModal(index)}
                alt={`Image ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {modalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="modal-close" onClick={closeModal}>
              &times;
            </span>
            <div className="modal-image">
              <img
                src={galleryData[currentImageIndex].img}
                alt={`Image ${currentImageIndex + 1}`}
              />
            </div>
            <div className="modal-navigation">
              <BsChevronLeft onClick={prevImage} />
              <BsChevronRight onClick={nextImage} />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default GalleryPage;
