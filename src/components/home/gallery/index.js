import { Header, HeaderTitle, SectionHeader } from '@/components/section-header'
import React from 'react'
import { SectionWrapper } from '../hero-slider'
import { Avatar, Box, Grid, ImageList, ImageListItem, Typography, useMediaQuery, useTheme } from '@mui/material'
import { galleryImages, gellery } from './dummy-data'
import CustomButton from '@/components/ui/button'
import Image from 'next/image'
import { Icon } from '@iconify/react'
import { styled } from '@mui/material/styles';
import { CustomImage } from '@/components/ui/image'

const StyledSectionWrapper = styled(SectionWrapper)(({ theme }) => ({
  gap: '2rem',
  alignItems: 'center',
  paddingBottom: '7rem',
  [theme.breakpoints.down('sm')]: {
    paddingLeft: '1rem',
    paddingRight: '1rem',
    gap: 0,
  }
}))

const Gallery = () => {
  const isMobile = useMediaQuery(theme => theme.breakpoints.down('sm'))

  return (
    <StyledSectionWrapper>
      <Header subHeader='Our Gallery' position='center'>
        why yacht
        <SectionHeader component='span' sx={{ color: 'primary.main' }}>set</SectionHeader>
        go?
      </Header>
      <Grid container spacing={2}>
        {gellery.map((service, index) => (
          <Grid key={index} item xs={12} sm={6} md={4}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Avatar sx={{ width: '4rem', height: '4rem', color: 'primary.main', bgcolor: 'rgba(0, 156, 194, 0.1)' }}>
                <Icon height='2rem' icon={service.icon} />
              </Avatar>
              <Typography>{service.name}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
      <ImageList
        sx={{ width: '100%', py: 4, height: 'max-content', overflow: 'hidden' }}
        variant="quilted"
        cols={isMobile ? 2 : 4}
        gap={isMobile ? 10 : 20}
        rowHeight={200}
      >
        {galleryImages.map((item) => (
          <ImageListItem key={item.id} cols={item.cols || 1} rows={item.rows || 1}>
            <CustomImage src={item.image} />
          </ImageListItem>
        ))}
      </ImageList>
      <CustomButton color='dark' variant='contained'>Explore All</CustomButton>
    </StyledSectionWrapper>
  )
}

export default Gallery