import { Avatar, Box, Grid, Link, Typography } from '@mui/material'
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

const StyledLink = styled(Link)(({ theme }) => ({
  display: 'flex',
  gap: '0.7rem',
  textDecoration: 'none',
  transition: 'all 0.2s ease-in-out',
  color: theme.palette.primary.light,
  '&:hover': {
    color: theme.palette.primary.main,
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
    <Box sx={{
      display: 'flex',
      alignItems: 'center',
      px: 4,
      py: 8,
      bgcolor: 'secondary.dark',
      color: 'primary.light'
    }}>
      <Grid container spacing={2} rowSpacing={{ xs: 4, md: 2 }}>
        <Grid item xs={12} md={4}>
          <FooterSection title='get the app' direction='row'>
            <Link href='/'>
              <Image src='/images/google-play-button.svg' alt='play store' width={150} height={50} />
            </Link>
            <Link href='/'>
              <Image src='/images/app-store-image.svg' alt='app store' width={150} height={50} />
            </Link>
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
                  <Link href='/' key={index}>
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
                  </Link>
                ))}
              </FooterSection>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Footer