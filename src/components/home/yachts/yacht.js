import React from 'react'
import { Box, Typography } from '@mui/material';
import { HeaderTitle } from '@/components/section-header';
import CustomButton from '@/components/ui/button';
import { styled, createTheme } from '@mui/material/styles';
import Image from 'next/image';
import { SliderOverlay } from '@/components/carousel';
import { CustomImage } from '@/components/ui/image';

const StyledYachtWrapper = styled(Box)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  gap: '1.5rem',
  textAlign: 'start',
  height: '25rem',
  margin: '0 0.5rem',
  position: 'relative',
  '&:hover .overlay': {
    backgroundColor: 'rgba(7, 15, 43, 0.1)'
  },
  '&:hover .yacht-btn': {
    opacity: 1,
    transform: 'translateY(0)'
  },
  '&:hover .image': {
    transform: 'scale(1)'
  },
  [theme.breakpoints.down('sm')]: {
    margin: '0',
  }
}))

const Yacht = ({ yacht }) => {
  return (
    <StyledYachtWrapper>
      <CustomImage src={yacht.image} />
      <SliderOverlay className='overlay' sx={{ bgcolor: 'rgba(7, 15, 43, 0.5)', justifyContent: 'flex-start', pt: 4, gap: 4 }}>
        <Box>
          <Typography variant='overline' sx={{ letterSpacing: '1px' }}>{yacht.category}</Typography>
          <HeaderTitle variant='h5'>{yacht.name}</HeaderTitle>
        </Box>
        <CustomButton
          className='yacht-btn'
          sx={{ width: 'max-content', opacity: 0, transition: 'all 0.3s ease-in-out', transform: 'translateY(1rem)' }}
          variant='contained'
        >Know More</CustomButton>
      </SliderOverlay>
    </StyledYachtWrapper>
  )
}

export default Yacht