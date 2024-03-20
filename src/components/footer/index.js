import { Avatar, Box, Grid, Typography } from '@mui/material'
import React from 'react'
import { HeaderTitle } from '../section-header'
import Image from 'next/image'
import { Icon } from '@iconify/react'

const socialMedia = [
  'ri:facebook-fill',
  'mdi:instagram',
  'ri:twitter-x-line',
  'ic:twotone-whatsapp',
]

const Footer = () => {
  return (
    <Box sx={{
      display: 'flex',
      alignItems: 'center',
      px: 4,
      height: '15rem',
      bgcolor: 'secondary.dark',
      color: 'primary.light'
    }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <HeaderTitle variant='h5'>Get the app</HeaderTitle>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Image src='/images/google-play-button.svg' alt='play store' width={150} height={50} />
              <Image src='/images/app-store-image.svg' alt='app store' width={150} height={50} />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={8}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <HeaderTitle variant='h5'>Address</HeaderTitle>
                <Box sx={{ display: 'flex', gap: 1.5 }}>
                  <Icon icon="carbon:location-filled" height='3rem' />
                  <Typography sx={{ letterSpacing: '1px' }}>No: 24 A, East Sample Street, Example, MD, USA 2345</Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <HeaderTitle variant='h5'>Contacts</HeaderTitle>
                <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'center' }}>
                  <Icon icon="carbon:phone-filled" height='1.5rem' />
                  <Typography sx={{ letterSpacing: '1px' }}>000 - 123 - 456789</Typography>
                </Box>
                <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'center' }}>
                  <Icon icon="mdi:email" height='1.5rem' />
                  <Typography sx={{ letterSpacing: '1px' }}>example@gmail.com</Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <HeaderTitle variant='h5'>Social Media</HeaderTitle>
                <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'center' }}>
                  {socialMedia.map((social, index) => (
                    <Avatar sx={{ color: 'secondary.dark', bgcolor: 'primary.light' }} key={index}>
                      <Icon icon={social} height='1.5rem' />
                    </Avatar>
                  ))}
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Footer