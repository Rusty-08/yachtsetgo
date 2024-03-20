import React from 'react'
import { Box, Typography } from '@mui/material';
import { Icon } from '@iconify/react';
import { HeaderTitle } from '@/components/section-header';
import CustomButton from '@/components/ui/button';
import { styled } from '@mui/material/styles';

export const ClampedText = styled(Typography)(() => ({
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  WebkitLineClamp: 3,
}))

const StyledBoatWrapper = styled(Box)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: '1.5rem',
  textAlign: 'start',
  padding: '2rem',
  height: '25rem',
  borderRight: '1px solid rgba(255,255,255,0.3)',
  [theme.breakpoints.down('sm')]: {
    backgroundColor: 'rgba(0, 156, 194, 0.1)'
  },
  '&:hover': {
    backgroundColor: 'rgba(0, 156, 194, 0.1)'
  }
}))

const Boat = ({ boat }) => {
  return (
    <StyledBoatWrapper>
      <Icon width='4rem' icon={boat.icon} />
      <HeaderTitle variant='h5'>{boat.name}</HeaderTitle>
      <ClampedText sx={{ WebkitLineClamp: 5 }}>{boat.desc}</ClampedText>
      <CustomButton variant='contained' sx={{ width: 'max-content' }}>Know More</CustomButton>
    </StyledBoatWrapper>
  )
}

export default Boat