import Image from 'next/image'
import React from 'react'
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

const StyledImage = styled(Image)(({ theme }) => ({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  transform: 'scale(1.05)',
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1)',
  }
}))

export const CustomImage = ({ src, alt, ...props }) => {
  return (
    <Box sx={{ width: '100%', height: '100%', overflow: 'hidden', cursor: 'pointer' }} {...props}>
      <StyledImage
        src={src}
        alt={alt ?? ''}
        width="0"
        height="0"
        className='image'
        sizes="100vw" />
    </Box>
  )
}
