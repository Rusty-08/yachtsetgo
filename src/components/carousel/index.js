import { Box, Paper, Typography } from '@mui/material'
import React, { useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Image from 'next/image'
import { styled, useTheme } from '@mui/material/styles';
import { Icon } from '@iconify/react'

export const SliderOverlay = styled(Box)(({ theme }) => ({
  position: 'absolute',
  inset: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  backgroundColor: 'rgba(0, 156, 194, 0.4)',
  color: 'white',
  zIndex: 5,
  textAlign: 'center',
  gap: '1rem'
}))

const SliderArrow = styled(Box)(({ theme }) => ({
  position: 'absolute',
  bottom: '5%',
  zIndex: 5,
  color: 'white',
  opacity: 0.7,
  display: 'flex',
  alignItems: 'center',
  gap: '0.3rem',
  cursor: 'pointer',
  '&:hover': {
    opacity: 1
  }
}))

const LeftArrow = styled(SliderArrow)(({ theme }) => ({
  left: '10%',
  [theme.breakpoints.down('sm')]: {
    left: '20%',
    opacity: 1
  },
}))

const RightArrow = styled(SliderArrow)(({ theme }) => ({
  right: '10%',
  [theme.breakpoints.down('sm')]: {
    right: '20%'
  },
}))

function CustomNextArrow(props) {
  const { onClick } = props;
  return (
    <RightArrow onClick={onClick}>
      <Typography sx={{ fontSize: '0.9rem', }}>Next</Typography>
      <Icon icon="heroicons:arrow-long-right-solid" width="1.8rem" />
    </RightArrow>
  )
}

function CustomPrevArrow(props) {
  const { onClick } = props;
  return (
    <LeftArrow onClick={onClick}>
      <Icon icon="heroicons:arrow-long-left-solid" width="1.8rem" />
      <Typography sx={{ fontSize: '0.9rem', }}>Prev</Typography>
    </LeftArrow>
  )
}

const ImagePagingWrapper = styled(Box)(({ theme }) => ({
  margin: '0 10px',
  transform: 'translateY(1rem)',
  border: '6px solid white',
  [theme.breakpoints.down('md')]: {
    display: 'none'
  }
}))

function FadeSlider({ children }) {
  const theme = useTheme()

  const settings = {
    customPaging: function (i) {
      return (
        <ImagePagingWrapper className='image-wapper'>
          <Image
            width={280}
            style={{ display: 'flex' }}
            height={150}
            alt={`Slider-img-0${i + 1}`}
            src={`/images/slider-img-0${i + 1}.png`} />
          <SliderOverlay sx={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', }} className='overlay' />
        </ImagePagingWrapper>
      )
    },
    appendDots: dots => (
      <Box sx={{
        [theme.breakpoints.up('md')]: {
          '& .slick-active .overlay': {
            display: 'none'
          },
        },
        '& .slick-active .image-wapper': {
          display: 'inline-block'
        }
      }}>
        {dots}
      </Box>
    ),
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    dots: true,
    fade: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <Box className="slider-container">
      <Slider {...settings}>
        {children}
      </Slider>
    </Box>
  )
}

export default FadeSlider