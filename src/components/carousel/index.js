import { Box } from '@mui/material'
import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Image from 'next/image'

function FadeSlider({ contents, overlayColor, children, contentType, sx }) {
  const settings = {
    customPaging: function (i) {
      return (
        <Box sx={{ margin: '0 10px', transform: 'translateY(1rem)', border: '6px solid white' }}>
          <Image
            width={280}
            height={150}
            alt={`Slider-img-0${i + 1}`}
            src={`/images/slider-img-0${i + 1}.png`} />
        </Box>
      )
    },
    dots: true,
    fade: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Box sx={{ height: '100%' }} className="slider-container">
      <Slider {...settings}>
        {contents.map(media =>
          <Box key={media.id} sx={{ width: '100%', height: '100%', position: 'relative' }}>
            {
              contentType === 'video'
                ? (
                  <video
                    autoPlay
                    loop
                    muted
                    style={{
                      width: '100%',
                      display: 'flex',
                      zIndex: -1
                    }}
                  >
                    <source src={media.content} type="video/mp4" />
                  </video>
                ) : (
                  <Image
                    alt=''
                    src={media.content}
                    layout='fill'
                    style={{
                      position: 'absolute',
                      maxHeight: '100%',
                      maxWidth: '100%',
                      objectFit: 'cover',
                      zIndex: -1
                    }} />
                )
            }
            <Box sx={{
              position: 'absolute',
              inset: 0,
              bgcolor: overlayColor ?? 'transparent',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              pb: 10,
              flexDirection: 'column',
              color: 'white',
              zIndex: 5
            }}>
              {children}
            </Box>
          </Box>
        )}
      </Slider>
    </Box>
  )
}

export default FadeSlider