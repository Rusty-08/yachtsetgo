import AboutTheFirm from "@/components/home/about-us"
import BoatTypes from "@/components/home/boat-types";
import HeroSlider from "@/components/home/hero-slider"
import Itirenary from "@/components/home/itinerary";
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
      <BoatTypes />
      <Itirenary />
    </Box>
  )
}

export default Home