import React from 'react'
import { SectionWrapper } from '../hero-slider'
import FadeSlider, { SliderOverlay } from '@/components/carousel'
import { Box, useMediaQuery, useTheme } from '@mui/material'
import { Header } from '@/components/section-header'
import Yacht from './yacht'
import { yachts } from './dummy-data'

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

const Yachts = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme => theme.breakpoints.down('sm'))

  return (
    <SectionWrapper sx={{ px: 0, [theme.breakpoints.down('sm')]: { px: 0 } }}>
      <Box sx={{ position: 'relative', display: 'flex', height: '50rem' }}>
        <SliderOverlay
          sx={{
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            py: 12,
            bgcolor: 'rgba(0, 156, 194, 0.1)',
            gap: 4,
            px: isMobile ? 0 : 3,
          }}
        >
          <Header
            subHeader='Luxury on the High Seas'
            style={{
              padding: isMobile ? '0 1rem 1rem 1rem' : '0 25% 2rem 0.5rem',
            }}
          >
            Discover Our Exquisite Yachts
          </Header>
          <FadeSlider
            prevArrowStyles={{
              transform: isMobile ? 'translateY(5rem)' : 'translateY(-28rem)',
              left: 'calc(100% - 14rem)',
              color: 'secondary.dark'
            }}
            nextArrowStyles={{
              transform: isMobile ? 'translateY(5rem)' : 'translateY(-28rem)',
              right: '3rem',
              color: 'secondary.dark'
            }}
            style={{ height: '100%', width: '100%' }}
            AddedSettings={sliderAddedSettings}
          >
            {yachts.map(yacht => (
              <Yacht key={yacht.id} yacht={yacht} />
            ))}
          </FadeSlider>
        </SliderOverlay>
      </Box>
    </SectionWrapper>
  )
}

export default Yachts