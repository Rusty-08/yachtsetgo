import { Avatar, Box, Grid, IconButton, Paper, Typography } from '@mui/material'
import React from 'react'
import { hightlights, services, testimonials } from './dummy-data';
import { Icon } from '@iconify/react';
import CustomButton from '@/components/ui/button';
import { Header, HeaderTitle, SectionHeader } from '@/components/section-header';
import FadeSlider, { SliderOverlay } from '@/components/carousel';
import Image from 'next/image';
import { styled } from '@mui/material/styles';

const aboutTheFirmPaging = (i) => {
  return (
    <IconButton className='icon-dots' color='primary' sx={{ width: '2rem', height: '2rem', mx: 1 }}>
      <Icon icon="mdi:dot" />
    </IconButton>
  )
}

const StyledSliderDots = styled(Box)(({ theme }) => ({
  '& .slick-active .icon-dots': {
    background: 'rgba(0, 0, 0, 0.05)',
  },
}))

const aboutTheFirmDots = (dots) => {
  return (
    <StyledSliderDots>{dots}</StyledSliderDots>
  )
}

const AboutTheFirmWraper = styled(Box)(({ theme }) => ({
  padding: '7rem 2rem',
  [theme.breakpoints.down('sm')]: {
    padding: '5rem 1rem',
  }
}))

const AboutTheFirm = () => {
  return (
    <AboutTheFirmWraper>
      <Grid container columnSpacing={{ md: 4 }} rowSpacing={{ xs: 10, md: 4 }}>
        <Grid item xs={12} md={6}>
          <Header subHeader='About The Firm'>FANTASTIC SERVICES PROVIDED BY YACHT</Header>
          <Grid sx={{ mt: 2 }} container spacing={2}>
            {services.map((service, index) => (
              <Grid key={index} item xs={12} sm={6} md={6}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Avatar sx={{ width: '4rem', height: '4rem', color: 'primary.main', bgcolor: 'rgba(0, 156, 194, 0.1)' }}>
                    <Icon height='2rem' icon={service.icon} />
                  </Avatar>
                  <Typography>{service.name}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
          <Box sx={{ mt: 6, display: 'flex' }}>
            <CustomButton color='dark' variant='contained'>View More</CustomButton>
            <CustomButton sx={{ gap: 1, color: 'secondary.dark' }} variant='text'>
              Book Your Yacht
              <Icon icon="heroicons:arrow-long-right-solid" width="1.8rem" />
            </CustomButton>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Grid container columnSpacing={2} rowSpacing={{ xs: 10, md: 4 }}>
            <Grid item xs={12} sm={6} md={6}>
              <FadeSlider
                AddedSettings={{ arrows: false, autoplay: true }}
                paging={aboutTheFirmPaging}
                customDots={aboutTheFirmDots}
              >
                {hightlights.map(media => (
                  <Box key={media.id} sx={{ height: '30rem', cursor: 'grab' }}>
                    <Image
                      src={media.image}
                      alt={media.title}
                      layout='fill'
                      style={{ maxWidth: '100%', maxHeight: '80%', objectFit: 'cover' }} />
                    <SliderOverlay sx={{ bgcolor: 'transparent', justifyContent: 'flex-end', p: 0 }}>
                      <Box sx={{ height: '20%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <HeaderTitle sx={{ fontSize: '1.2rem', color: 'secondary.dark' }}>
                          {media.title}
                        </HeaderTitle>
                      </Box>
                    </SliderOverlay>
                  </Box>
                ))}
              </FadeSlider>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <Box sx={{ height: '34rem', position: 'relative', maxWidth: '100%' }}>
                <Image
                  src='/images/yacht-portrait.jpg'
                  alt=''
                  width="0"
                  height="0"
                  sizes="100vw"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <FadeSlider
                  sx={{ position: 'absolute', inset: 0, top: '20rem' }}
                  AddedSettings={{ arrows: false, dots: false, fade: false }}
                >
                  {testimonials.map(testimonial => (
                    <Box key={testimonial.user} sx={{ height: '14rem', width: '100%', position: 'relative' }}>
                      <SliderOverlay
                        sx={{ bgcolor: 'rgba(0, 0, 0, 0.6)', px: 2, cursor: 'grab' }}
                      >
                        <Typography style={{ lineHeight: 1.6, letterSpacing: '1px' }}>
                          {'❝'}{testimonial.message}{'❞'}
                        </Typography>
                        <SectionHeader
                          sx={{
                            textAlign: 'end',
                            fontSize: '1.1rem',
                            width: '100%',
                            color: 'primary.light',
                            letterSpacing: '2px'
                          }}
                        >
                          {'— '}{testimonial.user}
                        </SectionHeader>
                      </SliderOverlay>
                    </Box>
                  ))}
                </FadeSlider>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </AboutTheFirmWraper>
  )
}

export default AboutTheFirm