//Gallery.js
import React, { useState } from "react";
import "./Gallery.css";

// --- Image Data ---
// Replace the `src` with your actual image paths.
const galleryImages = [
    {
        id: 1,
        src: "culturlaNight.jpg",
        title: "Cultural Night",
        category: "Cultural",
    },
    {
        id: 2,
        src: "torchlighting.jpg",
        title: "Torch Lighting",
        category: "Ceremony",
    },
    {
        id: 3,
        src: "prize.jpg",
        title: "Prize Distribution",
        category: "Ceremony",
    },
    {
        id: 4,
        src: "cricket.jpg",
        title: "Cricket",
        category: "Sports",
    },
    {
        id: 5,
        src: "volleyball.jpg",
        title: "Volleyball",
        category: "Sports",
    },
    {
        id: 6,
        src: "basketball.jpg",
        title: "Basketball",
        category: "Sports",
    },
    {
        id: 7,
        src: "badminton.jpg",
        title: "Badminton",
        category: "Sports",
    },
    {
        id: 8,
        src: "highjump.jpg",
        title: "High Jump",
        category: "Athletics",
    },
    {
        id: 9,
        src: "javelin.jpg",
        title: "Javelin Throw",
        category: "Athletics",
    },
    {
        id: 10,
        src: "shotput.jpg",
        title: "Shotput Throw",
        category: "Athletics",
    },
     {
        id: 11,
        src: "race.jpg",
        title: "Race",
        category: "Athletics",
    },
    {
        id: 12,
        src: "yoga.jpg",
        title: "Yoga Session",
        category: "Yoga",
    },
];


export default function Gallery() {
    // State to keep track of the selected image
    const [selectedImage, setSelectedImage] = useState(null);

    // Function to open the modal
    const openModal = (image) => {
        setSelectedImage(image);
    };

    // Function to close the modal
    const closeModal = () => {
        setSelectedImage(null);
    };

    // Function to prevent modal from closing when clicking on the image itself
    const handleImageClick = (e) => {
        e.stopPropagation();
    };


    return (
        <div className="gallery-container">
            <h1 className="gallery-title">Moments of URJA</h1>
            <div className="gallery-grid">
                {galleryImages.map((image) => (
                    <div
                        className="gallery-card"
                        key={image.id}
                        onClick={() => openModal(image)}
                    >
                        <img src={`/gallery/${image.src}`} alt={image.title} className="gallery-image" />
                        <div className="gallery-overlay">
                            <h3 className="gallery-image-title">{image.title}</h3>
                        </div>
                    </div>
                ))}
            </div>

            {/* --- Modal Popup --- */}
            {selectedImage && (
                <div className="gallery-modal" onClick={closeModal}>
                    <span className="modal-close" onClick={closeModal}>&times;</span>
                    <img
                        src={`/gallery/${selectedImage.src}`}
                        alt={selectedImage.title}
                        className="modal-content"
                        onClick={handleImageClick} // Prevents closing when image is clicked
                    />
                     <div className="modal-caption">{selectedImage.title}</div>
                </div>
            )}
        </div>
    );
}