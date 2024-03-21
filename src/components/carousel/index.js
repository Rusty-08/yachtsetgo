import { Box, IconButton, Paper, Typography } from '@mui/material'
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
  const { onClick, sx } = props;
  return (
    <RightArrow sx={sx} onClick={onClick}>
      <Typography sx={{ fontSize: '0.9rem', letterSpacing: '2px' }}>Next</Typography>
      <Icon icon="heroicons:arrow-long-right-solid" width="1.8rem" />
    </RightArrow>
  )
}

function CustomPrevArrow(props) {
  const { onClick, sx } = props;
  return (
    <LeftArrow sx={sx} onClick={onClick}>
      <Icon icon="heroicons:arrow-long-left-solid" width="1.8rem" />
      <Typography sx={{ fontSize: '0.9rem', letterSpacing: '2px' }}>Prev</Typography>
    </LeftArrow>
  )
}

export const DefaultPaging = () => {
  return (
    <Box sx={{ border: '1px solid red' }}>
      <IconButton sx={{ width: '2rem', height: '2rem' }}>
        <Icon icon="mdi:dot" width='2em' />
      </IconButton>
    </Box>
  )
}

function FadeSlider({
  children,
  prevArrowStyles,
  nextArrowStyles,
  paging,
  customDots,
  AddedSettings,
  ...props
}) {
  const settings = {
    customPaging: function (i) {
      return (
        <Box>{!paging ? <DefaultPaging /> : paging(i)}</Box>
      )
    },
    appendDots: dots => (
      customDots ? customDots(dots) : <Box>{dots}</Box>
    ),
    nextArrow: <CustomNextArrow sx={nextArrowStyles} />,
    prevArrow: <CustomPrevArrow sx={prevArrowStyles} />,
    dots: true,
    fade: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 300,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    cssEase: "linear",
    ...AddedSettings
  }

  return (
    <Box sx={{ maxWidth: '100%', position: 'relative' }} className="slider-container" {...props}>
      <Slider {...settings}>
        {children}
      </Slider>
    </Box>
  )
}

export default FadeSlider