import React from 'react'
import { SectionWrapper } from '../hero-slider'
import Image from 'next/image'
import FadeSlider, { SliderOverlay } from '@/components/carousel'
import { Box, useMediaQuery, useTheme } from '@mui/material'
import { Header } from '@/components/section-header'
import { boatTypes } from './dummy-data'
import Boat from './boat'

const sliderAddedSettings = {
  dots: false,
  fade: false,
  slidesToShow: 4,
  responsive: [
    {
      breakpoint: 960,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
}

const BoatTypes = () => {
  const isMobile = useMediaQuery(theme => theme.breakpoints.down('sm'))

  return (
    <SectionWrapper sx={{ px: 0 }}>
      <Box sx={{ position: 'relative', display: 'flex' }}>
        <Image
          src='/landingassets/images/slider-img-03.png'
          alt=''
          width="0"
          height="0"
          sizes="100vw"
          style={{ width: '100%', height: '50rem', objectFit: 'cover' }} />
        <SliderOverlay
          sx={{
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            py: 12,
            bgcolor: 'rgba(7, 15, 43, 0.5)',
            gap: 4,
          }}
        >
          <Header
            subHeader='Our Finest Offers'
            color='light'
            style={{ padding: '0 0 2rem 2rem', paddingRight: isMobile ? 0 : '25%' }}>
            Indicate your chosen boat variety
          </Header>
          <FadeSlider
            prevArrowStyles={{
              transform: isMobile ? 'translateY(5rem)' : 'translateY(-28rem)',
              left: 'calc(100% - 14rem)'
            }}
            nextArrowStyles={{
              transform: isMobile ? 'translateY(5rem)' : 'translateY(-28rem)',
              right: '3rem'
            }}
            AddedSettings={sliderAddedSettings}
          >
            {boatTypes.map(boat => (
              <Boat key={boat.id} boat={boat} />
            ))}
          </FadeSlider>
        </SliderOverlay>
      </Box>
    </SectionWrapper>
  )
}

export default BoatTypes