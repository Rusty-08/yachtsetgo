import { Header, HeaderTitle } from '@/components/section-header'
import React from 'react'
import { SectionWrapper } from '../hero-slider'
import { Box, ImageList, ImageListItem, Typography, useMediaQuery, useTheme } from '@mui/material'
import { itirenaries } from './dummy-data'
import CustomButton from '@/components/ui/button'
import { CustomImage } from '@/components/ui/image'
import { styled } from '@mui/material/styles';

const DesciptionWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  gap: '1rem',
  paddingTop: '1.5rem',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
  }
}))

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
            <DesciptionWrapper>
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <HeaderTitle variant='h5' sx={{ color: 'secondary.dark' }}>{itirenary.title}</HeaderTitle>
                <Typography variant='overline' sx={{ letterSpacing: '1px' }}>
                  {itirenary.locationsCount} locations • {itirenary.activitiesCount} activities
                </Typography>
              </Box>
              <CustomButton color='dark' variant='contained'>View Details</CustomButton>
            </DesciptionWrapper>
          </ImageListItem>
        ))}
      </ImageList>
      <CustomButton color='dark' variant='contained'>Explore All</CustomButton>
    </SectionWrapper>
  )
}

export default Itirenary