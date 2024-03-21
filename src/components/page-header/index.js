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

const HeaderTitle = styled(PageHeaderTitle)(({ theme }) => ({
  marginTop: '1rem',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.7rem',
  }
}))

const StyledLink = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  color: theme.palette.primary.light,
  '&:hover': {
    color: theme.palette.secondary.dark,
  }
}))

const PageHeaderWrapper = styled(Box)(({ theme }) => ({
  height: '17rem',
  width: '100%',
  position: 'relative',
  [theme.breakpoints.down('sm')]: {
    height: '12rem',
  }
}))

const PageHeader = ({ children }) => {
  return (
    <PageHeaderWrapper>
      <Image
        src='/landingassets/images/yacht-landscape.jpg'
        alt=''
        width="0"
        height="0"
        sizes="100vw"
        style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      <SliderOverlay>
        <HeaderTitle>{children}</HeaderTitle>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
          <StyledLink href="/">
            <StyledPageName>home</StyledPageName>
          </StyledLink>
          {'/'}
          <StyledPageName>{children}</StyledPageName>
        </Box>
      </SliderOverlay>
    </PageHeaderWrapper>
  )
}

export default PageHeader