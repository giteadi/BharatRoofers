import * as React from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import pic1 from '../Assets/3dHouse2.jpg';
import pic2 from '../Assets/3dhouse.jpg';
import pic3 from '../Assets/3dhouse3.jpg';
import pic4 from '../Assets/Background-Computer.webp';
import pic5 from '../Assets/Background-Mobile3.jpg';

export default function Box() {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      {/* Replace button with an image */}
      <img
        src={pic1}
        alt="Thumbnail Image"
        onClick={() => setOpen(true)}
        style={{ cursor: "pointer"}}
        className="max-w-[50rem] h-[30rem] mx-auto"
      />

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={[
          {
            src: pic1,
            alt: "Image 1",
            width: 3840,
            height: 2560,
            srcSet: [
              { src: pic1, width: 3840, height: 2560 },
              { src: pic2, width: 320, height: 213 },
              { src: pic3, width: 2048, height: 1365 },
            ],
          },
          {
            src: pic2,
            alt: "Image 2",
            width: 3840,
            height: 2560,
            srcSet: [
              { src: pic2, width: 3840, height: 2560 },
              { src: pic3, width: 320, height: 213 },
              { src: pic4, width: 2048, height: 1365 },
            ],
          },
          {
            src: pic3,
            alt: "Image 3",
            width: 3840,
            height: 2560,
            srcSet: [
              { src: pic3, width: 3840, height: 2560 },
              { src: pic4, width: 320, height: 213 },
              { src: pic5, width: 2048, height: 1365 },
            ],
          },
          {
            src: pic4,
            alt: "Image 4",
            width: 3840,
            height: 2560,
            srcSet: [
              { src: pic4, width: 3840, height: 2560 },
              { src: pic5, width: 320, height: 213 },
              { src: pic1, width: 2048, height: 1365 },
            ],
          },
          {
            src: pic5,
            alt: "Image 5",
            width: 3840,
            height: 2560,
            srcSet: [
              { src: pic5, width: 3840, height: 2560 },
              { src: pic1, width: 320, height: 213 },
              { src: pic2, width: 2048, height: 1365 },
            ],
          },
        ]}
      />
    </>
  );
}
