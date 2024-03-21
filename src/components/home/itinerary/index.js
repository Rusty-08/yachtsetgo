import { Header, HeaderTitle } from '@/components/section-header'
import React from 'react'
import { SectionWrapper } from '../hero-slider'
import { Box, ImageList, ImageListItem, Typography, useMediaQuery, useTheme } from '@mui/material'
import { itirenaries } from './dummy-data'
import CustomButton from '@/components/ui/button'
import Image from 'next/image'
import { CustomImage } from '@/components/ui/image'

const Itirenary = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme => theme.breakpoints.down('sm'))

  return (
    <SectionWrapper sx={{ gap: isMobile ? 0 : 4, alignItems: 'center', [theme.breakpoints.down('sm')]: { px: 2 } }}>
      <Header subHeader='Journey By Boat' position='center'>
        we recommend beautiful places
      </Header>
      <ImageList
        sx={{ width: '100%', height: 'max-content', overflow: 'hidden' }}
        variant="masonry"
        cols={isMobile ? 1 : 2}
        gap={40}
      >
        {itirenaries.map(itirenary => (
          <ImageListItem key={itirenary.id}>
            <CustomImage src={itirenary.image} />
            {/* <Image
              src={itirenary.image}
              alt=''
              width="0"
              height="0"
              sizes="100vw"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> */}
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 2, pt: 3 }}>
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <HeaderTitle variant='h5' sx={{ color: 'secondary.dark', mb: 1 }}>{itirenary.title}</HeaderTitle>
                <Typography variant='overline' sx={{ letterSpacing: '1px' }}>
                  {itirenary.locationsCount} locations • {itirenary.activitiesCount} activities
                </Typography>
              </Box>
              <CustomButton color='dark' variant='contained'>Details</CustomButton>
            </Box>
          </ImageListItem>
        ))}
      </ImageList>
      <CustomButton color='dark' variant='contained'>Explore All</CustomButton>
    </SectionWrapper>
  )
}

export default Itirenary