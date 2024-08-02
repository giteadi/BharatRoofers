import * as React from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function Box({ images }) {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      {/* Replace button with an image */}
      {images.length > 0 && (
        <img
          src={images[0]} // Show the first image as a thumbnail
          alt="Thumbnail Image"
          onClick={() => setOpen(true)}
          style={{ cursor: "pointer" }}
          className="max-w-[50rem] h-[30rem] mx-auto"
        />
      )}

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={images.map((img, index) => ({
          src: img,
          alt: `Image ${index + 1}`,
          width: 3840, // Adjust width and height according to your images
          height: 2560
        }))}
      />
    </>
  );
}
