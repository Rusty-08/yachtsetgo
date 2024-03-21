import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import { SliderOverlay } from '../carousel'
import Link from 'next/link'
import { PageHeaderTitle } from '@/components/section-header';
import { styled } from '@mui/material/styles';

const StyledPageName = styled(Typography)(({ theme }) => ({
  textTransform: 'uppercase',
  letterSpacing: '2px',
  fontSize: '0.9rem'
}))

const StyledLink = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  color: theme.palette.primary.light,
  '&:hover': {
    color: theme.palette.secondary.dark,
  }
}))

const PageHeader = ({ children }) => {
  return (
    <Box sx={{ height: '17rem', width: '100%', position: 'relative' }}>
      <Image
        src='/images/yacht-landscape.jpg'
        alt=''
        width="0"
        height="0"
        sizes="100vw"
        style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      <SliderOverlay>
        <PageHeaderTitle sx={{ mt: 2 }}>{children}</PageHeaderTitle>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
          <StyledLink href="/">
            <StyledPageName>home</StyledPageName>
          </StyledLink>
          {'/'}
          <StyledPageName>{children}</StyledPageName>
        </Box>
      </SliderOverlay>
    </Box>
  )
}

export default PageHeader