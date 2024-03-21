import { Avatar, Box, Divider, Grid, Link as MuiLink, Typography } from '@mui/material'
import React from 'react'
import { HeaderTitle } from '../section-header'
import Image from 'next/image'
import { Icon } from '@iconify/react'
import { styled } from '@mui/material/styles';

const socialMedia = [
  'ri:facebook-fill',
  'mdi:instagram',
  'ri:twitter-x-line',
  'ic:twotone-whatsapp',
]

const FooterWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  gap: '1rem',
  padding: '0 2rem',
  backgroundColor: theme.palette.secondary.dark,
  color: theme.palette.primary.light,
  [theme.breakpoints.down('sm')]: {
    padding: '0 1rem',
  }
}))

const StyledLink = styled(MuiLink)(({ theme }) => ({
  display: 'flex',
  gap: '0.7rem',
  textDecoration: 'none',
  transition: 'all 0.2s ease-in-out',
  color: theme.palette.primary.light,
  '&:hover': {
    color: theme.palette.primary.main,
  }
}))

const LinkWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-end',
  [theme.breakpoints.down('sm')]: {
    justifyContent: 'flex-start',
  }
}))

const FlexWraper = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0.5rem 0 2rem 0',
  width: '100%',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    gap: '1.5rem',
  }
}))

const Contact = ({ icon, children, alignment = 'center' }) => {
  return (
    <StyledLink sx={{ alignItems: alignment }} href='/'>
      <Icon style={{ flexShrink: 0 }} icon={icon} height='1.4rem' />
      <Typography sx={{ letterSpacing: '1px' }}>{children}</Typography>
    </StyledLink>
  )
}

const FooterSection = ({ title, direction, children }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
      <HeaderTitle variant='h5'>{title}</HeaderTitle>
      <Box sx={{ display: 'flex', flexDirection: direction, gap: 1.5 }}>
        {children}
      </Box>
    </Box>
  )
}

const Footer = () => {
  return (
    <FooterWrapper>
      <Grid sx={{ pt: 6, pb: 3 }} container spacing={2} rowSpacing={{ xs: 4, md: 2 }}>
        <Grid item xs={12} md={4}>
          <FooterSection title='get the app' direction='row'>
            <MuiLink href='/'>
              <Image src='/images/google-play-button.svg' alt='play store' width={150} height={50} />
            </MuiLink>
            <MuiLink href='/'>
              <Image src='/images/app-store-image.svg' alt='app store' width={150} height={50} />
            </MuiLink>
          </FooterSection>
        </Grid>
        <Grid item xs={12} md={8}>
          <Grid container spacing={2} rowSpacing={{ xs: 4, md: 2 }}>
            <Grid item xs={12} md={4}>
              <FooterSection title='address' direction='row'>
                <Contact alignment='flex-start' icon="carbon:location-filled">
                  No: 24 A, East Sample Street, Example, MD, USA 2345
                </Contact>
              </FooterSection>
            </Grid>
            <Grid item xs={12} md={4}>
              <FooterSection title='contacts' direction='column'>
                <Contact icon="carbon:phone-filled">000 - 123 - 456789</Contact>
                <Contact icon="mdi:email">example@gmail.com</Contact>
              </FooterSection>
            </Grid>
            <Grid item xs={12} md={4}>
              <FooterSection title='social media' direction='row'>
                {socialMedia.map((social, index) => (
                  <MuiLink href='/' key={index}>
                    <Avatar
                      sizes='small'
                      sx={{
                        color: 'secondary.dark',
                        bgcolor: 'primary.light',
                        transition: 'all 0.2s ease-in-out',
                        '&:hover': {
                          bgcolor: 'primary.main',
                          color: 'secondary.light',
                        }
                      }}>
                      <Icon icon={social} height='1.3rem' />
                    </Avatar>
                  </MuiLink>
                ))}
              </FooterSection>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Divider sx={{ width: '100%', bgcolor: 'rgba(255, 255, 255, 0.3)' }} />
      <FlexWraper>
        <Image
          src='/images/ysgwhite.svg'
          alt='Yachtsetgo Logo'
          width={150}
          height={45}
          style={{
            objectFit: 'cover',
          }} />
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          <Icon icon="ph:copyright" />
          <Typography sx={{ fontSize: '0.9rem', letterSpacing: '1px' }}>
            {new Date().getFullYear()}{' '}
            YachtSetGo All Rights Reserved
          </Typography>
        </Box>
        <LinkWrapper>
          <StyledLink style={{ fontSize: '0.9rem', letterSpacing: '1px' }} href='/privacy-policy'>Privacy Policy</StyledLink>
        </LinkWrapper>
      </FlexWraper>
    </FooterWrapper>
  )
}

export default Footer