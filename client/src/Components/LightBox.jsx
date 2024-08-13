import * as React from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function Box({ images }) {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      {/* Display the first image as a thumbnail */}
      {images.length > 0 && (
        <img
          src={images[0]} // Show the first image as a thumbnail
          alt="Thumbnail Image"
          onClick={() => setOpen(true)}
          style={{ cursor: "pointer" }}
          className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl h-auto mx-auto object-cover" // Responsive sizing
        />
      )}

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={images.map((img, index) => ({
          src: img,
          alt: `Image ${index + 1}`,
          width: 3840, // Adjust width and height according to your images
          height: 2560,
        }))}
        styles={{
          container: { maxWidth: "100%", maxHeight: "100%" }, // Limit lightbox size
          image: { objectFit: "contain", maxWidth: "100%", maxHeight: "100%" }, // Ensure image fits within the viewport
        }}
      />
    </>
  );
}
