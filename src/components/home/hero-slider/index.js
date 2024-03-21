import FadeSlider, { SliderOverlay } from '@/components/carousel'
import { contents } from '@/components/home/hero-slider/dummy-data'
import CustomButton from '@/components/ui/button';
import { Box, Typography } from '@mui/material'
import { styled } from '@mui/material/styles';
import Image from 'next/image';

export const SectionWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: '4rem 2rem',
  [theme.breakpoints.down('sm')]: {
    padding: '3rem 0rem',
  }
}))

const StyledHeader = styled(Typography)(({ theme }) => ({
  fontFamily: theme.typography.marcellus.fontFamily,
  letterSpacing: '5px',
  fontSize: 'clamp(2rem, 6vw, 4.5rem)'
}))

const StyledSliderWrapper = styled(Box)(({ theme }) => ({
  height: 'auto',
  width: '100%',
  [theme.breakpoints.down('sm')]: {
    height: '100vh',
    width: 'auto'
  }
}))

const StyledVideo = styled('video')(({ theme }) => ({
  display: 'flex',
  zIndex: -1,
  width: '100%',
  objectFit: 'cover',
  maxHeight: 'calc(100vh + 150px)',
  [theme.breakpoints.down('md')]: {
    height: '100vh',
    width: 'auto'
  }
}))

const StyledTypograpy = styled(Typography)(({ theme }) => ({
  padding: '0 25%',
  letterSpacing: '1px',
  fontWeight: 300,
  [theme.breakpoints.down('md')]: {
    padding: '0 10%'
  }
}))

const ImagePagingWrapper = styled(Box)(({ theme }) => ({
  margin: '0 10px',
  transform: 'translateY(1rem)',
  border: '6px solid white',
  [theme.breakpoints.down('md')]: {
    display: 'none'
  }
}))

const heroSliderPaging = (i) => {
  return (
    <ImagePagingWrapper className='image-wapper'>
      <Image
        width={280}
        style={{ display: 'flex' }}
        height={150}
        alt={`Slider-img-0${i + 1}`}
        src={`/landingassets/images/slider-img-0${i + 1}.png`} />
      <SliderOverlay sx={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', }} className='overlay' />
    </ImagePagingWrapper>
  )
}

const StyledSliderDots = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    '& .slick-active .overlay': {
      display: 'none'
    },
  },
  '& .slick-active .image-wapper': {
    display: 'inline-block'
  }
}))

const heroSliderDots = (dots) => {
  return (
    <StyledSliderDots>
      {dots}
    </StyledSliderDots>
  )
}

const HeroSlider = () => {
  return (
    <FadeSlider paging={heroSliderPaging} customDots={heroSliderDots}>
      {contents.map(media =>
        <StyledSliderWrapper key={media.id} sx={{ position: 'relative' }}>
          <StyledVideo autoPlay loop muted>
            <source src={media.content} type="video/mp4" />
          </StyledVideo>
          <SliderOverlay sx={{ pb: 5, cursor: 'grab' }}>
            <Typography variant='body1' sx={{ letterSpacing: '1px' }}>
              {media.subHeader}
            </Typography>
            <StyledHeader variant='h2' sx={{ width: '80%' }}>
              {media.header}
            </StyledHeader>
            <StyledTypograpy variant='body1'>{media.description}</StyledTypograpy>
            <CustomButton variant='contained' sx={{ mt: 2 }}>Explore Now</CustomButton>
          </SliderOverlay>
        </StyledSliderWrapper>
      )}
    </FadeSlider>
  )
}

export default HeroSlider