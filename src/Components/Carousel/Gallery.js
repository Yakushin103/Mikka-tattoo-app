import React from 'react';
import ImageGallery from 'react-image-gallery';
import img_1 from './../../img/work-1.jpg'
import img_2 from './../../img/work-2.jpg'
import img_3 from './../../img/work-3.jpg'
import img_4 from './../../img/work-4.jpg'
import img_5 from './../../img/work-5.jpg'
import img_6 from './../../img/work-6.jpg'
import img_7 from './../../img/work-7.jpg'
import img_8 from './../../img/work-8.jpg'
import img_9 from './../../img/work-9.jpg'
import img_10 from './../../img/work-10.jpg'
import img_11 from './../../img/work-11.jpg'
import img_12 from './../../img/work-12.jpg'
import img_13 from './../../img/work-13.jpg'
import img_14 from './../../img/work-14.jpg'
import img_15 from './../../img/work-15.jpg'

const Gallery = () => {

    const images = [
        {
          original: img_1,
          thumbnail: img_1,
          originalAlt: 'Tattoo photo 1'
        },
        {
            original: img_2,
            thumbnail: img_2,
            originalAlt: 'Tattoo photo 2'
        },
        {
            original: img_3,
            thumbnail: img_3,
            originalAlt: 'Tattoo photo 3'
        },
        {
            original: img_4,
            thumbnail: img_4,
            originalAlt: 'Tattoo photo 4'
          },
          {
              original: img_5,
              thumbnail: img_5,
              originalAlt: 'Tattoo photo 5'
          },
          {
              original: img_6,
              thumbnail: img_6,
              originalAlt: 'Tattoo photo 6'
          },
          {
            original: img_7,
            thumbnail: img_7,
            originalAlt: 'Tattoo photo 7'
        },
        {
            original: img_8,
            thumbnail: img_8,
            originalAlt: 'Tattoo photo 8'
        },
        {
            original: img_9,
            thumbnail: img_9,
            originalAlt: 'Tattoo photo 9'
          },
          {
              original: img_10,
              thumbnail: img_10,
              originalAlt: 'Tattoo photo 10'
          },
          {
              original: img_11,
              thumbnail: img_11,
              originalAlt: 'Tattoo photo 11'
          },
          {
            original: img_12,
            thumbnail: img_12,
            originalAlt: 'Tattoo photo 12'
          },
          {
              original: img_13,
              thumbnail: img_13,
              originalAlt: 'Tattoo photo 13'
          },
          {
              original: img_14,
              thumbnail: img_14,
              originalAlt: 'Tattoo photo 14'
          },
          {
              original: img_15,
              thumbnail: img_15,
              originalAlt: 'Tattoo photo 15'
          },
      ]


    return (
        <>
        <ImageGallery items={images} />
        </>
    );
}

export default Gallery;