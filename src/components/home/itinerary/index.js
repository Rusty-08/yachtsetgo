import { Header } from '@/components/section-header'
import React from 'react'
import { SectionWrapper } from '../hero-slider'
import { Box } from '@mui/material'

const Itirenary = () => {
  return (
    <SectionWrapper>
      <Header subHeader='Journey By Boat' style={{ paddingRight: '25%' }}>
        reserve your dream location
      </Header>
      <Box sx={{ height: '30rem' }}></Box>
    </SectionWrapper>
  )
}

export default Itirenary