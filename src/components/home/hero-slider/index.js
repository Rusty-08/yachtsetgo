import FadeSlider, { SliderOverlay } from '@/components/carousel'
import { contents } from '@/components/home/hero-slider/hero-slider-data'
import CustomButton from '@/components/ui/button';
import { Box, Typography } from '@mui/material'
import { styled } from '@mui/material/styles';

const StyledHeader = styled(Typography)(({ theme }) => ({
  fontFamily: theme.typography.marcellus.fontFamily,
  letterSpacing: '5px',
  fontSize: 'clamp(2rem, 6vw, 4.5rem)'
}))

const StyledSliderWrapper = styled(Box)(({ theme }) => ({
  height: 'auto',
  width: '100%',
  maxHeight: 'calc(100vh + 130px)',
  [theme.breakpoints.down('sm')]: {
    height: '80vh',
    width: 'auto'
  }
}))

const StyledVideo = styled('video')(({ theme }) => ({
  display: 'flex',
  zIndex: -1,
  width: '100%',
  [theme.breakpoints.down('md')]: {
    height: '100%',
    width: 'auto'
  }
}))

const StyledTypograpy = styled(Typography)(({ theme }) => ({
  padding: '0 25%',
  letterSpacing: '1px',
  fontWeight: 300,
  [theme.breakpoints.down('sm')]: {
    padding: '0 10%'
  }
}))

const HeroSlider = () => {
  return (
    <FadeSlider>
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