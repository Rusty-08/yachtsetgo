import { Avatar, Box, Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import { services } from './services-data';
import { Icon } from '@iconify/react';
import CustomButton from '@/components/ui/button';
import { Header } from '@/components/header';

const AboutTheFirm = () => {
  return (
    <Box sx={{ px: 4, py: 15 }}>
      <Grid container>
        <Grid item xs={12} md={6}>
          <Header subHeader='About The Firm'>FANTASTIC SERVICES PROVIDED BY YACHT</Header>
          <Grid sx={{ my: 2 }} container spacing={3} rowSpacing={3}>
            {services.map((service, index) => (
              <Grid key={index} item xs={12} md={6}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Avatar sx={{ width: '4rem', height: '4rem', color: 'primary.main', bgcolor: 'rgba(0, 156, 194, 0.1)' }}>
                    <Icon height='2rem' icon={service.icon} />
                  </Avatar>
                  <Typography>{service.name}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
          <Box sx={{ mt: 6 }}>
            <CustomButton color='dark' variant='contained'>View More</CustomButton>
            <CustomButton sx={{ gap: 1.5, color: 'secondary.dark' }} variant='text'>
              Book Your Yacht
              <Icon icon="heroicons:arrow-long-right-solid" width="1.8rem" />
            </CustomButton>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography>Image</Typography>
        </Grid>
      </Grid>
    </Box>
  )
}

export default AboutTheFirm