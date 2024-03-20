import AboutTheFirm from "@/components/home/about-us"
import HeroSlider from "@/components/home/hero-slider"
import { Box } from "@mui/material"
import { styled } from '@mui/material/styles';

export const PagesWrapper = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  paddingTop: '5.5rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  flexDirection: 'column',
}))

const Home = () => {
  return (
    <Box>
      <HeroSlider />
      <AboutTheFirm />
    </Box>
  )
}

export default Home